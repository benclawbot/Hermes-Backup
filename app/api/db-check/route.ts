import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET() {
  const db = getDb();
  try {
    const scans = db.prepare('SELECT id, url, status, email, created_at, completed_at FROM scans ORDER BY created_at DESC LIMIT 10').all();
    return NextResponse.json({ ok: true, scans, db_path: process.env.DATABASE_PATH || '/tmp/complyscan.db' });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message });
  }
}
