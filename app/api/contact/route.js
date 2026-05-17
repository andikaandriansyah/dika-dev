import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // STARTTLS
      requireTLS: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Gmail App Password (16 chars)
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify connection before sending
    await transporter.verify();

    await transporter.sendMail({
      from: `"Andika Portfolio" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_ADMIN,
      replyTo: email,
      subject: `New Message from ${name} — Portfolio Contact`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
          <div style="background:#000;padding:24px 32px">
            <h1 style="color:#fff;font-size:20px;margin:0;font-weight:700">New Contact Message</h1>
            <p style="color:#9ca3af;font-size:13px;margin:4px 0 0">From your portfolio contact form</p>
          </div>
          <div style="padding:32px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:12px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600;width:120px">From</td><td style="padding:12px 0;border-bottom:1px solid #f3f4f6;font-size:15px;color:#111;font-weight:600">${name}</td></tr>
              <tr><td style="padding:12px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#6b7280;font-weight:600">Email</td><td style="padding:12px 0;border-bottom:1px solid #f3f4f6;font-size:15px;color:#111"><a href="mailto:${email}" style="color:#000;text-decoration:underline">${email}</a></td></tr>
            </table>
            <div style="margin-top:24px">
              <p style="font-size:13px;color:#6b7280;font-weight:600;margin:0 0 12px">Message</p>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:20px;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap">${message}</div>
            </div>
            <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e5e7eb">
              <a href="mailto:${email}" style="display:inline-block;background:#000;color:#fff;text-decoration:none;padding:12px 24px;border-radius:100px;font-size:14px;font-weight:600">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail error:', error.message);
    return NextResponse.json(
      { error: `Failed to send: ${error.message}` },
      { status: 500 }
    );
  }
}
