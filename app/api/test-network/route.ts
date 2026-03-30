import { NextResponse } from 'next/server';

export async function GET() {
  const results: Record<string, {ok: boolean; status?: number; error?: string}> = {};
  
  // Test 1: Google (basic internet)
  try {
    const r = await fetch('https://example.com');
    results['example.com'] = { ok: r.ok, status: r.status };
  } catch (e: any) {
    results['example.com'] = { ok: false, error: e.message };
  }
  
  // Test 2: Stripe API (HTTPS API)
  try {
    const r = await fetch('https://api.stripe.com/v1/balance', {
      headers: {
        'Authorization': 'Bearer ' + (process.env.STRIPE_SECRET_KEY || '')
      }
    });
    results['stripe_api'] = { ok: r.ok, status: r.status };
  } catch (e: any) {
    results['stripe_api'] = { ok: false, error: e.message };
  }
  
  // Test 3: Env vars
  results['env'] = {
    ok: true,
    status: process.env.STRIPE_SECRET_KEY ? 200 : 404,
    error: process.env.STRIPE_SECRET_KEY 
      ? 'STRIPE_SECRET_KEY present (prefix: ' + process.env.STRIPE_SECRET_KEY.slice(0,7) + ')' 
      : 'STRIPE_SECRET_KEY missing'
  } as any;

  return NextResponse.json(results);
}
