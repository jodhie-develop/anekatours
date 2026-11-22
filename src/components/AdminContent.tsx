import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { makeCmsSeed, type CmsAttraction, type CmsContent, type CmsDestination, type CmsProgram } from '../data/cms';
import { destinations as siteDestinations, programServiceTypes } from '../data/site';

type Tab = 'regions' | 'destinations' | 'programs';

function lines(value: string) {
  return value.split('\n').map((line) => line.trim()).filter(Boolean);
}

function toLines(items: string[]) {
  return items.join('\n');
}

function parsePairs(value: string, firstName: string, secondName: string) {
  return lines(value).map((line) => {
    const separator = line.indexOf('|');
    return separator < 0 ? { [firstName]: line, [secondName]: '' } : {
      [firstName]: line.slice(0, separator).trim(), [secondName]: line.slice(separator + 1).trim(),
    };
  });
}

function encodeWebp(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const scale = Math.min(1, 1800 / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext('2d');
      if (!context) return reject(new Error('This image could not be processed.'));
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const save = (quality: number) => canvas.toBlob((blob) => {
        if (!blob) return reject(new Error('This image could not be converted to WebP.'));
        if (blob.size > 2_700_000 && quality > 0.4) return save(quality - 0.12);
        if (blob.size > 2_900_000) return reject(new Error('This image is too large after conversion.'));
        const reader = new FileReader();
        reader.onload = () => typeof reader.result === 'string' ? resolve(reader.result) : reject(new Error('This image could not be read.'));
        reader.onerror = () => reject(new Error('This image could not be read.'));
        reader.readAsDataURL(blob);
      }, 'image/webp', quality);
      save(0.82);
    };
    image.onerror = () => { URL.revokeObjectURL(objectUrl); reject(new Error('Choose a valid image file.')); };
    image.src = objectUrl;
  });
}

async function uploadImage(file: File): Promise<string> {
  const data = await encodeWebp(file);
  const response = await fetch('/api/admin-media', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ type: 'image/webp', data }),
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || 'Image upload failed.');
  return result.url;
}

function blankAttraction(regionSlug: string, regionName: string): CmsAttraction {
  return {
    region: regionName, regionSlug, slug: '', published: true, metaTitle: '', metaDescription: '', h1: '', image: '', imageAlt: '',
    intro: [], highlights: [], experience: [], bestTime: [], logistics: [], faq: [], cta: '', pairsWith: [], pairsText: '',
  } as CmsAttraction;
}

function blankProgram(): CmsProgram {
  return { slug: '', days: null, title: '', start: '', finish: '', serviceTypes: [], destinationSlugs: [], image: null, description: '', supportingImages: [], published: true };
}

function blankDestination(): CmsDestination {
  return { slug: '', name: '', image: '', imageAlt: '', intro: [], metaTitle: '', metaDescription: '', published: true };
}

