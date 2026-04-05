import { NextRequest, NextResponse } from 'next/server';
import { getDb, parseResultJson } from '@/lib/env';

/**
 * GET /api/scan/[id]
 *
 * Returns scan record from D1 (polled by the report page).
 * Works in both Cloudflare Pages (D1) and local dev (Vercel Postgres fallback via DATABASE_URL).
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const env: any = (request as any).env ?? (globalThis as any).__env ?? undefined;
  const db = getDb(env);

  const scan = await db.prepare('SELECT * FROM scans WHERE id = ?').get(id) as any;

  if (!scan) {
    return NextResponse.json({ error: 'Scan not found' }, { status: 404 });
  }

  const result = scan.result_json ? await parseResultJson(scan.result_json) : undefined;

  return NextResponse.json({
    id: scan.id,
    url: scan.url,
    status: scan.status,
    result,
    created_at: scan.created_at,
    completed_at: scan.completed_at,
  });
}
