import { createHmac, timingSafeEqual } from 'node:crypto';

const COOKIE_NAME = 'ak_chat_admin';
const SESSION_SECONDS = 8 * 60 * 60;

function sessionSecret() {
  return process.env.CHAT_ADMIN_SESSION_SECRET || '';
}

function sign(value) {
  return createHmac('sha256', sessionSecret()).update(value).digest('base64url');
}

function safeEqual(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  return a.length === b.length && timingSafeEqual(a, b);
}

export function adminCredentialsConfigured() {
  return Boolean(process.env.CHAT_ADMIN_USERNAME && process.env.CHAT_ADMIN_PASSWORD && sessionSecret());
}

export function credentialsMatch(username, password) {
  return adminCredentialsConfigured()
    && safeEqual(username, process.env.CHAT_ADMIN_USERNAME)
    && safeEqual(password, process.env.CHAT_ADMIN_PASSWORD);
}

export function createSessionCookie(username, req) {
  const payload = Buffer.from(JSON.stringify({ sub: username, exp: Math.floor(Date.now() / 1000) + SESSION_SECONDS })).toString('base64url');
  const value = `${payload}.${sign(payload)}`;
  const secure = process.env.NODE_ENV === 'production' || req.headers['x-forwarded-proto'] === 'https';
  return `${COOKIE_NAME}=${value}; Path=/api/admin; HttpOnly; SameSite=Strict; Max-Age=${SESSION_SECONDS}${secure ? '; Secure' : ''}`;
}

export function clearSessionCookie(req) {
  const secure = process.env.NODE_ENV === 'production' || req.headers['x-forwarded-proto'] === 'https';
  return `${COOKIE_NAME}=; Path=/api/admin; HttpOnly; SameSite=Strict; Max-Age=0${secure ? '; Secure' : ''}`;
}

export function hasAdminSession(req) {
  if (!adminCredentialsConfigured()) return false;
  const cookieHeader = req.headers.cookie || '';
  const value = cookieHeader.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${COOKIE_NAME}=`))?.slice(COOKIE_NAME.length + 1);
  if (!value) return false;
  const [payload, signature] = value.split('.');
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return false;
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return session.sub === process.env.CHAT_ADMIN_USERNAME && session.exp > Math.floor(Date.now() / 1000);
  } catch { return false; }
}

export function sameOriginRequest(req) {
  const origin = req.headers.origin;
  if (!origin) return false;
  try {
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    return new URL(origin).host === host;
  } catch { return false; }
}

export function getClientAddress(req) {
  return String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
}
