import { get, put } from '@vercel/blob';

const CONTENT_PATH = 'site-cms/content.json';

export function isCmsStorageConfigured() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
}

export async function readCmsContent() {
  if (!isCmsStorageConfigured()) return { destinations: [], attractions: [], programs: [] };
  const result = await get(CONTENT_PATH, { access: 'private', useCache: false });
  if (!result || result.statusCode !== 200 || !result.stream) return { destinations: [], attractions: [], programs: [] };
  try {
    const parsed = JSON.parse(await new Response(result.stream).text());
    return {
      destinations: Array.isArray(parsed.destinations) ? parsed.destinations : [],
      attractions: Array.isArray(parsed.attractions) ? parsed.attractions : [],
      programs: Array.isArray(parsed.programs) ? parsed.programs : [],
    };
  } catch {
    throw new Error('CMS content file is invalid.');
  }
}

export async function writeCmsContent(content) {
  if (!isCmsStorageConfigured()) throw new Error('Private Blob storage is not configured.');
  await put(CONTENT_PATH, JSON.stringify(content), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json; charset=utf-8',
  });
}

export function cmsImagePath(id) {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  return `site-cms/images/${id}.webp`;
}
