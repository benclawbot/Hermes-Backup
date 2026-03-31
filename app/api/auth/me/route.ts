import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('session')?.value;
  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const db = getDb();
  const session = db.prepare(`
    SELECT s.*, u.email FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.token = ?
  `).get(token) as any;

  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  // Update last used
  db.prepare('UPDATE sessions SET last_used_at = strftime(\'%Y-%m-%dT%H:%M:%SZ\', \'now\') WHERE token = ?').run(token);

  return NextResponse.json({ authenticated: true, email: session.email, userId: session.user_id });
}
