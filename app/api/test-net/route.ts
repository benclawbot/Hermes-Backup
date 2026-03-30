import { NextResponse } from 'next/server';

export async function GET() {
  const key = process.env.STRIPE_SECRET_KEY || '';
  
  try {
    const resp = await fetch('https://api.stripe.com/v1/balance', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + key,
      }
    });
    const text = await resp.text();
    return NextResponse.json({
      s: resp.status,
      k: key.slice(0, 7),
      b: text.slice(0, 100)
    });
  } catch (e: any) {
    return NextResponse.json({ e: e.message, name: e.name });
  }
}
