import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Keds Technology Website" <${process.env.GMAIL_USER}>`,
      to: "kedstechnology@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name} — ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1e; color: #e2e8f0; padding: 32px; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 4px;">New Project Inquiry</h2>
          <p style="color: #94a3b8; font-size: 13px; margin-bottom: 24px;">Received from your website contact form</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e2a4a; color: #94a3b8; font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e2a4a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e2a4a; color: #94a3b8; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e2a4a;">
                <a href="mailto:${email}" style="color: #67e8f9;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e2a4a; color: #94a3b8; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e2a4a;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e2a4a; color: #94a3b8; font-size: 13px;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e2a4a;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e2a4a; color: #94a3b8; font-size: 13px;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e2a4a; color: #a78bfa; font-weight: 600;">${service}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #111827; border-radius: 8px; border-left: 3px solid #7c3aed;">
            <p style="color: #94a3b8; font-size: 12px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
          <p style="color: #4b5563; font-size: 11px; margin-top: 24px; text-align: center;">
            © 2026 Keds Technology • kedstechnology.com
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly at kedstechnology@gmail.com" },
      { status: 500 }
    );
  }
}

