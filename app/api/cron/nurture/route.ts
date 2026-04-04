/**
 * Cron: Nurture email sequences
 * Run weekly: sends Day-7 upgrade email to free-scan users who haven't upgraded.
 * Secured via VERCEL_OIDC_TOKEN (set in .env.local)
 */
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/env';

export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization');
  const expectedToken = process.env.VERCEL_OIDC_TOKEN;
  if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = getDb();

  // Find free-scan users (no subscriber record) who signed up in the last 7 days
  // and have not been sent the upgrade email yet
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const users = db.prepare(`
    SELECT DISTINCT u.email
    FROM users u
    JOIN scans s ON s.email = u.email
    WHERE s.stripe_session_id IS NULL
      AND u.created_at >= ?
      AND u.email NOT IN (
        SELECT email FROM subscriber_tokens
      )
    GROUP BY u.email
    HAVING COUNT(s.id) >= 1
  `).all(sevenDaysAgo.toISOString()) as { email: string }[];

  let sent = 0;
  let failed = 0;

  for (const { email } of users) {
    try {
      const { sendUpgradeEmail } = await import('@/lib/mailjet');
      await sendUpgradeEmail(email);
      sent++;
    } catch {
      failed++;
    }
  }

  return NextResponse.json({
    ok: true,
    message: `Nurture cron complete: ${sent} upgrade emails sent, ${failed} failed`,
    usersFound: users.length,
  });
}
