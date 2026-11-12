const limits = {
  agency: 120, email: 254, country: 100, destinations: 300, dates: 120,
  groupSize: 80, language: 100, program: 150, hotel: 50, notes: 3000,
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

  // Quietly accept bot submissions without delivering email.
  if (typeof body.website === 'string' && body.website.trim()) return res.status(202).json({ ok: true });
  const clean = {};
  for (const [field, max] of Object.entries(limits)) {
    const value = typeof body[field] === 'string' ? body[field].trim() : '';
    if (value.length > max) return fail(res, 400, `Please shorten the ${field} field.`);
    clean[field] = value;
  }
  if (!clean.agency || !clean.email || !clean.country) return fail(res, 400, 'Agency name, work email and country are required.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) return fail(res, 400, 'Enter a valid email address.');
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) return fail(res, 503, 'Quote delivery is not configured yet. Please email info@aneka-tours.co.id.');

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
    `Agency: ${clean.agency}`, `Work email: ${clean.email}`, `Country: ${clean.country}`,
    `Destinations: ${clean.destinations || '—'}`, `Travel dates: ${clean.dates || '—'}`,
    `Group size: ${clean.groupSize || '—'}`, `Guide language: ${clean.language || '—'}`,
    `Program: ${clean.program || '—'}`, `Hotel class: ${clean.hotel || '—'}`,
    '', 'Notes:', clean.notes || '—',
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: ['info@aneka-tours.co.id'],
        reply_to: clean.email,
        subject: `Website quote request — ${clean.agency}`,
        text,
      }),
    });
    if (!response.ok) {
      const details = await response.text();
      console.error('Resend rejected quote request:', response.status, details.slice(0, 500));
      return fail(res, 502, 'We could not send your request. Please try again or email info@aneka-tours.co.id.');
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Quote email delivery failed:', error);
    return fail(res, 502, 'We could not send your request. Please try again or email info@aneka-tours.co.id.');
  }
}
