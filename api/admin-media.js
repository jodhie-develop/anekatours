import { get, put } from '@vercel/blob';
import { randomUUID } from 'node:crypto';
import { cmsImagePath, isCmsStorageConfigured } from '../lib/cms-store.js';
import { hasAdminSession, sameOriginRequest } from '../lib/admin-auth.js';

function fail(res, status, message) {
  return res.status(status).json({ error: message });
}

function bodyOf(req) {
  if (typeof req.body !== 'string') return req.body ?? {};
  try { return JSON.parse(req.body); } catch { return null; }
}

export default async function handler(req, res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (!isCmsStorageConfigured()) return fail(res, 503, 'Private Vercel Blob storage is not connected.');
  if (req.method === 'GET') {
    const id = typeof req.query?.id === 'string' ? req.query.id : '';
    const pathname = cmsImagePath(id);
    if (!pathname) return fail(res, 404, 'Image not found.');
    try {
      const blob = await get(pathname, { access: 'private', useCache: true });
      if (!blob || blob.statusCode !== 200 || !blob.stream) return fail(res, 404, 'Image not found.');
      res.setHeader('Content-Type', 'image/webp');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      const buffer = await new Response(blob.stream).arrayBuffer();
      return res.status(200).send(Buffer.from(buffer));
    } catch {
      return fail(res, 404, 'Image not found.');
    }
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return fail(res, 405, 'Method not allowed.');
  }
  if (!hasAdminSession(req)) return fail(res, 401, 'Please sign in to the admin page.');
  if (!sameOriginRequest(req)) return fail(res, 403, 'Request origin could not be verified.');
  const body = bodyOf(req);
  if (!body || body.type !== 'image/webp' || typeof body.data !== 'string' || body.data.length > 4_000_000) return fail(res, 400, 'Choose an image that can be converted to WebP under 3 MB.');
  const match = body.data.match(/^data:image\/webp;base64,([A-Za-z0-9+/=]+)$/);
  if (!match) return fail(res, 400, 'The uploaded file must be a WebP image.');
  const image = Buffer.from(match[1], 'base64');
  if (!image.length || image.length > 3_000_000 || image.toString('ascii', 0, 4) !== 'RIFF' || image.toString('ascii', 8, 12) !== 'WEBP') return fail(res, 400, 'The uploaded image is invalid or too large.');
  const id = randomUUID();
  try {
    await put(cmsImagePath(id), image, { access: 'private', addRandomSuffix: false, contentType: 'image/webp' });
    return res.status(201).json({ url: `/api/admin-media?id=${id}` });
  } catch (error) {
    console.error('Admin image upload failed:', error?.name || 'unknown error');
    return fail(res, 503, 'The image could not be uploaded. Please try again.');
  }
}
