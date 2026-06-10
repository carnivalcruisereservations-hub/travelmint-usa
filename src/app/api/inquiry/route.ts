import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { destination, date, guests, email, phone } = body;

    if (!destination || !date || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Build email content
    const emailSubject = `New Travel Inquiry – ${destination}`;
    const emailBody = `
New Travel Consultation Request
================================

Destination:   ${destination}
Departure Date: ${date}
Travel Party:  ${guests}
Email:         ${email}
Phone:         ${phone}

--
This inquiry was submitted via the TravelMintUSA website contact form.
    `.trim();

    // Use Resend API to send the email
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // Fallback: log and return success (for environments without email configured)
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
        from: "TravelMintUSA Inquiry <onboarding@resend.dev>",
        to: ["info@travelmintusa.com"],
        reply_to: email,
        subject: emailSubject,
        text: emailBody,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a1628; color: #e5e7eb; padding: 40px; border-radius: 12px;">
            <div style="border-bottom: 2px solid #c9a84c; padding-bottom: 20px; margin-bottom: 30px;">
              <h1 style="color: #c9a84c; font-size: 24px; margin: 0;">TravelMintUSA</h1>
              <p style="color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 5px 0 0;">New Travel Consultation Request</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 40%;">Destination</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px; font-weight: 600;">${destination}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Departure Date</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">${date}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Travel Party</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">${guests}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email Address</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #c9a84c; font-size: 15px;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Phone Number</td>
                <td style="padding: 12px 0; color: #c9a84c; font-size: 15px;"><a href="tel:${phone}" style="color: #c9a84c;">${phone}</a></td>
              </tr>
            </table>
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
    console.error("Inquiry API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
