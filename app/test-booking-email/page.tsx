"use client"

import { useState } from "react"
import { testBookingEmail } from "../actions/booking-actions"

export default function TestBookingEmail() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; messageId?: string; error?: string } | null>(null)

  const handleTestEmail = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await testBookingEmail()
      setResult(response)
    } catch (error) {
      setResult({ success: false, error: String(error) })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Test Booking Email Functionality</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">About This Page</h2>
        <p className="mb-4">
          This page allows you to test the email functionality for the booking form. When you click the button below, a
          test email will be sent to info@gracefulandpoised.com.
        </p>
        <p className="mb-4">This is useful for verifying that your email configuration is working correctly.</p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
          <p className="font-medium">Important Notes:</p>
          <ul className="list-disc ml-5 mt-2">
            <li>During testing with Resend's free tier, emails can only be sent to info@gracefulandpoised.com</li>
            <li>To send emails to clients, you need to verify your domain in Resend</li>
            <li>After domain verification, update the "from" address in the code to use your domain</li>
          </ul>
        </div>

        <button
          onClick={handleTestEmail}
          disabled={isLoading}
          className="bg-green-800 hover:bg-green-700 text-white font-medium py-2 px-4 rounded disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Send Test Email"}
        </button>
      </div>

      {result && (
        <div
          className={`p-4 rounded-md mb-6 ${result.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
        >
          <h3 className="font-semibold mb-2">{result.success ? "Success!" : "Error"}</h3>
          {result.success ? (
            <p>Test email sent successfully! Message ID: {result.messageId}</p>
          ) : (
            <div>
              <p className="mb-2">Failed to send test email:</p>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">{result.error}</pre>
            </div>
          )}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Troubleshooting</h2>
        <ul className="list-disc ml-5">
          <li className="mb-2">Check that your RESEND_API_KEY environment variable is set correctly</li>
          <li className="mb-2">Verify that you're not exceeding Resend's rate limits (100 emails/day on free tier)</li>
          <li className="mb-2">Check the console logs for detailed error messages</li>
          <li className="mb-2">
            For domain verification instructions, visit{" "}
            <a
              href="https://resend.com/domains"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resend Domains
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
