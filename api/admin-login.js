import { adminCredentialsConfigured, clearSessionCookie, createSessionCookie, credentialsMatch, getClientAddress, hasAdminSession, sameOriginRequest } from '../lib/admin-auth.js';

const attempts = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;

function fail(res, status, message) {
  return res.status(status).json({ error: message });
}

function bodyOf(req) {
  if (typeof req.body !== 'string') return req.body ?? {};
  try { return JSON.parse(req.body); } catch { return null; }
}

function allowLogin(req) {
  const now = Date.now();
  const address = getClientAddress(req);
  const current = attempts.get(address);
  if (current && current.until > now && current.count >= MAX_ATTEMPTS) return false;
  if (!current || current.until <= now) attempts.set(address, { count: 1, until: now + WINDOW_MS });
  else current.count += 1;
  return true;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!adminCredentialsConfigured()) return fail(res, 503, 'Admin login is not configured.');
  if (req.method === 'GET') return res.status(200).json({ authenticated: hasAdminSession(req) });
  if (!['POST', 'DELETE'].includes(req.method)) {
    res.setHeader('Allow', 'GET, POST, DELETE');
    return fail(res, 405, 'Method not allowed.');
  }
  if (!sameOriginRequest(req)) return fail(res, 403, 'Request origin could not be verified.');
  if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', clearSessionCookie(req));
    return res.status(200).json({ authenticated: false });
  }
  if (!allowLogin(req)) return fail(res, 429, 'Too many login attempts. Please wait and try again.');
  const body = bodyOf(req);
  if (!body || typeof body.username !== 'string' || typeof body.password !== 'string' || body.username.length > 100 || body.password.length > 200) {
    return fail(res, 400, 'Enter a username and password.');
  }
  if (!credentialsMatch(body.username, body.password)) return fail(res, 401, 'The username or password is incorrect.');
  res.setHeader('Set-Cookie', createSessionCookie(body.username, req));
  return res.status(200).json({ authenticated: true });
}
