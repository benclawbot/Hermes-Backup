import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/env';

function verifyAgencySubscriber(token: string): { subscriberId: string; email: string } | null {
  const db = getDb();
  const rec = db.prepare(`
    SELECT st.subscriber_id, st.expires_at, s.email, s.status, s.plan
    FROM subscriber_tokens st
    JOIN subscribers s ON s.id = st.subscriber_id
    WHERE st.token = ?
  `).get(token) as any;

  if (!rec) return null;
  if (rec.status !== 'active') return null;
  if (rec.plan !== 'agency') return null;
  if (rec.expires_at && new Date(rec.expires_at) < new Date()) return null;
  return { subscriberId: rec.subscriber_id, email: rec.email };
}

// GET: get client details + their scans
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  const { id: clientId } = await params;

  if (!token) {
    return NextResponse.json({ error: 'Token required' }, { status: 401 });
  }

  const sub = verifyAgencySubscriber(token);
  if (!sub) {
    return NextResponse.json({ error: 'Invalid token or not an agency subscriber' }, { status: 401 });
  }

  const db = getDb();

  // Get client
  const client = db.prepare(`
    SELECT id, name, url, created_at
    FROM agency_clients
    WHERE id = ? AND agency_subscriber_id = ?
  `).get(clientId, sub.subscriberId) as any;

  if (!client) {
    return NextResponse.json({ error: 'Client not found' }, { status: 404 });
  }

  // Get all scans for this client's URL by this agency subscriber
  const scans = db.prepare(`
    SELECT id, url, status, created_at, completed_at, result_json
    FROM scans
    WHERE subscriber_id = ? AND url = ?
    ORDER BY created_at DESC
    LIMIT 50
  `).all(sub.subscriberId, client.url) as any[];

  // Process scans to add compliance status
  const scansWithStatus = scans.map(scan => {
    let complianceStatus = 'unknown';
    let gdprScore = null;
    if (scan.status === 'completed' && scan.result_json) {
      try {
        const result = JSON.parse(scan.result_json);
        gdprScore = result?.aiAnalysis?.gdprScore ?? null;
        complianceStatus = gdprScore >= 75 ? 'compliant' : 'non-compliant';
      } catch {
        complianceStatus = 'unknown';
      }
    }
    return {
      id: scan.id,
      url: scan.url,
      status: scan.status,
      created_at: scan.created_at,
      completed_at: scan.completed_at,
      complianceStatus,
      gdprScore,
    };
  });

  return NextResponse.json({
    client: {
      ...client,
      complianceStatus: scansWithStatus[0]?.complianceStatus || 'unknown',
      lastScanDate: scansWithStatus[0]?.completed_at || scansWithStatus[0]?.created_at || null,
    },
    scans: scansWithStatus,
  });
}

// DELETE: remove a client
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  const { id: clientId } = await params;

  if (!token) {
    return NextResponse.json({ error: 'Token required' }, { status: 401 });
  }

  const sub = verifyAgencySubscriber(token);
  if (!sub) {
    return NextResponse.json({ error: 'Invalid token or not an agency subscriber' }, { status: 401 });
  }

  const db = getDb();

  // Verify client belongs to this agency
  const client = db.prepare(`
    SELECT id FROM agency_clients
    WHERE id = ? AND agency_subscriber_id = ?
  `).get(clientId, sub.subscriberId);

  if (!client) {
    return NextResponse.json({ error: 'Client not found' }, { status: 404 });
  }

  // Delete client
  db.prepare('DELETE FROM agency_clients WHERE id = ?').run(clientId);

  return NextResponse.json({ success: true });
}
