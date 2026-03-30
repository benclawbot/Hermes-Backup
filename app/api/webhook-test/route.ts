import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  
  return NextResponse.json({
    body_length: body.length,
    body_preview: body.slice(0, 100),
    signature_header_present: !!sig,
    signature_prefix: sig ? sig.slice(0, 20) : null,
    secret_present: !!secret,
    secret_prefix: secret ? secret.slice(0, 10) : null,
    secret_matches_expected: secret === 'whsec_LPbut8aAo8r6kRIil3FtYSt2tvnuTC8E',
  });
}
