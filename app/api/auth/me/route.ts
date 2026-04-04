import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/env';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }, env: any) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '') ||
    request.cookies.get('session_token')?.value ||
    request.cookies.get('session')?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const db = getDb(env);

  // Try subscriber token first (Bearer token from URL for subscribers)
  const subToken = db.prepare(`
    SELECT st.token, st.subscriber_id, st.expires_at, s.email, s.plan, s.status,
           s.current_period_end, s.cancel_at_period_end
    FROM subscriber_tokens st
    JOIN subscribers s ON s.id = st.subscriber_id
    WHERE st.token=?
  `).get(token) as any;

  if (subToken) {
    // Check if token has expired (set at cancellation)
    if (subToken.expires_at && new Date(subToken.expires_at) < new Date()) {
      return NextResponse.json({ authenticated: false, error: 'Subscription expired' }, { status: 401 });
    }
    // Check if subscriber status is active
    if (subToken.status !== 'active') {
      return NextResponse.json({ authenticated: false, error: 'Subscription not active' }, { status: 401 });
    }

    // Update last used
    await db.prepare(`UPDATE subscriber_tokens SET last_used_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now') WHERE token=?`).run(token);

    return NextResponse.json({
      authenticated: true,
      email: subToken.email,
      type: 'subscriber',
      subscriberId: subToken.subscriber_id,
      plan: subToken.plan,
      status: subToken.status,
      currentPeriodEnd: subToken.current_period_end,
      cancelAtPeriodEnd: Boolean(subToken.cancel_at_period_end),
    });
  }

  // Try user session token
  const session = db.prepare(`
    SELECT s.*, u.email FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.token=?
  `).get(token) as any;

  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  // Update last used
  await db.prepare(`UPDATE sessions SET last_used_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now') WHERE token=?`).run(token);

  return NextResponse.json({
    authenticated: true,
    email: session.email,
    type: 'user',
    userId: session.user_id,
  });
}
