import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '@/lib/env';

function verifyAgencySubscriber(token: string, db: ReturnType<typeof getDb>): { subscriberId: string; email: string } | null {
  const rec = db.prepare(`
    SELECT st.subscriber_id, st.expires_at, s.email, s.status, s.plan
    FROM subscriber_tokens st
    JOIN subscribers s ON s.id = st.subscriber_id
    WHERE st.token=?
  `).get(token) as any;

  if (!rec) return null;
  if (rec.status !== 'active') return null;
  if (rec.plan !== 'agency') return null;
  if (rec.expires_at && new Date(rec.expires_at) < new Date()) return null;
  return { subscriberId: rec.subscriber_id, email: rec.email };
}

// GET: list all clients for the agency subscriber
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }, env: any) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ error: 'Token required' }, { status: 401 });
  }

  const db = getDb(env);

  const sub = verifyAgencySubscriber(token, db);
  if (!sub) {
    return NextResponse.json({ error: 'Invalid token or not an agency subscriber' }, { status: 401 });
  }

  // Get all clients for this agency
  const clients = await db.prepare(`
    SELECT id, name, url, created_at
    FROM agency_clients
    WHERE agency_subscriber_id = ?
    ORDER BY created_at DESC
  `).all(sub.subscriberId) as any[];

  // For each client, get last scan info
  const clientsWithScans = clients.map(client => {
    const lastScan = db.prepare(`
      SELECT id, status, created_at, completed_at, result_json
      FROM scans
      WHERE subscriber_id = ? AND url = ?
      ORDER BY created_at DESC
      LIMIT 1
    `).get(sub.subscriberId, client.url) as any;

    let complianceStatus = 'unknown';
    if (lastScan?.status === 'completed' && lastScan?.result_json) {
      try {
        const result = JSON.parse(lastScan.result_json);
        const score = result?.aiAnalysis?.gdprScore ?? 0;
        complianceStatus = score >= 75 ? 'compliant' : 'non-compliant';
      } catch {
        complianceStatus = 'unknown';
      }
    } else if (lastScan?.status === 'processing') {
      complianceStatus = 'scanning';
    }

    return {
      ...client,
      lastScanDate: lastScan?.completed_at || lastScan?.created_at || null,
      lastScanStatus: lastScan?.status || null,
      complianceStatus,
    };
  });

  return NextResponse.json({ clients: clientsWithScans });
}

// POST: add a new client
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }, env: any) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ error: 'Token required' }, { status: 401 });
  }

  const db = getDb(env);

  const sub = verifyAgencySubscriber(token, db);
  if (!sub) {
    return NextResponse.json({ error: 'Invalid token or not an agency subscriber' }, { status: 401 });
  }

  try {
    const body = await request.json() as { name?: string; url?: string };
    const { name, url } = body;

    if (!name || !url) {
      return NextResponse.json({ error: 'Name and URL are required' }, { status: 400 });
    }

    // Validate URL
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        throw new Error('Invalid protocol');
      }
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    // Check for duplicate URL for this agency
    const existing = await db.prepare(`
      SELECT id FROM agency_clients
      WHERE agency_subscriber_id = ? AND url = ?
    `).get(sub.subscriberId, url);

    if (existing) {
      return NextResponse.json({ error: 'Client with this URL already exists' }, { status: 409 });
    }

    const clientId = uuidv4();
    await db.prepare(`
      INSERT INTO agency_clients (id, agency_subscriber_id, name, url)
      VALUES (?, ?, ?, ?)
    `).run(clientId, sub.subscriberId, name, url);

    const client = await db.prepare(`SELECT * FROM agency_clients WHERE id = ?`).get(clientId);

    return NextResponse.json({ client }, { status: 201 });
  } catch (error: any) {
    console.error('Add client error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
