import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/env';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }, env: any) {
  const token = request.nextUrl.searchParams.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Token required' }, { status: 401 });
  }

  const db = getDb(env);

  const tokenRecord = db.prepare(`
    SELECT st.token, st.subscriber_id, s.email, s.plan, s.status
    FROM subscriber_tokens st
    JOIN subscribers s ON s.id = st.subscriber_id
    WHERE st.token=?
  `).get(token) as any;

  if (!tokenRecord) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  if (tokenRecord.status !== 'active') {
    return NextResponse.json({ error: 'Subscription not active' }, { status: 401 });
  }

  // Update last_used_at
  await db.prepare(`
    UPDATE subscriber_tokens SET last_used_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
    WHERE token=?
  `).run(token);

  // Get recent scans for this subscriber (last 20)
  const recentScans = await db.prepare(`
    SELECT id, url, status, result_json, created_at, completed_at
    FROM scans
    WHERE subscriber_id = ?
    ORDER BY created_at DESC
    LIMIT 20
  `).all(tokenRecord.subscriber_id) as any[];

  return NextResponse.json({
    subscriber: {
      email: tokenRecord.email,
      plan: tokenRecord.plan,
      status: tokenRecord.status,
    },
    recentScans: recentScans.map((s) => ({
      id: s.id,
      url: s.url,
      status: s.status,
      result_json: s.result_json,
      created_at: s.created_at,
      completed_at: s.completed_at,
    })),
  });
}
