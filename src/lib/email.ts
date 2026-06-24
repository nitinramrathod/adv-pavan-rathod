import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.FROM_EMAIL || "noreply@advpavanrathod.in";
const TO = process.env.TO_EMAIL || "adv.pavanrathod@gmail.com";

export async function sendContactEmail(data: {
  name: string;
  phone: string;
  email: string;
  city: string;
  legalIssue: string;
  message: string;
}) {
  return resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `New Legal Inquiry from ${data.name} - ${data.legalIssue}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0B1F3A; color: #fff; border-radius: 8px; overflow: hidden;">
        <div style="background: #D4AF37; padding: 24px; text-align: center;">
          <h1 style="margin: 0; color: #0B1F3A; font-size: 22px;">New Legal Inquiry</h1>
          <p style="margin: 4px 0 0; color: #0B1F3A;">Adv. Pavan Rathod — advpavanrathod.in</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f; color: #D4AF37; width: 140px;"><strong>Name</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f;">${data.name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f; color: #D4AF37;"><strong>Phone</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f;">${data.phone}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f; color: #D4AF37;"><strong>Email</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f;">${data.email}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f; color: #D4AF37;"><strong>City</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f;">${data.city}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f; color: #D4AF37;"><strong>Legal Issue</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f;">${data.legalIssue}</td></tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="color: #D4AF37; margin-bottom: 8px;"><strong>Message:</strong></p>
            <p style="background: #162d52; padding: 16px; border-radius: 6px; line-height: 1.6;">${data.message}</p>
          </div>
        </div>
        <div style="padding: 16px; text-align: center; background: #071426; color: #9ca3af; font-size: 12px;">
          Received from advpavanrathod.in Contact Form
        </div>
      </div>
    `,
  });
}

export async function sendCallbackEmail(data: {
  name: string;
  phone: string;
  preferredTime: string;
}) {
  return resend.emails.send({
    from: FROM,
    to: TO,
    subject: `Callback Request from ${data.name}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0B1F3A; color: #fff; border-radius: 8px; overflow: hidden;">
        <div style="background: #D4AF37; padding: 24px; text-align: center;">
          <h1 style="margin: 0; color: #0B1F3A; font-size: 22px;">Callback Request</h1>
          <p style="margin: 4px 0 0; color: #0B1F3A;">Adv. Pavan Rathod — advpavanrathod.in</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f; color: #D4AF37; width: 160px;"><strong>Name</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f;">${data.name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f; color: #D4AF37;"><strong>Phone</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #1e3a5f;">${data.phone}</td></tr>
            <tr><td style="padding: 10px 0; color: #D4AF37;"><strong>Preferred Time</strong></td><td style="padding: 10px 0;">${data.preferredTime}</td></tr>
          </table>
          <p style="margin-top: 24px; color: #D4AF37; font-weight: bold;">Please call this client at the preferred time.</p>
        </div>
      </div>
    `,
  });
}
