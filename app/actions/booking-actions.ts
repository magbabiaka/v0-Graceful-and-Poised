"use server"

import { Resend } from "resend"

interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  service: string
  preferredDate: string
  preferredDay: string // New field for day of week
  preferredTime: string
  message: string
  referral: string
}

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitBookingForm(formData: FormData) {
  try {
    // Extract form data
    const bookingData: BookingFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: (formData.get("company") as string) || "N/A",
      service: formData.get("service") as string,
      preferredDate: formData.get("preferredDate") as string,
      preferredDay: formData.get("preferredDay") as string,
      preferredTime: formData.get("preferredTime") as string,
      message: (formData.get("message") as string) || "No message provided.",
      referral: (formData.get("referral") as string) || "Not specified",
    }

    // Format the day and time for display
    const formattedDay = bookingData.preferredDay.charAt(0).toUpperCase() + bookingData.preferredDay.slice(1)
    const formattedTime = bookingData.preferredTime
      .replace("am", " AM")
      .replace("pm", " PM")
      .replace("9", "9:00")
      .replace("10", "10:00")
      .replace("11", "11:00")
      .replace("12", "12:00")
      .replace("1", "1:00")
      .replace("2", "2:00")
      .replace("3", "3:00")
      .replace("4", "4:00")

    // Create HTML email content for company notification
    const companyEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Consultation Booking</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #1a472a;
          padding: 20px;
          text-align: center;
        }
        .logo {
          width: 261px;
          height: 106px;
        }
        .content {
          padding: 20px;
          background-color: #f9f9f9;
        }
        .booking-details {
          background-color: #fff;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
          border-left: 4px solid #1a472a;
        }
        h1 {
          color: #fff;
          margin-top: 15px;
        }
        h2 {
          color: #1a472a;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }
        .footer {
          text-align: center;
          padding: 20px;
          font-size: 12px;
          color: #666;
          background-color: #f1f1f1;
        }
        .note {
          background-color: #fffde7;
          padding: 10px;
          border-left: 4px solid #ffd600;
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graceful_Poised_Logo-YiULpjwRsFmFFEuc9QRHX5jtSV3dbC.png" alt="Graceful and Poised" class="logo">
          <h1>New Consultation Booking</h1>
        </div>
        <div class="content">
          <div class="note">
            <strong>Note:</strong> This is a notification email for a new consultation booking. Please contact the client to confirm their appointment.
          </div>
          
          <h2>Client Information</h2>
          <div class="booking-details">
            <p><strong>Name:</strong> ${bookingData.firstName} ${bookingData.lastName}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
            <p><strong>Company/Organization:</strong> ${bookingData.company}</p>
          </div>
          
          <h2>Booking Details</h2>
          <div class="booking-details">
            <p><strong>Service of Interest:</strong> ${bookingData.service}</p>
            <p><strong>Preferred Date:</strong> ${bookingData.preferredDate}</p>
            <p><strong>Preferred Day:</strong> ${formattedDay}</p>
            <p><strong>Preferred Time:</strong> ${formattedTime}</p>
          </div>
          
          <h2>Additional Information</h2>
          <div class="booking-details">
            <p><strong>Message:</strong></p>
            <p>${bookingData.message}</p>
            <p><strong>Referral Source:</strong> ${bookingData.referral}</p>
          </div>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Graceful and Poised. All rights reserved.</p>
          <p>This email was sent to you because a client submitted a booking request on your website.</p>
        </div>
      </div>
    </body>
    </html>
    `

    // Create HTML email content for client confirmation
    const clientEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Consultation Request with Graceful & Poised</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #1a472a;
          padding: 20px;
          text-align: center;
        }
        .logo {
          width: 261px;
          height: 106px;
        }
        .content {
          padding: 20px;
          background-color: #f9f9f9;
        }
        .booking-summary {
          background-color: #fff;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
          border-left: 4px solid #1a472a;
        }
        h1 {
          color: #fff;
          margin-top: 15px;
        }
        h2 {
          color: #1a472a;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }
        .footer {
          text-align: center;
          padding: 20px;
          font-size: 12px;
          color: #666;
          background-color: #f1f1f1;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #1a472a;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 15px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graceful_Poised_Logo-YiULpjwRsFmFFEuc9QRHX5jtSV3dbC.png" alt="Graceful and Poised" class="logo">
          <h1>Your Consultation Request</h1>
        </div>
        <div class="content">
          <p>Dear ${bookingData.firstName},</p>
          
          <p>Thank you for booking a consultation with Graceful & Poised!</p>
          
          <p>We have received your request for a consultation on <strong>${bookingData.preferredDate}</strong> (${formattedDay}) at <strong>${formattedTime}</strong>. Our team will review your request and contact you shortly to confirm your appointment.</p>
          
          <h2>Your Booking Summary</h2>
          <div class="booking-summary">
            <p><strong>Service of Interest:</strong> ${bookingData.service}</p>
            <p><strong>Preferred Date:</strong> ${bookingData.preferredDate}</p>
            <p><strong>Preferred Day:</strong> ${formattedDay}</p>
            <p><strong>Preferred Time:</strong> ${formattedTime}</p>
          </div>
          
          <p>If you have any questions before your consultation, please feel free to reply to this email or call us at +1 (404) 441-5346.</p>
          
          <p>We look forward to speaking with you!</p>
          
          <p>Warm regards,<br>
          The Graceful & Poised Team</p>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Graceful and Poised. All rights reserved.</p>
          <p>This email was sent to confirm your consultation booking request.</p>
          <p>Our address: Atlanta, GA</p>
        </div>
      </div>
    </body>
    </html>
    `

    console.log("Sending booking notification to info@gracefulandpoised.com")

    // Send email to company
    const { data: companyEmailData, error: companyEmailError } = await resend.emails.send({
      from: "onboarding@resend.dev", // Default sender during testing
      to: "info@gracefulandpoised.com",
      subject: `New Consultation Booking: ${bookingData.firstName} ${bookingData.lastName}`,
      html: companyEmailHtml,
    })

    if (companyEmailError) {
      console.error("Error sending company notification:", companyEmailError)
      throw new Error(`Failed to send company notification: ${companyEmailError.message}`)
    }

    console.log("Company notification sent successfully:", companyEmailData?.id)

    // Note: Client confirmation email is commented out until domain verification is complete
    // Once you verify your domain in Resend, you can uncomment this section
    /*
    console.log("Sending confirmation to client:", bookingData.email);
    
    // Send confirmation email to client
    const { data: clientEmailData, error: clientEmailError } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Update this with your verified domain email
      to: bookingData.email,
      subject: 'Your Consultation Request with Graceful & Poised',
      html: clientEmailHtml,
    });

    if (clientEmailError) {
      console.error("Error sending client confirmation:", clientEmailError);
      // Don't throw here, as we still want to return success if the company notification was sent
    } else {
      console.log("Client confirmation sent successfully:", clientEmailData?.id);
    }
    */

    return {
      success: true,
      message: "Booking submitted successfully! We'll contact you soon to confirm your consultation.",
    }
  } catch (error) {
    console.error("Error submitting booking form:", error)
    return {
      success: false,
      error: "Failed to submit booking form. Please try again later.",
    }
  }
}

