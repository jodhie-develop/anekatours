import { get, put } from '@vercel/blob';
import { hasAdminSession, sameOriginRequest } from '../lib/admin-auth.js';

const DRAFT_PATH = 'site-cms/newsletter-draft.json';
function fail(res, status, message) { return res.status(status).json({ error: message }); }
function bodyOf(req) {
  if (typeof req.body !== 'string') return req.body ?? {};
  try { return JSON.parse(req.body); } catch { return null; }
}
function readiness() {
  return [
    !process.env.BREVO_API_KEY && 'Brevo API key (BREVO_API_KEY)',
    !process.env.BREVO_NEWSLETTER_SENDER && 'Verified sender email (BREVO_NEWSLETTER_SENDER)',
    !process.env.BREVO_NEWSLETTER_LIST_ID && 'Opt-in Brevo contact list ID (BREVO_NEWSLETTER_LIST_ID)',
  ].filter(Boolean);
}
function validUrl(value, image = false) {
  if (typeof value !== 'string' || value.length > 1000) return false;
  if (value.startsWith('/') && !value.startsWith('//')) return image ? /^\/(images\/|api\/admin-media\?id=)/.test(value) : /^\/(destinations|programs|contact)(\/|\?|$)/.test(value);
  try { return ['https:', ...(image ? [] : ['mailto:'])].includes(new URL(value).protocol); } catch { return false; }
}
function validDraft(draft) {
  const limits = { campaignName: 120, subject: 180, preheader: 250, headline: 180, intro: 1800, storyHeading: 180, storyBody: 5000, imageAlt: 300, featureTitle: 180, featureDescription: 1000, ctaLabel: 80 };
  return draft && typeof draft === 'object'
    && Object.entries(limits).every(([key, max]) => typeof draft[key] === 'string' && draft[key].trim().length > 0 && draft[key].length <= max)
    && validUrl(draft.image, true) && validUrl(draft.ctaUrl);
}
async function readNewsletters() {
  const result = await get(DRAFT_PATH, { access: 'private', useCache: false });
  if (!result || result.statusCode !== 200 || !result.stream) return [];
  const parsed = JSON.parse(await new Response(result.stream).text());
  if (Array.isArray(parsed.newsletters)) return parsed.newsletters.filter((item) => item && item.id && item.draft);
  // Migrate the single-draft format from the first newsletter editor version.
  if (validDraft(parsed)) return [{ id: '00000000-0000-4000-8000-000000000001', updatedAt: new Date().toISOString(), draft: parsed }];
  return [];
}
async function saveNewsletter(id, draft, extra = {}) {
  const newsletters = await readNewsletters();
  const existing = newsletters.find((item) => item.id === id);
  const item = { ...existing, id, ...extra, draft, updatedAt: new Date().toISOString() };
  const next = [item, ...newsletters.filter((entry) => entry.id !== id)].slice(0, 100);
  await put(DRAFT_PATH, JSON.stringify({ newsletters: next }), { access: 'private', addRandomSuffix: false, allowOverwrite: true, contentType: 'application/json; charset=utf-8' });
  return item;
}
function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function newsletterHtml(draft) {
  const base = process.env.NEWSLETTER_PUBLIC_BASE_URL || 'https://anekatours.vercel.app';
  const image = draft.image.startsWith('/') ? `${base}${draft.image}` : draft.image;
  const link = draft.ctaUrl.startsWith('/') ? `${base}${draft.ctaUrl}` : draft.ctaUrl;
  const paragraphs = draft.storyBody.split(/\n{2,}/).map((paragraph) => `<p style="margin:0 0 12px;color:#455071;font-size:15px;line-height:1.75;">${esc(paragraph.trim()).replace(/\n/g, '<br>')}</p>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="x-apple-disable-message-reformatting"><title>${esc(draft.subject)}</title></head><body style="margin:0;padding:0;background:#f1f3f8;font-family:Arial,Helvetica,sans-serif;color:#18234f;"><div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(draft.preheader)}</div><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f1f3f8"><tr><td align="center" style="padding:24px 10px"><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="width:600px;max-width:600px;border-radius:14px;overflow:hidden"><tr><td style="padding:22px 34px;background:#101d63;border-bottom:4px solid #bd1e32"><a href="${base}/" style="text-decoration:none"><img src="${base}/images/logo-aneka-kartika-white.png" width="250" alt="Aneka Kartika Tours &amp; Travel" style="display:block;width:250px;max-width:100%;height:auto;border:0"></a></td></tr><tr><td><img src="${esc(image)}" width="600" alt="${esc(draft.imageAlt)}" style="display:block;width:100%;max-width:600px;height:auto;border:0"></td></tr><tr><td style="padding:30px 38px 12px"><p style="margin:0 0 12px;color:#bd1e32;font-size:11px;font-weight:bold;letter-spacing:2px">ISLAND NOTES · INDONESIA, THROUGH LOCAL EYES</p><h1 style="margin:0 0 14px;color:#101d63;font-size:38px;line-height:1.12">${esc(draft.headline)}</h1><p style="margin:0;color:#455071;font-size:16px;line-height:1.7">${esc(draft.intro)}</p></td></tr><tr><td style="padding:16px 38px 28px"><h2 style="margin:0 0 10px;color:#101d63;font-size:22px">${esc(draft.storyHeading)}</h2>${paragraphs}<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="#bd1e32" style="border-radius:24px"><a href="${esc(link)}" style="display:inline-block;padding:13px 22px;color:#fff;font-size:14px;font-weight:bold;text-decoration:none">${esc(draft.ctaLabel)} →</a></td></tr></table></td></tr><tr><td style="padding:22px 38px;background:#f5f6fb"><p style="margin:0 0 7px;color:#bd1e32;font-size:11px;font-weight:bold;letter-spacing:1px">FOR OUR TRAVEL TRADE PARTNERS</p><h2 style="margin:0 0 8px;color:#101d63;font-size:20px">${esc(draft.featureTitle)}</h2><p style="margin:0;color:#455071;font-size:14px;line-height:1.7">${esc(draft.featureDescription)}</p></td></tr><tr><td align="center" style="padding:24px 30px;background:#101d63;color:#fff"><p style="margin:0 0 8px;font-size:12px;font-weight:bold;letter-spacing:1px">ANEKA KARTIKA TOURS &amp; TRAVEL SERVICES</p><p style="margin:0 0 10px;color:#e2e6f6;font-size:12px;line-height:1.7">Jl. Manyar Kertoarjo V-50, Surabaya 60285, Indonesia<br>+62 31 592 9000 · <a href="mailto:info@aneka-tours.co.id" style="color:#fff">info@aneka-tours.co.id</a></p><p style="margin:0;color:#c7cdea;font-size:11px;line-height:1.7">You are receiving this email as a subscribed contact of Aneka Kartika Tours.<br><a href="{{ unsubscribe }}" style="color:#fff;text-decoration:underline">Unsubscribe</a></p></td></tr></table><p style="margin:12px 0 0;color:#69728e;font-size:11px">Aneka Kartika Tours · Indonesia, through local eyes</p></td></tr></table></body></html>`;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!hasAdminSession(req)) return fail(res, 401, 'Please sign in to the admin page.');
  if (req.method === 'GET') {
    try {
      return res.status(200).json({ newsletters: await readNewsletters(), missing: readiness() });
    } catch (error) {
      console.error('Newsletter draft read failed:', error?.name || 'unknown error');
      return res.status(200).json({ newsletters: [], missing: readiness() });
    }
  }
  if (!['PUT', 'POST'].includes(req.method)) { res.setHeader('Allow', 'GET, PUT, POST'); return fail(res, 405, 'Method not allowed.'); }
  if (!sameOriginRequest(req)) return fail(res, 403, 'Request origin could not be verified.');
  const body = bodyOf(req);
  if (!body || !validDraft(body.draft)) return fail(res, 400, 'Some newsletter fields or links are invalid.');
  const id = typeof body.id === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.id) ? body.id : '';
  if (req.method === 'PUT') {
    if (!id) return fail(res, 400, 'Newsletter ID is invalid.');
    try {
      const newsletter = await saveNewsletter(id, body.draft, { sentAt: undefined, campaignId: undefined });
      return res.status(200).json({ ok: true, newsletter });
    } catch (error) { console.error('Newsletter draft write failed:', error?.name || 'unknown error'); return fail(res, 503, 'Draft could not be saved. Check that private Vercel Blob storage is configured.'); }
  }
  if (!id) return fail(res, 400, 'Save this newsletter draft before sending.');
  if (!body.confirmSend) return fail(res, 400, 'Confirm the campaign send before continuing.');
  const missing = readiness();
  if (missing.length) return res.status(503).json({ error: `Sending is not configured yet: ${missing.join('; ')}.` });
  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.BREVO_NEWSLETTER_SENDER;
  const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);
  if (!Number.isSafeInteger(listId) || listId <= 0) return fail(res, 503, 'Brevo contact list ID is invalid.');
  let campaignId;
  try {
    const create = await fetch('https://api.brevo.com/v3/emailCampaigns', {
      method: 'POST', headers: { 'api-key': apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name: body.draft.campaignName, sender: { name: 'Aneka Kartika Tours', email: sender }, subject: body.draft.subject, previewText: body.draft.preheader, htmlContent: newsletterHtml(body.draft), recipients: { listIds: [listId] }, type: 'classic' }),
    });
    const created = await create.json().catch(() => ({}));
    if (!create.ok || !created.id) {
      console.error('Brevo campaign create failed:', create.status);
      return fail(res, 502, 'Brevo could not create the campaign. Check the sender, list and campaign content in Brevo.');
    }
    campaignId = created.id;
    const send = await fetch(`https://api.brevo.com/v3/emailCampaigns/${campaignId}/sendNow`, { method: 'POST', headers: { 'api-key': apiKey, Accept: 'application/json' } });
    if (!send.ok) {
      console.error('Brevo campaign send failed:', send.status, 'campaign:', campaignId);
      return fail(res, 502, `Campaign #${campaignId} was created but Brevo did not schedule it. Review this draft in Brevo.`);
    }
    let newsletter;
    try { newsletter = await saveNewsletter(id, body.draft, { sentAt: new Date().toISOString(), campaignId }); }
    catch (error) { console.error('Newsletter sent but history save failed:', error?.name || 'unknown error'); }
    return res.status(200).json({ ok: true, campaignId, newsletter, message: 'Brevo accepted the campaign for sending.' });
  } catch (error) {
    console.error('Brevo newsletter request failed:', error?.name || 'unknown error', campaignId || '');
    return fail(res, 502, campaignId ? `Campaign #${campaignId} may still be a draft in Brevo. Check it before retrying.` : 'Could not connect to Brevo.');
  }
}
