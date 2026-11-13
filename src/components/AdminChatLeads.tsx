import { useEffect, useMemo, useState, type FormEvent } from 'react';

type Lead = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  whatsapp: string;
  summary: string;
  consentAt: string;
  questionCount: string;
};

function csvCell(value: string) {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${safe.replace(/"/g, '""')}"`;
}

function exportCsv(leads: Lead[]) {
  const columns: (keyof Lead)[] = ['createdAt', 'email', 'whatsapp', 'summary', 'questionCount', 'consentAt'];
  const rows = [columns.join(','), ...leads.map((lead) => columns.map((column) => csvCell(lead[column])).join(','))];
  const url = URL.createObjectURL(new Blob([`${rows.join('\r\n')}\r\n`], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `aneka-chat-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export default function AdminChatLeads() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState('');
  const [error, setError] = useState('');

  const loadLeads = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/admin-chat-leads', { headers: { Accept: 'application/json' }, cache: 'no-store' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not load records.');
      setLeads(result.leads);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load records.');
    } finally { setLoading(false); }
  };

  useEffect(() => {
    let alive = true;
    fetch('/api/admin-login', { cache: 'no-store' })
      .then((response) => response.json().then((result) => ({ response, result })))
      .then(({ response, result }) => {
        if (!alive) return;
        if (!response.ok) throw new Error(result.error || 'Admin login is not configured yet.');
        setAuthenticated(result.authenticated === true);
        if (result.authenticated) void loadLeads();
        else setLoading(false);
      })
      .catch((err) => {
        if (!alive) return;
        setError(err instanceof Error ? err.message : 'Admin page is unavailable.');
        setLoading(false);
      });
    return () => { alive = false; };
  }, []);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return leads;
    return leads.filter((lead) => `${lead.email} ${lead.whatsapp} ${lead.summary}`.toLowerCase().includes(query));
  }, [leads, search]);

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusyId('login');
    setError('');
    try {
      const response = await fetch('/api/admin-login', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Sign in failed.');
      setAuthenticated(true);
      setPassword('');
      await loadLeads();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed.');
    } finally { setBusyId(''); }
  };

  const save = async (lead: Lead) => {
    setBusyId(lead.id);
    setError('');
    try {
      const response = await fetch('/api/admin-chat-leads', {
        method: 'PATCH', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ id: lead.id, email: lead.email, whatsapp: lead.whatsapp, summary: lead.summary }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not save this record.');
      setLeads((current) => current.map((item) => item.id === lead.id ? result.lead : item));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save this record.');
    } finally { setBusyId(''); }
  };

  const remove = async (id: string) => {
    if (!window.confirm('Delete this chat lead permanently?')) return;
    setBusyId(id);
    setError('');
    try {
      const response = await fetch('/api/admin-chat-leads', {
        method: 'DELETE', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not delete this record.');
      setLeads((current) => current.filter((lead) => lead.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not delete this record.');
    } finally { setBusyId(''); }
  };

  const logout = async () => {
    await fetch('/api/admin-login', { method: 'DELETE' });
    setAuthenticated(false);
    setLeads([]);
  };

  return (
    <main className="admin-leads">
      <header className="admin-leads__topbar">
        <a href="/" className="admin-leads__brand"><img src="/favicon-32x32.png" alt="" /> Aneka Kartika <span>Admin</span></a>
        {authenticated && <button type="button" className="admin-leads__button admin-leads__button--quiet" onClick={logout}>Sign out</button>}
      </header>
      <div className="admin-leads__content">
        {!authenticated ? (
          <section className="admin-login-card">
            <p className="eyebrow">Private workspace</p>
            <h1 className="h2">Chat enquiry records</h1>
            <p>Sign in to manage contact details and conversation summaries.</p>
            <form onSubmit={login}>
              <label><span>Username</span><input autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} required /></label>
              <label><span>Password</span><input type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
              {error && <p className="admin-leads__error" role="alert">{error}</p>}
              <button className="admin-leads__button" type="submit" disabled={busyId === 'login'}>{busyId === 'login' ? 'Signing in…' : 'Sign in'}</button>
            </form>
          </section>
        ) : (
          <>
            <div className="admin-leads__heading">
              <div><p className="eyebrow">Aneka Kartika Smart Assistant</p><h1 className="h2">Chat enquiry records</h1><p>{leads.length} saved {leads.length === 1 ? 'enquiry' : 'enquiries'}</p></div>
              <button type="button" className="admin-leads__button" onClick={() => exportCsv(filtered)} disabled={!filtered.length}>Download CSV</button>
            </div>
            <div className="admin-leads__toolbar">
              <input aria-label="Search records" placeholder="Search email, WhatsApp or summary" value={search} onChange={(event) => setSearch(event.target.value)} />
              <button type="button" className="admin-leads__button admin-leads__button--quiet" onClick={() => void loadLeads()} disabled={loading}>{loading ? 'Refreshing…' : 'Refresh'}</button>
            </div>
            {error && <p className="admin-leads__error" role="alert">{error}</p>}
            {loading ? <p className="admin-leads__empty">Loading records…</p> : filtered.length ? (
              <div className="admin-leads__list">
                {filtered.map((lead) => (
                  <article className="admin-lead-card" key={lead.id}>
                    <div className="admin-lead-card__meta"><time dateTime={lead.createdAt}>{new Date(lead.createdAt).toLocaleString()}</time><span>{lead.questionCount} visitor questions</span></div>
                    <div className="admin-lead-card__fields">
                      <label><span>Email</span><input type="email" value={lead.email} onChange={(event) => setLeads((items) => items.map((item) => item.id === lead.id ? { ...item, email: event.target.value } : item))} /></label>
                      <label><span>WhatsApp</span><input value={lead.whatsapp} onChange={(event) => setLeads((items) => items.map((item) => item.id === lead.id ? { ...item, whatsapp: event.target.value } : item))} /></label>
                    </div>
                    <label className="admin-lead-card__summary"><span>Conversation summary</span><textarea rows={3} value={lead.summary} onChange={(event) => setLeads((items) => items.map((item) => item.id === lead.id ? { ...item, summary: event.target.value } : item))} /></label>
                    <div className="admin-lead-card__actions">
                      <small>Consent recorded {new Date(lead.consentAt).toLocaleString()}</small>
                      <div><button type="button" className="admin-leads__button" onClick={() => void save(lead)} disabled={busyId === lead.id}>{busyId === lead.id ? 'Saving…' : 'Save changes'}</button><button type="button" className="admin-leads__button admin-leads__button--danger" onClick={() => void remove(lead.id)} disabled={busyId === lead.id}>Delete</button></div>
                    </div>
                  </article>
                ))}
              </div>
            ) : <p className="admin-leads__empty">No chat enquiries found.</p>}
          </>
        )}
      </div>
    </main>
  );
}
