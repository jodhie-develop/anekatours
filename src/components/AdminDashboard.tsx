import { useEffect, useState, type FormEvent } from 'react';

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/admin-login', { cache: 'no-store' }).then(async (response) => {
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Admin login is unavailable.');
      setAuthenticated(result.authenticated === true);
    }).catch((cause) => setError(cause instanceof Error ? cause.message : 'Admin login is unavailable.'))
      .finally(() => setLoading(false));
  }, []);

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setBusy(true); setError('');
    try {
      const response = await fetch('/api/admin-login', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ username, password }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Sign in failed.');
      setAuthenticated(true); setPassword('');
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Sign in failed.'); }
    finally { setBusy(false); }
  };

  const signOut = async () => {
    await fetch('/api/admin-login', { method: 'DELETE' });
    setAuthenticated(false);
  };

  return <main className="admin-leads admin-dashboard">
    <header className="admin-leads__topbar"><a href="/" className="admin-leads__brand"><img src="/favicon-32x32.png" alt="" /> Aneka Kartika <span>Admin</span></a><a href="/">Back to website</a></header>
    <div className="admin-leads__content">
      {loading ? <p className="admin-leads__empty">Loading admin…</p> : !authenticated ? <section className="admin-login-card"><p className="eyebrow">Private workspace</p><h1 className="h2">Admin dashboard</h1><p>Sign in once to manage website content and chatbot enquiries.</p>
        <form onSubmit={login}><label><span>Username</span><input autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} required /></label><label><span>Password</span><input type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
          {error && <p className="admin-leads__error" role="alert">{error}</p>}<button className="admin-leads__button" type="submit" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
        </form>
      </section> : <>
        <div className="admin-leads__heading"><div><p className="eyebrow">Aneka Kartika Tours & Travel</p><h1 className="h2">Admin dashboard</h1><p>Choose what you would like to manage.</p></div><button className="admin-leads__button admin-leads__button--quiet" onClick={() => void signOut()}>Sign out</button></div>
        <nav className="admin-dashboard__menu" aria-label="Admin menu">
          <a className="admin-dashboard__card" href="/admin/chat-leads"><span className="admin-dashboard__icon" aria-hidden="true">✉</span><span><strong>Chat Leads</strong><small>Review visitor contact details and conversation summaries.</small></span><span className="admin-dashboard__arrow" aria-hidden="true">→</span></a>
          <a className="admin-dashboard__card" href="/admin/content"><span className="admin-dashboard__icon" aria-hidden="true">▧</span><span><strong>Website Content</strong><small>Manage destinations, attraction details, sample programs, and photos.</small></span><span className="admin-dashboard__arrow" aria-hidden="true">→</span></a>
          <a className="admin-dashboard__card" href="/admin/newsletter"><span className="admin-dashboard__icon" aria-hidden="true">✉</span><span><strong>Newsletter</strong><small>Create and preview email campaigns, save drafts, and send through Brevo.</small></span><span className="admin-dashboard__arrow" aria-hidden="true">→</span></a>
        </nav>
      </>}
    </div>
  </main>;
}
