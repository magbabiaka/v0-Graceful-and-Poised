import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    // Create HTML content for the test email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1a472a; color: #d4af37; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Test Email</h1>
          </div>
          <div class="content">
            <p>This is a test email from your Graceful and Poised website.</p>
            <p>If you're receiving this email, it means your email configuration is working correctly!</p>
            <p>Time sent: ${new Date().toLocaleString()}</p>
          </div>
          <div class="footer">
            <p>This is an automated test message from your Graceful and Poised website.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Graceful and Poised <onboarding@resend.dev>",
      to: ["engage@gracefulandpoised.com"],
      subject: "Test Email from Graceful and Poised Website",
      html: htmlContent,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending test email:", error)
    return NextResponse.json({ error: "Failed to send test email" }, { status: 500 })
  }
}
