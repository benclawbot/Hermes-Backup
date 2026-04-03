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

  let parsedResult = undefined;
  if (scan.result_json) {
    try {
      const decoded = Buffer.from(scan.result_json, 'base64');
      if (decoded[0] === 0x1f && decoded[1] === 0x8b) {
        // gzip-compressed result (stored compressed to save space)
        parsedResult = JSON.parse(require('zlib').gunzipSync(decoded).toString('utf8'));
      } else {
        // plain JSON result (legacy or fallback)
        parsedResult = JSON.parse(scan.result_json);
      }
    } catch (err) {
      console.error('Result parse error for scan', id, ':', err);
      // Return raw value so client isn't completely blind
      parsedResult = scan.result_json;
    }
  }

  return NextResponse.json({
    id: scan.id,
    url: scan.url,
    status: scan.status,
    result: parsedResult,
    created_at: scan.created_at,
    completed_at: scan.completed_at,
  });
}
