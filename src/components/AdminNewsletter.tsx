import { useEffect, useState, type ChangeEvent } from 'react';

type NewsletterDraft = {
  campaignName: string; subject: string; preheader: string; headline: string; intro: string;
  storyHeading: string; storyBody: string; image: string; imageAlt: string; featureTitle: string;
  featureDescription: string; ctaLabel: string; ctaUrl: string;
};
const base = 'https://anekatours.vercel.app';
const initialDraft: NewsletterDraft = {
  campaignName: 'Island Notes — East Java', subject: 'A different side of East Java',
  preheader: 'A closer look at East Java, with a four-day sample journey from Surabaya to Bali.',
  headline: 'A different side of East Java',
  intro: 'From Surabaya to the volcanic highlands and onward to Bali, discover a sample journey shaped around the places, pace and interests of your travellers.',
  storyHeading: 'A journey made for a closer look',
  storyBody: 'The East Java Discovery sample begins in Surabaya and travels east through the region’s volcanic landscapes and rural heartland. It features an early morning visit to Mount Bromo, time among local village life and plantations, and the highlands of Mount Ijen before the ferry crossing to Bali.',
  image: '/images/optimized/bromo-023.webp', imageAlt: 'Mount Bromo at first light',
  featureTitle: 'East Java Discovery · 4 days',
  featureDescription: 'Surabaya Airport to Bali hotel, with Mount Bromo, East Java highlands and a ferry crossing to Bali.',
  ctaLabel: 'Explore the sample program', ctaUrl: `${base}/programs/east-java-discovery`,
};

function escapeHtml(value: string) { return value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] ?? char); }
function previewHtml(draft: NewsletterDraft) {
  const image = draft.image.startsWith('/') ? `${base}${draft.image}` : draft.image;
  const cta = draft.ctaUrl.startsWith('/') || /^https:\/\//i.test(draft.ctaUrl) || /^mailto:/i.test(draft.ctaUrl) ? draft.ctaUrl : '#';
  const text = draft.storyBody.split(/\n{2,}/).map((p) => `<p style="margin:0 0 12px;color:#455071;font-size:15px;line-height:1.75">${escapeHtml(p.trim()).replace(/\n/g, '<br>')}</p>`).join('');
  return `<!doctype html><html><body style="margin:0;background:#f1f3f8;font-family:Arial,sans-serif;color:#18234f"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#f1f3f8"><tr><td align="center" style="padding:18px"><table role="presentation" width="600" cellpadding="0" cellspacing="0" bgcolor="#fff" style="max-width:600px;width:100%;border-radius:14px;overflow:hidden"><tr><td style="padding:20px 32px;background:#101d63;border-bottom:4px solid #bd1e32"><img src="${base}/images/logo-aneka-kartika-white.png" width="240" alt="Aneka Kartika Tours" style="display:block;width:240px;max-width:100%"></td></tr><tr><td><img src="${escapeHtml(image)}" alt="${escapeHtml(draft.imageAlt)}" style="display:block;width:100%;height:auto"></td></tr><tr><td style="padding:28px 34px 10px"><p style="color:#bd1e32;font-size:11px;font-weight:bold;letter-spacing:2px">ISLAND NOTES · INDONESIA, THROUGH LOCAL EYES</p><h1 style="color:#101d63;font-size:36px;line-height:1.15">${escapeHtml(draft.headline)}</h1><p style="color:#455071;font-size:16px;line-height:1.7">${escapeHtml(draft.intro)}</p><h2 style="color:#101d63;font-size:22px">${escapeHtml(draft.storyHeading)}</h2>${text}<a href="${escapeHtml(cta)}" style="display:inline-block;padding:13px 20px;border-radius:24px;background:#bd1e32;color:white;text-decoration:none;font-weight:bold">${escapeHtml(draft.ctaLabel)} →</a></td></tr><tr><td style="padding:22px 34px;background:#f5f6fb"><small style="color:#bd1e32">FOR OUR TRAVEL TRADE PARTNERS</small><h2 style="color:#101d63">${escapeHtml(draft.featureTitle)}</h2><p style="color:#455071;line-height:1.7">${escapeHtml(draft.featureDescription)}</p></td></tr><tr><td align="center" style="padding:24px;background:#101d63;color:#fff;font-size:12px;line-height:1.7"><b>ANEKA KARTIKA TOURS &amp; TRAVEL SERVICES</b><br>Jl. Manyar Kertoarjo V-50, Surabaya 60285, Indonesia<br>+62 31 592 9000 · info@aneka-tours.co.id<br><br><a href="#unsubscribe" style="color:#fff">Unsubscribe</a></td></tr></table></td></tr></table></body></html>`;
}