export default function AdminContent() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState<CmsContent>({ destinations: [], attractions: [], programs: [] });
  const [tab, setTab] = useState<Tab>('regions');
  const [selectedId, setSelectedId] = useState('');
  const [record, setRecord] = useState<CmsAttraction | CmsDestination | CmsProgram | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [search, setSearch] = useState('');
  const regions = content.destinations.map(({ slug, name }) => ({ slug, name }));

  const load = async () => {
    setLoading(true); setError('');
    try {
      const response = await fetch('/api/admin-content', { cache: 'no-store' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not load website content.');
      const seed = makeCmsSeed();
      const loaded = {
        destinations: result.destinations?.length ? result.destinations : seed.destinations,
        attractions: result.attractions.length ? result.attractions : seed.attractions,
        programs: result.programs.length ? result.programs.map((program: CmsProgram) => {
          const seeded = seed.programs.find((item) => item.slug === program.slug);
          return { ...program, serviceTypes: program.serviceTypes ?? seeded?.serviceTypes ?? [], destinationSlugs: program.destinationSlugs ?? seeded?.destinationSlugs ?? [] };
        }) : seed.programs,
      } as CmsContent;
      setContent(loaded);
      setAuthenticated(true);
      setSelectedId('');
      setRecord(null);
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : 'Could not load website content.';
      if (message.toLowerCase().includes('sign in')) setAuthenticated(false);
      else setError(message);
    } finally { setLoading(false); }
  };

  useEffect(() => {
    fetch('/api/admin-login', { cache: 'no-store' }).then(async (response) => {
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Admin login is not configured.');
      if (result.authenticated) await load();
      else setLoading(false);
    }).catch((cause) => { setError(cause instanceof Error ? cause.message : 'Admin page is unavailable.'); setLoading(false); });
  }, []);

  const rows = tab === 'regions' ? content.destinations : tab === 'destinations' ? content.attractions : content.programs;
  const filteredRows = useMemo(() => rows.filter((item) => {
    const label = 'h1' in item ? item.h1 : 'name' in item ? item.name : item.title;
    const detail = 'region' in item ? item.region : 'start' in item ? item.start : item.slug;
    return `${label} ${detail}`.toLowerCase().includes(search.trim().toLowerCase());
  }), [rows, search]);

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setBusy(true); setError('');
    try {
      const response = await fetch('/api/admin-login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Sign in failed.');
      setAuthenticated(true); setPassword(''); await load();
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Sign in failed.'); }
    finally { setBusy(false); }
  };

  const selectTab = (next: Tab) => { setTab(next); setSearch(''); setSelectedId(''); setRecord(null); setError(''); setNotice(''); };
  const selectRecord = (id: string) => {
    setSelectedId(id);
    const selected = tab === 'regions' ? content.destinations.find((item) => item.slug === id) : tab === 'destinations' ? content.attractions.find((item) => `${item.regionSlug}/${item.slug}` === id) : content.programs.find((item) => item.slug === id);
    setRecord(selected ? structuredClone(selected) : null);
    setError(''); setNotice('');
  };
  const addNew = () => {
    const firstRegion = regions[0] || { slug: 'java', name: 'Java' };
    setSelectedId('__new__'); setRecord(tab === 'regions' ? blankDestination() : tab === 'destinations' ? blankAttraction(firstRegion.slug, firstRegion.name) : blankProgram()); setError(''); setNotice('');
  };
  const signOut = async () => { await fetch('/api/admin-login', { method: 'DELETE' }); setAuthenticated(false); setContent({ destinations: [], attractions: [], programs: [] }); };

  const save = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); if (!record) return;
    setBusy(true); setError(''); setNotice('');
    try {
      let nextRecord = structuredClone(record) as CmsAttraction | CmsDestination | CmsProgram;
      if (tab === 'regions') {
        const item = nextRecord as CmsDestination;
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug)) throw new Error('Use a lowercase URL slug with hyphens, for example: komodo-flores.');
        if (!item.name.trim()) throw new Error('Enter a destination name.');
      } else if (tab === 'destinations') {
        const item = nextRecord as CmsAttraction;
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug)) throw new Error('Use a lowercase URL slug with hyphens, for example: lake-toba.');
        if (item.image?.startsWith('blob:')) throw new Error('Please wait for the image to finish uploading.');
      } else {
        const item = nextRecord as CmsProgram;
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug)) throw new Error('Use a lowercase URL slug with hyphens, for example: sumatra-highlights.');
        if (!item.title || !item.start || !item.finish) throw new Error('Enter the program title, start and finish locations.');
      }
      const collection = tab === 'regions' ? 'destinations' : tab === 'destinations' ? 'attractions' : 'programs';
      const items = [...content[collection]] as (CmsAttraction | CmsDestination | CmsProgram)[];
      const oldIndex = items.findIndex((item) => tab === 'destinations'
        ? `${(item as CmsAttraction).regionSlug}/${item.slug}` === selectedId
        : item.slug === selectedId);
      if (oldIndex >= 0) items.splice(oldIndex, 1);
      const duplicate = items.some((item) => tab === 'destinations'
        ? `${(item as CmsAttraction).regionSlug}/${item.slug}` === `${(nextRecord as CmsAttraction).regionSlug}/${nextRecord.slug}`
        : item.slug === nextRecord.slug);
      if (duplicate) throw new Error('That URL slug already exists in this section.');
      items.push(nextRecord);
      const updated = { ...content, [collection]: items } as CmsContent;
      const response = await fetch('/api/admin-content', { method: 'PUT', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(updated) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not save website content.');
      setContent(updated); setSelectedId(tab === 'destinations' ? `${(nextRecord as CmsAttraction).regionSlug}/${nextRecord.slug}` : nextRecord.slug);
      setRecord(nextRecord); setNotice('Saved. Public pages update automatically within about one minute.');
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not save content.'); }
    finally { setBusy(false); }
  };

  const updateRecord = (key: string, value: unknown) => setRecord((current) => current ? { ...current, [key]: value } as CmsAttraction | CmsDestination | CmsProgram : current);

  const upload = async (event: ChangeEvent<HTMLInputElement>, target: 'destination' | 'program' | number) => {
    const file = event.target.files?.[0]; event.target.value = '';
    if (!file || !record) return;
    setBusy(true); setError(''); setNotice('');
    try {
      const imageUrl = await uploadImage(file);
      if (target === 'destination') updateRecord('image', imageUrl);
      else if (target === 'program') updateRecord('image', imageUrl);
      else {
        const program = record as CmsProgram;
        const images = [...program.supportingImages];
        while (images.length <= target) images.push({ image: '', title: '' });
        images[target] = { image: imageUrl, title: images[target]?.title || `Supporting photo ${target + 1}` };
        updateRecord('supportingImages', images);
      }
      setNotice('Image uploaded. Save the content record to publish this change.');
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Image upload failed.'); }
    finally { setBusy(false); }
  };

  if (loading) return <main className="admin-leads"><div className="admin-leads__content">Loading admin…</div></main>;
  if (!authenticated) return (
    <main className="admin-leads">
      <div className="admin-leads__topbar"><strong>Aneka Kartika Admin</strong><a href="/">Back to website</a></div>
      <div className="admin-leads__content"><form className="admin-login-card" onSubmit={login}><h1>Sign in to manage website content</h1>
        <label>Username<input value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" required /></label>
        <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required /></label>
        {error && <p className="admin-leads__error" role="alert">{error}</p>}<button className="admin-leads__button" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
      </form></div>
    </main>
  );

  return (
    <main className="admin-leads admin-content">
      <header className="admin-leads__topbar"><strong>Aneka Kartika Admin</strong><div className="admin-content__toplinks"><a href="/admin">Admin menu</a><a href="/">View website</a><button type="button" className="admin-leads__button admin-leads__button--quiet" onClick={() => void signOut()}>Sign out</button></div></header>
      <div className="admin-leads__content">
        <div className="admin-leads__heading"><div><h1>Website content</h1><p>Manage destination regions, place detail pages, sample programs, and their photos.</p></div></div>
        <nav className="admin-content__tabs" aria-label="Content type"><button className={tab === 'regions' ? 'is-active' : ''} onClick={() => selectTab('regions')}>Destination regions</button><button className={tab === 'destinations' ? 'is-active' : ''} onClick={() => selectTab('destinations')}>Places</button><button className={tab === 'programs' ? 'is-active' : ''} onClick={() => selectTab('programs')}>Sample programs</button></nav>
        <div className="admin-content__workspace">
          <aside className="admin-content__sidebar"><div className="admin-leads__toolbar"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search content" /><button className="admin-leads__button" onClick={addNew}>Add new</button></div>
            <div className="admin-content__items">{filteredRows.map((item) => {
              const id = tab === 'destinations' ? `${(item as CmsAttraction).regionSlug}/${item.slug}` : item.slug;
              const label = 'h1' in item ? item.h1 : 'name' in item ? item.name : item.title;
              return <button key={id} className={id === selectedId ? 'is-active' : ''} onClick={() => selectRecord(id)}><strong>{label || 'Untitled'}</strong><small>{tab === 'destinations' ? (item as CmsAttraction).region : `${(item as CmsProgram).start} → ${(item as CmsProgram).finish}`}</small></button>;
            })}</div>
          </aside>
          <section className="admin-content__editor">
            {!record ? <p className="admin-leads__empty">Select an item or add a new one.</p> : tab === 'regions' ? (
              <RegionEditor record={record as CmsDestination} update={updateRecord} upload={upload} onSave={save} busy={busy} error={error} notice={notice} />
            ) : tab === 'destinations' ? (
              <DestinationEditor record={record as CmsAttraction} regions={regions} update={updateRecord} upload={upload} onSave={save} busy={busy} error={error} notice={notice} />
            ) : (
              <ProgramEditor record={record as CmsProgram} update={updateRecord} upload={upload} onSave={save} busy={busy} error={error} notice={notice} />
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

function RegionEditor({ record, update, upload, onSave, busy, error, notice }: {
  record: CmsDestination; update: (key: string, value: unknown) => void;
  upload: (event: ChangeEvent<HTMLInputElement>, target: 'destination' | 'program' | number) => void;
  onSave: (event: FormEvent<HTMLFormElement>) => void; busy: boolean; error: string; notice: string;
}) {
  const change = (key: keyof CmsDestination) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => update(key, event.target.value);
  return <form className="admin-content__form" onSubmit={onSave}><h2>{record.slug ? `Edit ${record.name || record.slug}` : 'New destination region'}</h2>
    <div className="admin-content__grid">
      <label className="admin-content__field"><span>Region name</span><input value={record.name} onChange={change('name')} required /></label>
      <label className="admin-content__field"><span>URL slug</span><input value={record.slug} onChange={change('slug')} placeholder="moluccas" required /></label>
      <label className="admin-content__field admin-content__field--wide"><span>SEO title</span><input value={record.metaTitle} onChange={change('metaTitle')} required /></label>
      <label className="admin-content__field admin-content__field--wide"><span>SEO description</span><textarea rows={3} value={record.metaDescription} onChange={change('metaDescription')} /></label>
      <label className="admin-content__field admin-content__field--wide"><span>Introduction</span><textarea rows={5} value={toLines(record.intro)} onChange={(event) => update('intro', lines(event.target.value))} /><small>One paragraph per line.</small></label>
      <label className="admin-content__field"><span>Card and hero photo</span>{record.image && <img className="admin-content__preview" src={record.image} alt="Current destination region" />}<input type="file" accept="image/*" onChange={(event) => upload(event, 'destination')} /></label>
      <label className="admin-content__field"><span>Image description (alt text)</span><input value={record.imageAlt} onChange={change('imageAlt')} /></label>
      <label className="admin-content__check"><input type="checkbox" checked={record.published !== false} onChange={(event) => update('published', event.target.checked)} /><span>Published on the website</span></label>
    </div><EditorFeedback busy={busy} error={error} notice={notice} /><button className="admin-leads__button" disabled={busy}>{busy ? 'Saving...' : 'Save region'}</button>
  </form>;
}

function DestinationEditor({ record, regions, update, upload, onSave, busy, error, notice }: {
  record: CmsAttraction; regions: { slug: string; name: string }[]; update: (key: keyof CmsAttraction, value: unknown) => void;
  upload: (event: ChangeEvent<HTMLInputElement>, target: 'destination' | 'program' | number) => void;
  onSave: (event: FormEvent<HTMLFormElement>) => void; busy: boolean; error: string; notice: string;
}) {
  const change = (key: keyof CmsAttraction) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => update(key, event.target.value);
  const textarea = (key: keyof CmsAttraction, value: string, label: string, hint?: string) => <label className="admin-content__field"><span>{label}</span>{hint && <small>{hint}</small>}<textarea rows={key === 'intro' ? 4 : 3} value={value} onChange={(event) => {
    const text = event.target.value;
    if (key === 'intro' || key === 'experience' || key === 'bestTime') update(key, lines(text));
    else if (key === 'highlights') update(key, parsePairs(text, 'title', 'text'));
    else if (key === 'logistics') update(key, parsePairs(text, 'challenge', 'solution'));
    else if (key === 'faq') update(key, parsePairs(text, 'question', 'answer'));
    else update(key, text);
  }} /></label>;
  return <form className="admin-content__form" onSubmit={onSave}>
    <h2>{record.slug ? `Edit ${record.h1 || record.slug}` : 'New destination detail'}</h2>
    <div className="admin-content__grid"><label className="admin-content__field"><span>Region</span><select value={record.regionSlug} onChange={(event) => { const region = regions.find((item) => item.slug === event.target.value); if (region) { update('regionSlug', region.slug); update('region', region.name); } }}>{regions.map((region) => <option key={region.slug} value={region.slug}>{region.name}</option>)}</select></label>
      <label className="admin-content__field"><span>URL slug</span><input value={record.slug} onChange={change('slug')} placeholder="lake-toba" required /></label>
      <label className="admin-content__field admin-content__field--wide"><span>Page title</span><input value={record.h1} onChange={change('h1')} required /></label>
      <label className="admin-content__field admin-content__field--wide"><span>SEO title</span><input value={record.metaTitle} onChange={change('metaTitle')} required /></label>
      {textarea('metaDescription', record.metaDescription, 'SEO description')}
      {textarea('intro', toLines(record.intro), 'Introduction', 'One paragraph per line.')}
      {textarea('highlights', record.highlights.map((item) => `${item.title} | ${item.text}`).join('\n'), 'Highlights', 'One item per line: title | description')}
      {textarea('experience', toLines(record.experience), 'The Aneka Kartika Experience', 'One bullet per line.')}
      {textarea('bestTime', toLines(record.bestTime), 'When to visit', 'One point per line.')}
      {textarea('logistics', record.logistics.map((item) => `${item.challenge} | ${item.solution}`).join('\n'), 'Logistics', 'One item per line: challenge | solution')}
      {textarea('pairsText', record.pairsText, 'Pairs well with', 'One related destination per line.')}
      {textarea('faq', record.faq.map((item) => `${item.question} | ${item.answer}`).join('\n'), 'Frequently asked questions', 'One item per line: question | answer')}
      {textarea('cta', record.cta, 'Enquiry call to action')}
      <label className="admin-content__field"><span>Hero photo</span>{record.image && <img className="admin-content__preview" src={record.image} alt="Current destination" />}<input type="file" accept="image/*" onChange={(event) => upload(event, 'destination')} /></label>
      <label className="admin-content__field"><span>Image description (alt text)</span><input value={record.imageAlt} onChange={change('imageAlt')} /></label>
      <label className="admin-content__check"><input type="checkbox" checked={record.published !== false} onChange={(event) => update('published', event.target.checked)} /><span>Published on the website</span></label>
    </div>
    <EditorFeedback busy={busy} error={error} notice={notice} />
    <button className="admin-leads__button" disabled={busy}>{busy ? 'Saving…' : 'Save destination'}</button>
  </form>;
}

function ProgramEditor({ record, update, upload, onSave, busy, error, notice }: {
  record: CmsProgram; update: (key: keyof CmsProgram, value: unknown) => void;
  upload: (event: ChangeEvent<HTMLInputElement>, target: 'destination' | 'program' | number) => void;
  onSave: (event: FormEvent<HTMLFormElement>) => void; busy: boolean; error: string; notice: string;
}) {
  const change = (key: keyof CmsProgram) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => update(key, event.target.value);
  return <form className="admin-content__form" onSubmit={onSave}><h2>{record.slug ? `Edit ${record.title}` : 'New sample program'}</h2>
    <div className="admin-content__grid">
      <label className="admin-content__field"><span>URL slug</span><input value={record.slug} onChange={change('slug')} placeholder="sumatra-highlights" required /></label>
      <label className="admin-content__field"><span>Number of days</span><input type="number" min="1" max="365" value={record.days ?? ''} onChange={(event) => update('days', event.target.value ? Number(event.target.value) : null)} /></label>
      <label className="admin-content__field admin-content__field--wide"><span>Program title</span><input value={record.title} onChange={change('title')} required /></label>
      <label className="admin-content__field"><span>Start</span><input value={record.start} onChange={change('start')} required /></label>
      <label className="admin-content__field"><span>Finish</span><input value={record.finish} onChange={change('finish')} required /></label>
      <div className="admin-content__field admin-content__field--wide"><span>Service categories</span><div className="admin-content__checks">{programServiceTypes.map((service) => <label key={service}><input type="checkbox" checked={record.serviceTypes.includes(service)} onChange={(event) => update('serviceTypes', event.target.checked ? [...record.serviceTypes, service] : record.serviceTypes.filter((item) => item !== service))} /><span>{service}</span></label>)}</div></div>
      <div className="admin-content__field admin-content__field--wide"><span>Destination regions</span><div className="admin-content__checks">{siteDestinations.map((destination) => <label key={destination.slug}><input type="checkbox" checked={record.destinationSlugs.includes(destination.slug)} onChange={(event) => update('destinationSlugs', event.target.checked ? [...record.destinationSlugs, destination.slug] : record.destinationSlugs.filter((item) => item !== destination.slug))} /><span>{destination.name}</span></label>)}</div></div>
      <label className="admin-content__field admin-content__field--wide"><span>Program description</span><textarea rows={8} value={record.description} onChange={change('description')} /></label>
      <label className="admin-content__field"><span>Cover photo</span>{record.image && <img className="admin-content__preview" src={record.image} alt="Current program cover" />}<input type="file" accept="image/*" onChange={(event) => upload(event, 'program')} /></label>
      <label className="admin-content__check"><input type="checkbox" checked={record.published !== false} onChange={(event) => update('published', event.target.checked)} /><span>Published on the website</span></label>
    </div>
    <div className="admin-content__supporting"><h3>Supporting photos</h3>{Array.from({ length: 4 }, (_, index) => {
      const item = record.supportingImages[index] || { image: '', title: '' };
      return <label key={index} className="admin-content__field"><span>Photo {index + 1}</span>{item.image && <img className="admin-content__preview" src={item.image} alt={item.title || `Supporting photo ${index + 1}`} />}<input type="file" accept="image/*" onChange={(event) => upload(event, index)} /><input aria-label={`Photo ${index + 1} title`} value={item.title} placeholder="Photo description" onChange={(event) => { const images = [...record.supportingImages]; while (images.length <= index) images.push({ image: '', title: '' }); images[index] = { image: item.image, title: event.target.value }; update('supportingImages', images); }} /></label>;
    })}</div>
    <EditorFeedback busy={busy} error={error} notice={notice} /><button className="admin-leads__button" disabled={busy}>{busy ? 'Saving…' : 'Save sample program'}</button>
  </form>;
}

function EditorFeedback({ busy, error, notice }: { busy: boolean; error: string; notice: string }) {
  return <>{busy && <p className="admin-content__feedback">Saving or uploading…</p>}{error && <p className="admin-leads__error" role="alert">{error}</p>}{notice && <p className="admin-content__notice" role="status">{notice}</p>}</>;
}
