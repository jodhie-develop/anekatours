import { randomUUID } from 'node:crypto';
import { createLead, isLeadStorageConfigured } from '../lib/chat-lead-csv.js';
import { adminCredentialsConfigured, getClientAddress } from '../lib/admin-auth.js';

const MODEL = process.env.OPENAI_MODEL || 'gpt-6-luna';
const attempts = new Map();

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

function allowSubmission(req, res) {
  const now = Date.now();
  const address = getClientAddress(req);
  const current = attempts.get(address);
  if (current && current.until > now && current.count >= 5) {
    res.setHeader('Retry-After', String(Math.ceil((current.until - now) / 1000)));
    return false;
  }
  if (!current || current.until <= now) attempts.set(address, { count: 1, until: now + 60 * 60 * 1000 });
  else current.count += 1;
  return true;
}

async function summarize(messages) {
  const conversation = messages.map(({ role, content }) => `${role === 'user' ? 'Visitor' : 'Assistant'}: ${content}`).join('\n');
  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        instructions: 'Write a brief, factual, third-person summary of this travel enquiry in English, no more than 70 words. Include destinations and interests the visitor mentioned, plus any trip details they supplied. Do not invent details. Exclude contact information and do not include a heading.',
        input: conversation,
        max_output_tokens: 120,
        store: false,
      }),
    });
    const result = await response.json();
    const text = typeof result.output_text === 'string'
      ? result.output_text.trim()
      : Array.isArray(result.output)
        ? result.output.filter((item) => item?.type === 'message' && item.role === 'assistant' && Array.isArray(item.content)).flatMap((item) => item.content).filter((item) => item?.type === 'output_text' && typeof item.text === 'string').map((item) => item.text).join('').trim()
        : '';
    if (response.ok && text) return text.slice(0, 2000);
    console.error('OpenAI lead summary failed:', response.status, result.error?.code || result.error?.type || 'unknown');
  } catch (error) {
    console.error('OpenAI lead summary connection failed:', error?.name || 'unknown error');
  }
  const questions = messages.filter((message) => message.role === 'user').map((message) => message.content).slice(0, 2);
  return `The visitor asked about: ${questions.join(' / ')}`.slice(0, 2000);
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return fail(res, 405, 'Method not allowed.');
  }
  if (!isLeadStorageConfigured() || !adminCredentialsConfigured() || process.env.CHAT_LEADS_ENABLED !== 'true') {
    return fail(res, 503, 'Chat lead capture is not configured yet.');
  }
  if (!allowSubmission(req, res)) return fail(res, 429, 'Please wait before submitting these details again.');
  const body = bodyOf(req);
  if (!body || typeof body !== 'object' || !validEmail(body.email) || !validWhatsapp(body.whatsapp) || body.consent !== true || !Array.isArray(body.messages)) {
    return fail(res, 400, 'Please provide a valid email, WhatsApp number and consent before continuing.');
  }
  if (body.messages.length < 3 || body.messages.length > 12) return fail(res, 400, 'The conversation is not ready to save yet.');
  const messages = body.messages.map((message) => {
    if (!message || !['user', 'assistant'].includes(message.role) || typeof message.content !== 'string') return null;
    const content = message.content.trim();
    return content && content.length <= 1200 ? { role: message.role, content } : null;
  });
  if (messages.some((message) => !message) || messages.filter((message) => message.role === 'user').length < 2) {
    return fail(res, 400, 'Please complete two chat questions before submitting your contact details.');
  }

  try {
    const now = new Date().toISOString();
    const lead = {
      id: randomUUID(),
      createdAt: now,
      updatedAt: now,
      email: body.email.trim(),
      whatsapp: body.whatsapp.trim(),
      summary: await summarize(messages),
      consentAt: now,
      questionCount: String(messages.filter((message) => message.role === 'user').length),
    };
    await createLead(lead);
    return res.status(201).json({ ok: true, leadId: lead.id });
  } catch (error) {
    console.error('Chat lead save failed:', error?.name || 'unknown error');
    return fail(res, 503, 'We could not save your details just now. Please try again shortly.');
  }
}
