import { deleteLead, isLeadStorageConfigured, listLeads, readLead, updateLead } from '../lib/chat-lead-csv.js';
import { hasAdminSession, sameOriginRequest } from '../lib/admin-auth.js';

function fail(res, status, message) {
  return res.status(status).json({ error: message });
}

function bodyOf(req) {
  if (typeof req.body !== 'string') return req.body ?? {};
  try { return JSON.parse(req.body); } catch { return null; }
}

function validEmail(value) {
  return typeof value === 'string' && value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validWhatsapp(value) {
  return typeof value === 'string' && value.length <= 40 && /^[+\d][\d\s().-]{6,32}$/.test(value.trim());
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!hasAdminSession(req)) return fail(res, 401, 'Please sign in to the admin page.');
  if (!isLeadStorageConfigured()) return fail(res, 503, 'Private CSV storage is not connected yet.');
  if (!['GET', 'PATCH', 'DELETE'].includes(req.method)) {
    res.setHeader('Allow', 'GET, PATCH, DELETE');
    return fail(res, 405, 'Method not allowed.');
  }
  if (req.method !== 'GET' && !sameOriginRequest(req)) return fail(res, 403, 'Request origin could not be verified.');

  try {
    if (req.method === 'GET') return res.status(200).json({ leads: await listLeads() });
    const body = bodyOf(req);
    if (!body || typeof body.id !== 'string' || !/^[0-9a-f-]{36}$/i.test(body.id)) return fail(res, 400, 'Invalid lead record.');
    if (req.method === 'DELETE') {
      const deleted = await deleteLead(body.id);
      return deleted ? res.status(200).json({ ok: true }) : fail(res, 404, 'Lead record not found.');
    }
    const current = await readLead(body.id);
    if (!current?.lead) return fail(res, 404, 'Lead record not found.');
    const email = body.email === undefined ? current.lead.email : String(body.email).trim();
    const whatsapp = body.whatsapp === undefined ? current.lead.whatsapp : String(body.whatsapp).trim();
    const summary = body.summary === undefined ? current.lead.summary : String(body.summary).trim();
    if (!validEmail(email) || !validWhatsapp(whatsapp) || !summary || summary.length > 2000) return fail(res, 400, 'Check the email, WhatsApp number and summary fields.');
    const updated = { ...current.lead, email, whatsapp, summary, updatedAt: new Date().toISOString() };
    const saved = await updateLead(updated);
    return saved ? res.status(200).json({ lead: updated }) : fail(res, 409, 'This record changed. Refresh the page and try again.');
  } catch (error) {
    console.error('Admin chat lead storage failed:', error?.name || 'unknown error');
    return fail(res, 503, 'Chat lead storage is temporarily unavailable.');
  }
}
