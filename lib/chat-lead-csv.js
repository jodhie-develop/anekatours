import { del, get, list, put } from '@vercel/blob';

const FIELDS = ['id', 'createdAt', 'updatedAt', 'email', 'whatsapp', 'summary', 'consentAt', 'questionCount'];
const PREFIX = 'chat-leads/';

export function isLeadStorageConfigured() {
  // The Blob SDK resolves Vercel OIDC tokens internally; they are not always
  // exposed as process.env.VERCEL_OIDC_TOKEN in a deployed function.
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
}

export function serializeLead(lead) {
  const header = FIELDS.join(',');
  const row = FIELDS.map((field) => csvCell(lead[field] ?? '')).join(',');
  return `${header}\r\n${row}\r\n`;
}

export function parseLeadCsv(csv) {
  const rows = parseCsvRows(csv);
  if (rows.length < 2) return null;
  return Object.fromEntries(FIELDS.map((field, index) => [field, rows[0].indexOf(field) >= 0 ? rows[1][rows[0].indexOf(field)] ?? '' : '']));
}

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function parseCsvRows(input) {
  const rows = [];
  let row = [];
  let value = '';
  let quoted = false;
  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    if (quoted) {
      if (char === '"' && input[index + 1] === '"') { value += '"'; index += 1; }
      else if (char === '"') quoted = false;
      else value += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') { row.push(value); value = ''; }
    else if (char === '\n') { row.push(value.replace(/\r$/, '')); rows.push(row); row = []; value = ''; }
    else value += char;
  }
  if (value || row.length) { row.push(value.replace(/\r$/, '')); rows.push(row); }
  return rows;
}

export function leadPath(id) {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  return `${PREFIX}${id}.csv`;
}

async function readBlob(pathname) {
  const blob = await get(pathname, { access: 'private', useCache: false });
  if (!blob || blob.statusCode !== 200 || !blob.stream) return null;
  const csv = await new Response(blob.stream).text();
  return { lead: parseLeadCsv(csv), etag: blob.blob.etag };
}

export async function createLead(lead) {
  if (!isLeadStorageConfigured()) throw new Error('Lead storage is not configured.');
  const pathname = leadPath(lead.id);
  await put(pathname, serializeLead(lead), { access: 'private', addRandomSuffix: false, contentType: 'text/csv; charset=utf-8' });
  return lead;
}

export async function readLead(id) {
  const pathname = leadPath(id);
  if (!pathname) return null;
  return readBlob(pathname);
}

export async function updateLead(lead) {
  const pathname = leadPath(lead.id);
  if (!pathname) return false;
  const current = await readBlob(pathname);
  if (!current?.lead) return false;
  await put(pathname, serializeLead(lead), {
    access: 'private', addRandomSuffix: false, allowOverwrite: true,
    contentType: 'text/csv; charset=utf-8', ifMatch: current.etag,
  });
  return true;
}

export async function deleteLead(id) {
  const pathname = leadPath(id);
  if (!pathname) return false;
  const current = await readBlob(pathname);
  if (!current?.lead) return false;
  await del(pathname);
  return true;
}

export async function listLeads() {
  if (!isLeadStorageConfigured()) throw new Error('Lead storage is not configured.');
  let cursor;
  let hasMore = true;
  const records = [];
  while (hasMore) {
    const result = await list({ prefix: PREFIX, limit: 1000, cursor });
    for (let index = 0; index < result.blobs.length; index += 20) {
      const batch = result.blobs.slice(index, index + 20);
      const items = await Promise.all(batch.map(async (blob) => {
        const record = await readBlob(blob.pathname);
        return record?.lead ?? null;
      }));
      records.push(...items.filter(Boolean));
    }
    hasMore = result.hasMore;
    cursor = result.cursor;
  }
  return records.sort((left, right) => right.createdAt.localeCompare(left.createdAt));
}
