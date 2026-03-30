import { NextResponse } from 'next/server';

export async function GET() {
  const key = process.env.STRIPE_SECRET_KEY || 'NOT_SET';
  
  try {
    const resp = await fetch('https://api.stripe.com/v1/balance', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + key,
      }
    });
    const text = await resp.text();
    return new NextResponse('OK status=' + resp.status + ' key=' + key.slice(0,7) + ' body=' + text.slice(0,100), {
      status: 200,
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch (e: any) {
    return new NextResponse('ERROR: ' + e.message + ' name=' + e.name, {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
