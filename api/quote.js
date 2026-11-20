import { isBrevoConfigured, sendNotificationEmail } from '../lib/brevo-email.js';

const limits = {
  agency: 120, email: 254, phone: 60, country: 100, destinations: 300, dates: 120,
  language: 100, program: 150, hotelCategory: 40, notes: 3000,
};

function fail(res, status, message) {
  return res.status(status).json({ error: message });
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return fail(res, 405, 'Method not allowed.');
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = req.headers['content-type']?.startsWith('application/x-www-form-urlencoded')
        ? Object.fromEntries(new URLSearchParams(body))
        : JSON.parse(body);
    } catch { return fail(res, 400, 'Invalid request.'); }
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return fail(res, 400, 'Invalid request.');
  if (typeof body.website === 'string' && body.website.trim()) return res.status(202).json({ ok: true });

  const clean = {};
  for (const [field, max] of Object.entries(limits)) {
    const value = typeof body[field] === 'string' ? body[field].trim() : '';
    if (value.length > max) return fail(res, 400, `Please shorten the ${field} field.`);
    clean[field] = value;
  }
  if (!clean.agency || !clean.email || !clean.country) return fail(res, 400, 'Agency name, work email and country are required.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) return fail(res, 400, 'Enter a valid email address.');
  if (clean.phone && !/^[+\d][\d\s().-]{6,32}$/.test(clean.phone)) return fail(res, 400, 'Enter a valid phone or WhatsApp number.');
  if (!isBrevoConfigured()) return fail(res, 503, 'Quote delivery is not configured yet. Please email info@aneka-tours.co.id.');

  if (process.env.TURNSTILE_SECRET_KEY) {
    if (!body.turnstileToken || typeof body.turnstileToken !== 'string' || body.turnstileToken.length > 4096) return fail(res, 400, 'Please complete the spam protection check.');
    try {
      const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: body.turnstileToken }),
      });
      const result = await verification.json();
      if (!result.success) return fail(res, 400, 'Spam protection check failed. Please try again.');
    } catch { return fail(res, 502, 'Spam protection could not be verified. Please try again.'); }
  }

  const text = [
    'New website quote request',
    '',
    `Agency: ${clean.agency}`,
    `Work email: ${clean.email}`,
    `Phone / WhatsApp: ${clean.phone || '—'}`,
    `Country: ${clean.country}`,
    `Destinations: ${clean.destinations || '—'}`,
    `Travel dates: ${clean.dates || '—'}`,
    `Guide language: ${clean.language || '—'}`,
    `Program: ${clean.program || '—'}`,
    `Hotel category: ${clean.hotelCategory || '—'}`,
    '',
    'Notes:',
    clean.notes || '—',
  ].join('\n');

  try {
    await sendNotificationEmail({ subject: `Website quote request — ${clean.agency}`, text, replyTo: clean.email });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Quote notification delivery failed:', error?.name || 'unknown error');
    return fail(res, 502, 'We could not send your request. Please try again or email info@aneka-tours.co.id.');
  }
}
