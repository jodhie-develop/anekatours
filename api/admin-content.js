import { hasAdminSession, sameOriginRequest } from '../lib/admin-auth.js';
import { isCmsStorageConfigured, readCmsContent, writeCmsContent } from '../lib/cms-store.js';

function fail(res, status, message) {
  return res.status(status).json({ error: message });
}

function bodyOf(req) {
  if (typeof req.body !== 'string') return req.body ?? {};
  try { return JSON.parse(req.body); } catch { return null; }
}

function validContent(content) {
  if (!content || typeof content !== 'object' || !Array.isArray(content.destinations) || !Array.isArray(content.attractions) || !Array.isArray(content.programs)) return false;
  if (content.destinations.length > 100 || content.attractions.length > 500 || content.programs.length > 200) return false;
  const validImage = (image) => typeof image === 'string' && (image === '' || image.length <= 500 && (image.startsWith('/images/') || /^\/api\/admin-media\?id=[0-9a-f-]{36}$/i.test(image)));
  const validText = (value, max) => typeof value === 'string' && value.length <= max;
  const attractionsValid = content.attractions.every((item) => item && /^[a-z0-9-]{1,80}$/.test(item.slug)
    && /^[a-z0-9-]{1,80}$/.test(item.regionSlug)
    && validText(item.region, 100) && validText(item.h1, 180) && validText(item.metaTitle, 180)
    && validText(item.metaDescription, 320) && validText(item.imageAlt, 300) && validText(item.pairsText, 3000) && validImage(item.image)
    && (item.published === undefined || typeof item.published === 'boolean')
    && Array.isArray(item.intro) && item.intro.length <= 10 && item.intro.every((v) => validText(v, 2000))
    && Array.isArray(item.highlights) && item.highlights.length <= 20 && item.highlights.every((v) => v && validText(v.title, 160) && validText(v.text, 1200))
    && Array.isArray(item.experience) && item.experience.length <= 30 && item.experience.every((v) => validText(v, 600))
    && Array.isArray(item.bestTime) && item.bestTime.length <= 20 && item.bestTime.every((v) => validText(v, 600))
    && Array.isArray(item.logistics) && item.logistics.length <= 20 && item.logistics.every((v) => v && validText(v.challenge, 400) && validText(v.solution, 1000))
    && Array.isArray(item.faq) && item.faq.length <= 20 && item.faq.every((v) => v && validText(v.question, 300) && validText(v.answer, 1200))
    && validText(item.cta, 1200));
  const programsValid = content.programs.every((item) => item && /^[a-z0-9-]{1,80}$/.test(item.slug)
    && validText(item.title, 180) && validText(item.start, 120) && validText(item.finish, 120)
    && (item.image === null || validImage(item.image)) && validText(item.description, 12000)
    && (item.published === undefined || typeof item.published === 'boolean')
    && (item.days === null || Number.isInteger(item.days) && item.days > 0 && item.days <= 365)
    && Array.isArray(item.supportingImages) && item.supportingImages.length <= 8
    && item.supportingImages.every((image) => image && validImage(image.image) && validText(image.title, 160)));
  const destinationsValid = content.destinations.every((item) => item && /^[a-z0-9-]{1,80}$/.test(item.slug)
    && validText(item.name, 120) && validImage(item.image) && validText(item.imageAlt, 300)
    && validText(item.metaTitle, 180) && validText(item.metaDescription, 320)
    && Array.isArray(item.intro) && item.intro.length <= 10 && item.intro.every((v) => validText(v, 2000))
    && (item.published === undefined || typeof item.published === 'boolean'));
  return destinationsValid && attractionsValid && programsValid;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!hasAdminSession(req)) return fail(res, 401, 'Please sign in to the admin page.');
  if (!isCmsStorageConfigured()) return fail(res, 503, 'Private Vercel Blob storage is not connected.');
  if (req.method === 'GET') {
    try { return res.status(200).json(await readCmsContent()); }
    catch (error) {
      console.error('Admin CMS read failed:', error?.name || 'unknown error');
      return fail(res, 503, 'Content storage is temporarily unavailable.');
    }
  }
  if (req.method !== 'PUT') {
    res.setHeader('Allow', 'GET, PUT');
    return fail(res, 405, 'Method not allowed.');
  }
  if (!sameOriginRequest(req)) return fail(res, 403, 'Request origin could not be verified.');
  const content = bodyOf(req);
  if (!validContent(content) || JSON.stringify(content).length > 1_500_000) return fail(res, 400, 'Some content fields are invalid or the content file is too large.');
  try {
    await writeCmsContent(content);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Admin CMS write failed:', error?.name || 'unknown error');
    return fail(res, 503, 'Content could not be saved. Please try again.');
  }
}
