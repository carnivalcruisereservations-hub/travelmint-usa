import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailSubject = `New Contact Inquiry from ${name}`;
    const emailBody = `
New Contact Inquiry
===================

Name:          ${name}
Email Address: ${email}
Phone Number:  ${phone || "Not provided"}
Message:
${message}

--
This inquiry was submitted via the TravelMintUSA website contact form.
    `.trim();

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // Fallback in case API key is missing (e.g. local dev)
      console.log("Email would be sent:", { emailSubject, emailBody });
      return NextResponse.json({ success: true });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "TravelMintUSA Contact <onboarding@resend.dev>",
        to: ["akaatwork1209@gmail.com"],
        reply_to: email,
        subject: `[TravelMintUSA → info@travelmintusa.com] ${emailSubject}`,
        text: emailBody,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a1628; color: #e5e7eb; padding: 40px; border-radius: 12px;">
            <div style="border-bottom: 2px solid #c9a84c; padding-bottom: 20px; margin-bottom: 30px;">
              <h1 style="color: #c9a84c; font-size: 24px; margin: 0;">TravelMintUSA</h1>
              <p style="color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 5px 0 0;">New Contact Inquiry</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 40%;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email Address</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #c9a84c; font-size: 15px;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Phone Number</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">${phone || "Not provided"}</td>
              </tr>
            </table>
            <div style="margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
              <h4 style="color: #c9a84c; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px;">Bespoke Travel Requirements</h4>
              <p style="color: #d1d5db; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); color: #6b7280; font-size: 12px; text-align: center;">
              This inquiry was submitted via travelmintusa.com
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
