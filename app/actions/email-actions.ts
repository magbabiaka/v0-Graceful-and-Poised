"use server"

import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  service: string
  message: string
}

export async function sendContactEmails(formData: ContactFormData) {
  try {
    // Step 1: Send information to the company email
    const companyEmailResult = await sendEmailToCompany(formData)

    if (!companyEmailResult.success) {
      console.error("Failed to send email to company:", companyEmailResult.error)
      return { success: false, error: "Failed to send notification email" }
    }

    // Note: We're not sending client emails until domain verification is complete
    // This is commented out to prevent Resend API errors
    /*
    // Step 2: Send automated follow-up to the user
    const clientEmailResult = await sendAutomatedResponse(formData)

    if (!clientEmailResult.success) {
      console.error("Failed to send email to client:", clientEmailResult.error)
      // We still return success since the company was notified
      return { success: true, warning: "Company notified but client email failed" }
    }
    */

    return {
      success: true,
      message:
        "Form submitted successfully. Note: Client confirmation emails are disabled until domain verification is complete.",
    }
  } catch (error) {
    console.error("Error sending emails:", error)
    return { success: false, error: "Failed to send emails" }
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
            
            <div class="note">
              <p><strong>Note:</strong> Automated client confirmation emails are currently disabled. 
              To enable them, please verify your domain in Resend. See instructions in the developer notes.</p>
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
      from: "Graceful and Poised <onboarding@resend.dev>",
      to: ["info@gracefulandpoised.com"],
      subject: `New Contact Form: ${subject}`,
      html: htmlContent,
      // Don't set reply_to as it might cause issues with Resend's testing mode
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

// This function is kept for future use after domain verification
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

    // This will be enabled after domain verification
    const { data, error } = await resend.emails.send({
      from: "Graceful and Poised <onboarding@resend.dev>",
      to: [email],
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
