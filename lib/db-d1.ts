/**
 * D1 Database Client for Cloudflare Workers
 * Replaces lib/db.ts (better-sqlite3) with Cloudflare D1 (SQLite over Workers)
 */

export interface Env {
  DB: D1Database;
  REPORTS_BUCKET: R2Bucket;
  SCAN_QUEUE: Queue<ScanJob>;
  KV: KVNamespace;
  NEXT_PUBLIC_APP_URL: string;
}

// Re-export types from the schema
export interface User {
  id: string;
  email: string;
  password_hash: string;
  created_at: string;
}

export interface Session {
  token: string;
  user_id: string;
  created_at: string;
  last_used_at: string | null;
}

export interface Scan {
  id: string;
  url: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  result_json: string | null;
  email: string | null;
  stripe_session_id: string | null;
  subscriber_id: string | null;
  user_id: string | null;
  created_at: string;
  completed_at: string | null;
}

export interface Subscriber {
  id: string;
  stripe_customer_id: string;
  email: string;
  plan: string;
  status: 'active' | 'past_due' | 'canceled' | 'incomplete';
  current_period_end: string | null;
  cancel_at_period_end: number;
  created_at: string;
  updated_at: string;
}

export interface AgencyClient {
  id: string;
  agency_subscriber_id: string;
  name: string;
  url: string;
  created_at: string;
}

// Scan job payload for Queue
export interface ScanJob {
  scanId: string;
  url: string;
  email?: string;
  trigger: 'stripe' | 'free' | 'subscriber';
}

/**
 * Wrapper that provides a getDb() interface compatible with the old lib/db.ts
 * but backed by D1. Uses a class so we can mock/stub in tests.
 */
export class D1Client {
  constructor(private db: D1Database) {}

  prepare(sql: string): D1PreparedStatement {
    return this.db.prepare(sql);
  }

  // Convenience methods mirroring better-sqlite3 patterns

  async get<T = any>(sql: string, ...params: any[]): Promise<T | null> {
    const stmt = this.db.prepare(sql);
    // D1 bind positional params with $1, $2... or ?
    // We use ? for compatibility — D1 accepts both
    const bound = params.length > 0 ? stmt.bind(...params) : stmt;
    const result = await bound.first<T>();
    return result ?? null;
  }

  async all<T = any>(sql: string, ...params: any[]): Promise<T[]> {
    const stmt = this.db.prepare(sql);
    const bound = params.length > 0 ? stmt.bind(...params) : stmt;
    const result = await bound.all<T>();
    return result.results;
  }

  async run(sql: string, ...params: any[]): Promise<D1Result> {
    const stmt = this.db.prepare(sql);
    const bound = params.length > 0 ? stmt.bind(...params) : stmt;
    return await bound.run();
  }

  exec(sql: string): void {
    this.db.exec(sql);
  }
}

// Export singleton factory — Cloudflare injects env in context
let _db: D1Client | null = null;

export function getDb(env: Env): D1Client {
  if (!_db) {
    _db = new D1Client(env.DB);
  }
  return _db;
}

// For Next.js API routes that destructure env from params
export function getDbFromEnv(env: Env): D1Client {
  return new D1Client(env.DB);
}

// Helper to parse result_json (which may be gzip+base64 or plain JSON)
// Called by the scan-results page and /api/scan/[id]/route.ts
export function parseResultJson(resultJson: string | null): any | null {
  if (!resultJson) return null;
  try {
    const decoded = Buffer.from(resultJson, 'base64');
    // gzip magic bytes: 0x1f 0x8b
    if (decoded[0] === 0x1f && decoded[1] === 0x8b) {
      // Return raw — decompress in the API route using CompressionStream
      // We return a marker so callers know to decompress
      return { __gzip: resultJson };
    }
    return JSON.parse(resultJson);
  } catch {
    return null;
  }
}