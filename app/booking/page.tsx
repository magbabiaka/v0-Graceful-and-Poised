"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import { Calendar, Clock, CheckCircle } from "lucide-react"
import { submitBookingForm } from "@/app/actions/booking-actions"

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    try {
      const formData = new FormData(event.currentTarget)
      const result = await submitBookingForm(formData)

      if (result.success) {
        // Reset the form before changing state
        if (formRef.current) {
          formRef.current.reset()
        }
        setFormSubmitted(true)
      } else {
        setFormError(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormError("An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Book Your Consultation</h1>
            <p className="text-xl text-primary-foreground mb-8">
              Take the first step toward elevating your professional presence and leadership skills.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Booking Information */}
            <div>
              <div className="bg-card p-8 rounded-lg shadow-elegant mb-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Why Book a Consultation?</h2>
                <p className="text-muted-foreground mb-6">
                  Our complimentary 30-minute consultation is designed to understand your specific needs and goals.
                  During this session, we'll:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Discuss your current challenges and aspirations</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Identify areas where our expertise can help you excel</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Outline potential strategies and solutions tailored to your needs
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Answer any questions you have about our services and approach
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  There's no obligation, and you'll walk away with valuable insights regardless of whether you choose to
                  work with us.
                </p>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg shadow-elegant">
                <h2 className="text-2xl font-bold text-secondary mb-6">What to Expect</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-secondary/20 p-2 rounded-full mr-4 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg">Scheduling</h3>
                      <p className="text-muted">
                        After submitting your booking request, you'll receive a confirmation email with the date and
                        time of your consultation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary/20 p-2 rounded-full mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg">Duration</h3>
                      <p className="text-muted">
                        Your complimentary consultation will last approximately 30 minutes, giving us enough time to
                        understand your needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary/20 p-2 rounded-full mr-4 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg">Follow-Up</h3>
                      <p className="text-muted">
                        After your consultation, we'll send you a personalized proposal outlining our recommended
                        services and next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Book Your Free Consultation</h2>
              <p className="text-muted-foreground mb-8">
                Please fill out the form below to schedule your complimentary 30-minute consultation.
              </p>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Booking Request Submitted!</h3>
                  <p className="text-green-700 mb-6">
                    Thank you for scheduling a consultation with us. We'll contact you shortly to confirm your
                    appointment.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)} className="bg-navy hover:bg-navy-light text-ivory">
                    Book Another Consultation
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-card-foreground">
                        First Name*
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="border-input focus:border-accent focus:ring-accent"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-card-foreground">
                        Last Name*
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="border-input focus:border-accent focus:ring-accent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                        Email Address*
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-input focus:border-accent focus:ring-accent"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                        Phone Number*
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="border-input focus:border-accent focus:ring-accent"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-card-foreground">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Enter your company or organization"
                      className="border-input focus:border-accent focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-card-foreground">
                      Service of Interest*
                    </label>
                    <Select name="service" defaultValue="one-on-one-coaching">
                      <SelectTrigger className="border-input focus:border-accent focus:ring-accent">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-on-one-coaching">One-on-One Coaching</SelectItem>
                        <SelectItem value="corporate-training">Corporate Training</SelectItem>
                        <SelectItem value="diplomatic-protocol">Diplomatic Protocol</SelectItem>
                        <SelectItem value="vip-events">VIP Events</SelectItem>
                        <SelectItem value="own-the-room">Own the Room</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="preferredDate" className="text-sm font-medium text-card-foreground">
                        Preferred Date*
                      </label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        className="border-input focus:border-accent focus:ring-accent"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="preferredDay" className="text-sm font-medium text-card-foreground">
                        Preferred Day*
                      </label>
                      <Select name="preferredDay" defaultValue="monday">
                        <SelectTrigger className="border-input focus:border-accent focus:ring-accent">
                          <SelectValue placeholder="Select a day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monday">Monday</SelectItem>
                          <SelectItem value="tuesday">Tuesday</SelectItem>
                          <SelectItem value="wednesday">Wednesday</SelectItem>
                          <SelectItem value="thursday">Thursday</SelectItem>
                          <SelectItem value="friday">Friday</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="preferredTime" className="text-sm font-medium text-card-foreground">
                      Preferred Time Slot*
                    </label>
                    <Select name="preferredTime" defaultValue="9am">
                      <SelectTrigger className="border-input focus:border-accent focus:ring-accent">
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM</SelectItem>
                        <SelectItem value="12pm">12:00 PM</SelectItem>
                        <SelectItem value="1pm">1:00 PM</SelectItem>
                        <SelectItem value="2pm">2:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM</SelectItem>
                        <SelectItem value="4pm">4:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                      What specific challenges or goals would you like to discuss?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please share any specific topics or questions you'd like to address during the consultation"
                      className="border-input focus:border-accent focus:ring-accent min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="referral" className="text-sm font-medium text-card-foreground">
                      How did you hear about us?
                    </label>
                    <Input
                      id="referral"
                      name="referral"
                      placeholder="Friend, social media, search engine, etc."
                      className="border-input focus:border-accent focus:ring-accent"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      className="mt-1 border-input focus:ring-accent text-accent"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <a href="/privacy-policy" className="text-accent hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to being contacted about my booking request.
                    </label>
                  </div>

                  {formError && <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">{formError}</div>}

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        Submitting... <span className="ml-2 animate-pulse">•••</span>
                      </>
                    ) : (
                      <>
                        Book My Consultation <Calendar className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">What Our Clients Say</h2>
          <div className="elegant-divider mb-10"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-lg shadow-elegant">
              <p className="text-muted-foreground italic mb-6">
                "The initial consultation was incredibly valuable. They took the time to understand my specific
                challenges and provided actionable insights right from the start."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/images/testimonial-2.jpg" alt="Client" width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CEO, Global Enterprises</p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg shadow-elegant">
              <p className="text-muted-foreground italic mb-6">
                "I was hesitant at first, but the free consultation convinced me of their expertise. They outlined a
                clear path forward that aligned perfectly with my leadership goals."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/images/testimonial-1.jpg" alt="Client" width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Director of International Relations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
