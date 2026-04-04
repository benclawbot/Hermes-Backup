/**
 * Unified environment adapter for Cloudflare Workers and Next.js.
 *
 * Cloudflare Pages ( Workers runtime ):
 *   - DB = D1Database
 *   - COMPRESSION = CompressionStream/DecompressionStream (Web APIs)
 *   - R2 = R2Bucket (optional)
 *   - QUEUE = Queue (optional)
 *
 * Next.js / Vercel (Node.js):
 *   - db = better-sqlite3
 *   - zlib for compression
 *
 * Usage in API routes:
 *   import { getDb, compressGzip, decompressGzip } from '@/lib/env';
 *
 * In Cloudflare Pages functions, env is passed as the 3rd param.
 * In Next.js API routes, we detect the runtime via process.env.VERCEL / globalThis.constructor.name.
 */

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

type DbClient = {
  prepare(sql: string): any;
  exec(sql: string): void;
};

function createD1Client(db: D1Database): DbClient {
  return {
    prepare(sql: string) {
      const stmt = db.prepare(sql);
      return {
        bind: (...params: any[]) => {
          const bound = stmt.bind(...params);
          return {
            get: () => bound.first(),
            all: () => bound.all().then(r => r.results),
            run: () => bound.run(),
          };
        },
        get: () => stmt.first(),
        all: () => stmt.all().then(r => r.results),
        run: () => stmt.run(),
      };
    },
    exec(sql: string) {
      db.exec(sql);
    },
  };
}

function createNodeClient(): DbClient {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Database = require('better-sqlite3');
  const DB_PATH = process.env.DATABASE_PATH || (process.env.VERCEL ? '/tmp/complyscan.db' : './data/complyscan.db');
  const db = new Database(DB_PATH);
  db.pragma('journal_mode = DELETE');
  db.pragma('busy_timeout = 10000');
  db.pragma('synchronous = FULL');
  return db;
}

let _nodeDb: DbClient | null = null;
export function getDb(env?: any): DbClient {
  // Cloudflare Pages Workers runtime — env.DB is a D1Database
  if (env?.DB) {
    return createD1Client(env.DB);
  }
  // Next.js / Vercel — use better-sqlite3
  if (!_nodeDb) {
    _nodeDb = createNodeClient();
  }
  return _nodeDb;
}

// ---------------------------------------------------------------------------
// Compression — Web API in Workers, Node.js zlib fallback
// ---------------------------------------------------------------------------

/** Convert Uint8Array to base64 — works in Workers and Node.js */
function uint8ToBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/** Convert base64 to Uint8Array — works in Workers and Node.js */
function base64ToUint8(b64: string): Uint8Array {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export async function compressGzip(text: string): Promise<string> {
  // Workers / Browser
  if (typeof CompressionStream !== 'undefined') {
    const encoded = new TextEncoder().encode(text);
    const cs = new CompressionStream('gzip');
    const writer = cs.writable.getWriter();
    writer.write(encoded);
    writer.close();
    const reader = cs.readable.getReader();
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }
    const total = chunks.reduce((s, c) => s + c.byteLength, 0);
    const merged = new Uint8Array(total);
    let offset = 0;
    for (const c of chunks) { merged.set(c, offset); offset += c.byteLength; }
    return uint8ToBase64(merged);
  }
  // Node.js fallback
  const zlib = await import('zlib');
  const buf = zlib.gzipSync(Buffer.from(text, 'utf8'));
  return buf.toString('base64');
}

export async function decompressGzip(b64: string): Promise<string> {
  // Workers / Browser
  if (typeof DecompressionStream !== 'undefined') {
    const bytes = base64ToUint8(b64);
    const ds = new DecompressionStream('gzip');
    const writer = ds.writable.getWriter();
    writer.write(bytes as BufferSource);
    writer.close();
    const reader = ds.readable.getReader();
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }
    const total = chunks.reduce((s, c) => s + c.byteLength, 0);
    const merged = new Uint8Array(total);
    let offset = 0;
    for (const c of chunks) { merged.set(c, offset); offset += c.byteLength; }
    return new TextDecoder().decode(merged);
  }
  // Node.js fallback
  const zlib = await import('zlib');
  const buf = Buffer.from(b64, 'base64');
  return zlib.gunzipSync(buf).toString('utf8');
}

/** Parse result_json from DB — detects gzip vs plain JSON. Works in Workers and Node.js */
export async function parseResultJson(rawJson: string): Promise<any | null> {
  if (!rawJson) return null;
  try {
    const firstChar = rawJson[0];
    // Check for gzip magic bytes in base64 form (no decode needed for first char check)
    // gzip base64 typically starts with "H4sI" or similar — but just check raw char
    // For a reliable check, decode first 2 chars
    const firstBytes = atob(rawJson.slice(0, Math.ceil(2 * 4 / 3)));
    const isGzip = firstBytes.charCodeAt(0) === 0x1f && firstBytes.charCodeAt(1) === 0x8b;
    if (isGzip || firstChar === 'H') {
      return JSON.parse(await decompressGzip(rawJson));
    }
    return JSON.parse(rawJson);
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// R2 (Cloudflare Workers only — no-op on Vercel)
// ---------------------------------------------------------------------------

export async function storeReport(scanId: string, pdfData: ArrayBuffer, env?: any): Promise<string | null> {
  if (!env?.REPORTS_BUCKET) return null;
  const key = `reports/${scanId}.pdf`;
  await env.REPORTS_BUCKET.put(key, pdfData, {
    httpMetadata: { contentType: 'application/pdf' },
    customMetadata: { scanId, storedAt: new Date().toISOString() },
  });
  return key;
}

export async function getSignedReportUrl(scanId: string, env?: any): Promise<string | null> {
  if (!env?.REPORTS_BUCKET) return null;
  const key = `reports/${scanId}.pdf`;
  return env.REPORTS_BUCKET.createSignedUrl({ pathname: key, expires: 3600 });
}

// ---------------------------------------------------------------------------
// Queue — send a scan job to the Cloudflare Queue (no-op on Vercel)
// ---------------------------------------------------------------------------

export async function sendScanJob(job: { scanId: string; url: string; email?: string; trigger: string }, env?: any): Promise<void> {
  if (!env?.SCAN_QUEUE) return;
  await env.SCAN_QUEUE.send(job);
}
