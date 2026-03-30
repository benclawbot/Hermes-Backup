import { NextResponse } from 'next/server';

export async function GET() {
  const key = process.env.STRIPE_SECRET_KEY || '';
  
  // Test direct HTTPS to Stripe
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    
    const resp = await fetch('https://api.stripe.com/v1/balance', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      signal: controller.signal
    });
    clearTimeout(timeout);
    
    const data = await resp.text();
    return NextResponse.json({ 
      reached_stripe: true, 
      status: resp.status,
      key_prefix: key.slice(0, 7),
      response_preview: data.slice(0, 200)
    });
  } catch (e: any) {
    return NextResponse.json({ 
      reached_stripe: false, 
      error: e.message,
      code: e.code,
      name: e.name,
      key_prefix: key.slice(0, 7)
    });
  }
}
