import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const db = getDb();

  const scan = db.prepare('SELECT * FROM scans WHERE id = ?').get(id) as any;

  if (!scan) {
    return NextResponse.json({ error: 'Scan not found' }, { status: 404 });
  }

  return NextResponse.json({
    id: scan.id,
    url: scan.url,
    status: scan.status,
    result: scan.result_json ? JSON.parse(scan.result_json) : null,
    created_at: scan.created_at,
    completed_at: scan.completed_at,
  });
}
