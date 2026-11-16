import { isCmsStorageConfigured, readCmsContent } from '../lib/cms-store.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  if (!isCmsStorageConfigured()) return res.status(200).json({ destinations: [], attractions: [], programs: [] });
  try {
    const content = await readCmsContent();
    return res.status(200).json({
      destinations: content.destinations.filter((item) => item.published !== false),
      attractions: content.attractions.filter((item) => item.published !== false),
      programs: content.programs.filter((item) => item.published !== false),
      hiddenDestinations: content.destinations.filter((item) => item.published === false).map((item) => item.slug),
      hiddenAttractions: content.attractions.filter((item) => item.published === false).map((item) => `${item.regionSlug}/${item.slug}`),
      hiddenPrograms: content.programs.filter((item) => item.published === false).map((item) => item.slug),
    });
  } catch (error) {
    console.error('Public CMS read failed:', error?.name || 'unknown error');
    return res.status(503).json({ error: 'Site content is temporarily unavailable.' });
  }
}
