const BREVO_SEND_URL = 'https://api.brevo.com/v3/smtp/email';

export function isBrevoConfigured() {
  return Boolean(process.env.BREVO_API_KEY && process.env.BREVO_SENDER_EMAIL && process.env.BREVO_NOTIFICATION_EMAIL);
}

export async function sendNotificationEmail({ subject, text, replyTo }) {
  if (!isBrevoConfigured()) throw new Error('Brevo email is not configured.');
  const response = await fetch(BREVO_SEND_URL, {
    method: 'POST',
    headers: { accept: 'application/json', 'api-key': process.env.BREVO_API_KEY, 'content-type': 'application/json' },
    body: JSON.stringify({
      sender: { name: process.env.BREVO_SENDER_NAME || 'Aneka Kartika Tours', email: process.env.BREVO_SENDER_EMAIL },
      to: [{ email: process.env.BREVO_NOTIFICATION_EMAIL }],
      subject,
      textContent: text,
      ...(replyTo ? { replyTo: { email: replyTo } } : {}),
    }),
  });
  if (!response.ok) {
    const details = await response.text();
    console.error('Brevo transactional email failed:', response.status, details.slice(0, 400));
    throw new Error(`Brevo rejected email with status ${response.status}.`);
  }
  return response.json();
}
