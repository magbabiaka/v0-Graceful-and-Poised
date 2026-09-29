"use server"

import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

const SENDER = "Graceful and Poised <info@gracefulandpoised.com>"
const COMPANY_EMAIL = "info@gracefulandpoised.com"

const SERVICE_LABELS: Record<string, string> = {
  "one-on-one-coaching": "One-on-One Coaching",
  "corporate-training": "Corporate Training",
  "diplomatic-protocol": "Diplomatic Protocol",
  "vip-events": "VIP Events",
  "own-the-room": "Own the Room",
  other: "Other",
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function sanitize(formData: ContactFormData): ContactFormData {
  const service = formData.service?.trim() || "other"
  return {
    firstName: escapeHtml(formData.firstName?.trim() ?? ""),
    lastName: escapeHtml(formData.lastName?.trim() ?? ""),
    email: formData.email?.trim() ?? "",
    phone: escapeHtml(formData.phone?.trim() ?? ""),
    subject: escapeHtml(formData.subject?.trim() ?? ""),
    service: escapeHtml(SERVICE_LABELS[service] ?? service),
    message: escapeHtml(formData.message?.trim() ?? "").replace(/\n/g, "<br>"),
  }
}

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  service: string
  message: string
}

export async function sendContactEmails(rawData: ContactFormData) {
  const email = rawData.email?.trim() ?? ""
  if (!rawData.firstName?.trim() || !rawData.lastName?.trim() || !rawData.subject?.trim() || !rawData.message?.trim()) {
    return { success: false, error: "Please fill in all required fields." }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  const formData = sanitize(rawData)

  try {
    const companyEmailResult = await sendEmailToCompany(formData)

    if (!companyEmailResult.success) {
      console.error("Failed to send email to company:", companyEmailResult.error)
      return { success: false, error: "We couldn't send your message. Please try again or email us directly." }
    }

    const clientEmailResult = await sendAutomatedResponse(formData)

    if (!clientEmailResult.success) {
      console.error("Failed to send email to client:", clientEmailResult.error)
      return { success: true, warning: "Company notified but client confirmation email failed" }
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending emails:", error)
    return { success: false, error: "We couldn't send your message. Please try again or email us directly." }
  }
}

async function sendEmailToCompany(formData: ContactFormData) {
  const { firstName, lastName, email, phone, subject, service, message } = formData

  try {
    // Create HTML content for the email with logo
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; }
          .header { background-color: #1a472a; color: #d4af37; padding: 20px; text-align: center; }
          .logo-container { margin-bottom: 15px; }
          .logo { width: 261px; height: 106px; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .footer { text-align: center; margin-top: 20px; padding: 15px; font-size: 12px; color: #666; background-color: #f1f1f1; }
          .info-item { margin-bottom: 10px; }
          .label { font-weight: bold; }
          .message-box { background-color: #fff; padding: 15px; border-left: 4px solid #d4af37; margin-top: 20px; }
          .note { background-color: #fff3cd; padding: 10px; border-left: 4px solid #ffc107; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-container">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graceful_Poised_Logo-YiULpjwRsFmFFEuc9QRHX5jtSV3dbC.png" alt="Graceful and Poised" class="logo" />
            </div>
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p>You have received a new inquiry from the Graceful and Poised website contact form.</p>
            
            <div class="info-item"><span class="label">Name:</span> ${firstName} ${lastName}</div>
            <div class="info-item"><span class="label">Email:</span> ${email}</div>
            <div class="info-item"><span class="label">Phone:</span> ${phone || "Not provided"}</div>
            <div class="info-item"><span class="label">Subject:</span> ${subject}</div>
            <div class="info-item"><span class="label">Service of Interest:</span> ${service}</div>
            
            <div class="message-box">
              <h3>Message:</h3>
              <p>${message}</p>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated message from your Graceful and Poised website.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email using Resend - only to the verified email address
    const { data, error } = await resend.emails.send({
      from: SENDER,
      to: [COMPANY_EMAIL],
      cc: ["engage@gracefulandpoised.com"],
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: htmlContent,
    })

    if (error) {
      console.error("Resend API error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error sending company email:", error)
    return { success: false, error: "Failed to send company notification" }
  }
}

async function sendAutomatedResponse(formData: ContactFormData) {
  const { firstName, email, service } = formData

  try {
    // Create HTML content for the automated response with logo
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; }
          .header { background-color: #1a472a; color: #d4af37; padding: 20px; text-align: center; }
          .logo-container { margin-bottom: 15px; }
          .logo { width: 261px; height: 106px; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .footer { text-align: center; margin-top: 20px; padding: 15px; font-size: 12px; color: #666; background-color: #f1f1f1; }
          .button { display: inline-block; background-color: #d4af37; color: #1a472a; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; }
          .highlight { color: #1a472a; font-weight: bold; }
          .section { margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo-container">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graceful_Poised_Logo-YiULpjwRsFmFFEuc9QRHX5jtSV3dbC.png" alt="Graceful and Poised" class="logo" />
            </div>
            <h1>Thank You for Contacting Us</h1>
          </div>
          <div class="content">
            <p>Dear ${firstName},</p>
            
            <p>Thank you for connecting with Graceful and Poised! We've successfully received your inquiry regarding our <span class="highlight">${service}</span> offering.</p>
            
            <p>At Graceful and Poised, we are dedicated to empowering professionals and organizations to communicate with clarity, lead with confidence, and excel on the global stage. Whether you're seeking bespoke coaching, corporate training, or guidance on diplomatic protocol, our expert team is ready to support you every step of the way.</p>
            
            <div class="section">
              <p><strong>What's Next:</strong></p>
              
              <p>✔️ Your inquiry is now with our team. We will carefully review your message and respond within 24–48 business hours with a personalized follow-up.</p>
              
              <p>✔️ To move things forward quickly, you are welcome to schedule an introductory consultation at your convenience using the link below:</p>
              
              <p style="text-align: center; margin: 30px 0;">
                <a href="https://gracefulandpoised.com/booking" class="button">Schedule a Consultation</a>
              </p>
            </div>
            
            <div class="section">
              <p>In the meantime, you can explore our transformative services and success stories here:</p>
              <p style="text-align: center;">
                <a href="https://gracefulandpoised.com/programs" class="button">Explore Our Programs</a>
              </p>
            </div>
            
            <p>We appreciate your interest in partnering with Graceful and Poised, and we look forward to helping you achieve excellence with grace and precision.</p>
            
            <p>Warm regards,<br>
            The Graceful and Poised Team</p>
          </div>
          <div class="footer">
            <p>gracefulandpoised.com | +1 404-441-5346 | info@gracefulandpoised.com</p>
          </div>
        </div>
      </body>
      </html>
    `

    const { data, error } = await resend.emails.send({
      from: SENDER,
      to: [email],
      replyTo: COMPANY_EMAIL,
      subject: "Thank You for Contacting Graceful and Poised",
      html: htmlContent,
    })

    if (error) {
      console.error("Resend API error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error sending automated response:", error)
    return { success: false, error: "Failed to send automated response" }
  }
}
