import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Create a transporter using your email service (e.g., Gmail)
    // You should use environment variables for security
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    // 1. Send Email to yourself (Talha)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'shykhtalha33@gmail.com',
      subject: `New Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #ff3366;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #ff3366;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    };

    // 2. Send Thank You Email back to the client
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #ff3366;">Hi ${name},</h2>
          <p>Thank you for reaching out! I've received your message and will get back to you shortly.</p>
          <p>In the meantime, feel free to check out my latest projects on GitHub or connect with me on LinkedIn.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 0.9em; color: #666;">
            Best Regards,<br/>
            <strong>M. Talha</strong><br/>
            Software Engineer | Agentic AI Developer
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
