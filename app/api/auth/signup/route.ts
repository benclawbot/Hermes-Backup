import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/env';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

interface AuthBody { email?: string; password?: string; }

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json() as AuthBody;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 });
    }

    const env: any = (request as any).env ?? (globalThis as any).__env ?? undefined;
    const db = getDb(env);

    // Check if user exists
    const existing = await db.prepare('SELECT id FROM users WHERE email = ?').get(email);
    if (existing) {
      return NextResponse.json({ error: 'An account with this email already exists' }, { status: 409 });
    }

    // Hash password with scrypt
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(password, salt, 64).toString('hex');
    const passwordHash = `${salt}:${hash}`;

    // Create user
    const userId = uuidv4();
    await db.prepare('INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)').run(userId, email, passwordHash);

    // Create session
    const token = uuidv4();
    await db.prepare('INSERT INTO sessions (token, user_id) VALUES (?, ?)').run(token, userId);

    const response = NextResponse.json({ ok: true, token });
    response.cookies.set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    return response;
  } catch (err: any) {
    console.error('Signup error:', err);
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 });
  }
}