// Test function to verify email sending works
export async function testBookingEmail() {
  try {
    const testHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Email from Booking Form</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #1a472a;
          padding: 20px;
          text-align: center;
        }
        .logo {
          width: 261px;
          height: 106px;
        }
        .content {
          padding: 20px;
          background-color: #f9f9f9;
        }
        h1 {
          color: #fff;
          margin-top: 15px;
        }
        .footer {
          text-align: center;
          padding: 20px;
          font-size: 12px;
          color: #666;
          background-color: #f1f1f1;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graceful_Poised_Logo-YiULpjwRsFmFFEuc9QRHX5jtSV3dbC.png" alt="Graceful and Poised" class="logo">
          <h1>Test Email from Booking Form</h1>
        </div>
        <div class="content">
          <p>This is a test email to verify that the booking form email functionality is working correctly.</p>
          <p>If you're seeing this, the email system is configured properly!</p>
          <p>Time sent: ${new Date().toLocaleString()}</p>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Graceful and Poised. All rights reserved.</p>
          <p>This is a test email sent from your website's booking form.</p>
        </div>
      </div>
    </body>
    </html>
    `

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@gracefulandpoised.com",
      subject: "Test Email from Booking Form",
      html: testHtml,
    })

    if (error) {
      console.error("Error sending test email:", error)
      return { success: false, error: String(error) }
    }

    console.log("Test email sent successfully:", data?.id)
    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error("Error in test email function:", error)
    return { success: false, error: String(error) }
  }
}
