import { NextResponse } from 'next/server';

export async function GET() {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'RESEND_API_KEY not set' }, { status: 500 });
    }
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'ComplyScan <no-reply@resend.dev>',
      to: 'thomas.chaffanjon@gmail.com',
      subject: 'Test email from ComplyScan',
      html: '<p>This is a test. If you receive this, email delivery is working.</p>',
    });
    return NextResponse.json({ success: !error, data, error });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