export default function AdminNewsletter() {
  const [draft, setDraft] = useState<NewsletterDraft>(initialDraft);
  const [missing, setMissing] = useState<string[]>([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  useEffect(() => {
    fetch('/api/admin-newsletter', { cache: 'no-store' }).then(async (response) => {
      const result = await response.json();
      if (response.status === 401) throw new Error('Please sign in through the admin menu first.');
      if (!response.ok) throw new Error(result.error || 'Could not load the newsletter editor.');
      setDraft(result.draft); setMissing(result.missing || []); setAuthenticated(true);
    }).catch((cause) => setError(cause instanceof Error ? cause.message : 'Could not load newsletter editor.'))
      .finally(() => setLoading(false));
  }, []);
  const update = (key: keyof NewsletterDraft) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDraft((current) => ({ ...current, [key]: event.target.value }));
  const uploadPhoto = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; event.target.value = '';
    if (!file) return;
    setBusy(true); setError(''); setNotice('');
    try {
      const data = await new Promise<string>((resolve, reject) => {
        const objectUrl = URL.createObjectURL(file); const image = new Image();
        image.onload = () => {
          URL.revokeObjectURL(objectUrl);
          const scale = Math.min(1, 1800 / Math.max(image.naturalWidth, image.naturalHeight));
          const canvas = document.createElement('canvas'); canvas.width = Math.max(1, Math.round(image.naturalWidth * scale)); canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
          const context = canvas.getContext('2d'); if (!context) return reject(new Error('This image could not be processed.'));
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          const encode = (quality: number) => canvas.toBlob((blob) => {
            if (!blob) return reject(new Error('This image could not be converted to WebP.'));
            if (blob.size > 2_700_000 && quality > .4) return encode(quality - .12);
            if (blob.size > 2_900_000) return reject(new Error('The image is too large after conversion.'));
            const reader = new FileReader(); reader.onload = () => typeof reader.result === 'string' ? resolve(reader.result) : reject(new Error('Image could not be read.')); reader.onerror = () => reject(new Error('Image could not be read.')); reader.readAsDataURL(blob);
          }, 'image/webp', quality);
          encode(.82);
        };
        image.onerror = () => { URL.revokeObjectURL(objectUrl); reject(new Error('Choose a valid image file.')); }; image.src = objectUrl;
      });
      const response = await fetch('/api/admin-media', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ type: 'image/webp', data }) });
      const result = await response.json(); if (!response.ok) throw new Error(result.error || 'Image upload failed.');
      setDraft((current) => ({ ...current, image: result.url })); setNotice('Newsletter image uploaded. Save the draft to keep your changes.');
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Image upload failed.'); }
    finally { setBusy(false); }
  };
  const save = async () => {
    setBusy(true); setError(''); setNotice('');
    try {
      const response = await fetch('/api/admin-newsletter', { method: 'PUT', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ draft }) });
      const result = await response.json(); if (!response.ok) throw new Error(result.error || 'Could not save the draft.');
      setNotice('Newsletter draft saved.');
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Could not save the draft.'); }
    finally { setBusy(false); }
  };
  const send = async () => {
    if (!window.confirm('Send this newsletter now to the configured Brevo opt-in list? This action cannot be undone.')) return;
    setBusy(true); setError(''); setNotice('');
    try {
      const response = await fetch('/api/admin-newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ draft, confirmSend: true }) });
      const result = await response.json(); if (!response.ok) throw new Error(result.error || 'Brevo could not send the campaign.');
      setNotice(`${result.message} Campaign ID: ${result.campaignId}.`);
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Brevo could not send the campaign.'); }
    finally { setBusy(false); }
  };
  if (loading) return <main className="admin-leads"><div className="admin-leads__content"><p className="admin-leads__empty">Loading newsletter editor…</p></div></main>;
  return <main className="admin-leads admin-newsletter">
    <header className="admin-leads__topbar"><a href="/admin" className="admin-leads__brand"><img src="/favicon-32x32.png" alt="" /> Aneka Kartika <span>Admin</span></a><a href="/admin">Admin menu</a></header>
    <div className="admin-leads__content"><div className="admin-leads__heading"><div><p className="eyebrow">Email campaign</p><h1 className="h2">Newsletter editor</h1><p>Compose, preview, save as a draft, and send through Brevo.</p></div></div>
      {!authenticated ? <p className="admin-leads__error" role="alert">{error}</p> : <>
        <div className="admin-newsletter__notice"><strong>Recipient safety:</strong> the Brevo list must contain only people who subscribed to newsletter updates. Chat enquiry emails are not automatically used for marketing.</div>
        <div className="admin-newsletter__layout"><form className="admin-newsletter__form" onSubmit={(event) => { event.preventDefault(); void save(); }}>
          <label>Campaign name<input value={draft.campaignName} onChange={update('campaignName')} maxLength={120} required /></label>
          <label>Email subject<input value={draft.subject} onChange={update('subject')} maxLength={180} required /></label>
          <label>Inbox preview text<input value={draft.preheader} onChange={update('preheader')} maxLength={250} required /></label>
          <label>Main headline<input value={draft.headline} onChange={update('headline')} maxLength={180} required /></label>
          <label>Introduction<textarea rows={3} value={draft.intro} onChange={update('intro')} maxLength={1800} required /></label>
          <label>Story heading<input value={draft.storyHeading} onChange={update('storyHeading')} maxLength={180} required /></label>
          <label>Story content<textarea rows={7} value={draft.storyBody} onChange={update('storyBody')} maxLength={5000} required /></label>
          <label>Hero image URL<input value={draft.image} onChange={update('image')} required /><small>Use a website image path or upload a new photo.</small><input aria-label="Upload newsletter image" type="file" accept="image/*" onChange={(event) => void uploadPhoto(event)} /></label>
          <label>Image description<input value={draft.imageAlt} onChange={update('imageAlt')} maxLength={300} required /></label>
          <label>Featured program title<input value={draft.featureTitle} onChange={update('featureTitle')} maxLength={180} required /></label>
          <label>Featured program details<textarea rows={3} value={draft.featureDescription} onChange={update('featureDescription')} maxLength={1000} required /></label>
          <label>Button label<input value={draft.ctaLabel} onChange={update('ctaLabel')} maxLength={80} required /></label>
          <label>Button link<input value={draft.ctaUrl} onChange={update('ctaUrl')} required /></label>
          {missing.length > 0 && <p className="admin-newsletter__setup">Send is disabled until Vercel has these server-only settings: {missing.join(', ')}.</p>}
          {error && <p className="admin-leads__error" role="alert">{error}</p>}{notice && <p className="admin-content__notice" role="status">{notice}</p>}
          <div className="admin-newsletter__actions"><button className="admin-leads__button admin-leads__button--quiet" type="submit" disabled={busy}>{busy ? 'Saving…' : 'Save draft'}</button><button className="admin-leads__button" type="button" onClick={() => void send()} disabled={busy || missing.length > 0}>{busy ? 'Please wait…' : 'Send'}</button></div>
        </form><section className="admin-newsletter__preview"><h2>Email preview</h2><iframe title="Newsletter preview" sandbox="" srcDoc={previewHtml(draft)} /></section></div>
      </>}
    </div>
  </main>;
}
