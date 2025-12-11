"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Send } from "lucide-react"

export default function TestEmailPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const sendTestEmail = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
      })

      const data = await response.json()

      if (response.ok) {
        setResult({
          success: true,
          message: "Test email sent successfully! Check your inbox and spam folder.",
        })
      } else {
        setResult({
          success: false,
          message: data.error || "Failed to send test email. Check console for details.",
        })
      }
    } catch (error) {
      console.error("Error sending test email:", error)
      setResult({
        success: false,
        message: "An error occurred while sending the test email.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Email Testing Tool</CardTitle>
            <CardDescription>Use this tool to test the email functionality of your website.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              This will send a test email to engage@gracefulandpoised.com to verify that your email configuration is
              working correctly.
            </p>

            {result && (
              <Alert
                className={
                  result.success
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-red-50 border-red-200 text-red-800"
                }
              >
                {result.success ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-600" />
                )}
                <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
                <AlertDescription>{result.message}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button
              onClick={sendTestEmail}
              disabled={isLoading}
              className="w-full bg-forest-green hover:bg-forest-green/90 text-white"
            >
              {isLoading ? (
                <>
                  Sending... <span className="ml-2 animate-pulse">•••</span>
                </>
              ) : (
                <>
                  Send Test Email <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Troubleshooting Tips</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            <li>Make sure your RESEND_API_KEY environment variable is set correctly</li>
            <li>Check that you've verified your domain or email address in Resend</li>
            <li>Verify that the "from" email address is either verified or uses your verified domain</li>
            <li>Look for error messages in the server logs or browser console</li>
            <li>Check your spam folder if you don't see the test email</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
