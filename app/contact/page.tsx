"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Clock, CheckCircle, Send } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { sendContactEmails } from "@/app/actions/email-actions"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const formRef = useRef(null)
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 })
  const contactInfoRef = useRef(null)
  const isContactInfoInView = useInView(contactInfoRef, { once: true, amount: 0.3 })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Get form data
    const form = e.currentTarget
    const formData = new FormData(form)

    const contactData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      subject: formData.get("subject") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    try {
      // Send emails
      await sendContactEmails(contactData)

      // Update UI state
      setFormSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      // You could add error handling UI here
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-forest-green relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-antique-gold/5 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-antique-gold/5 blur-xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-antique-gold mb-6">Contact Us</h1>
            <p className="text-xl text-sandstone mb-8">
              We're here to help you elevate your professional presence and leadership skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-sandstone relative">
        <div
          className="absolute top-0 left-0 w-full h-32 bg-forest-green"
          style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-forest-green mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-forest-green hover:bg-forest-green-light text-sandstone rounded-full"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-forest-green">
                        First Name*
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="border-gray-300 focus:border-antique-gold focus:ring-antique-gold rounded-lg py-6"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-forest-green">
                        Last Name*
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="border-gray-300 focus:border-antique-gold focus:ring-antique-gold rounded-lg py-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-forest-green">
                        Email Address*
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-gray-300 focus:border-antique-gold focus:ring-antique-gold rounded-lg py-6"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-forest-green">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-antique-gold focus:ring-antique-gold rounded-lg py-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-forest-green">
                      Subject*
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      className="border-gray-300 focus:border-antique-gold focus:ring-antique-gold rounded-lg py-6"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-forest-green">
                      Service of Interest*
                    </label>
                    <Select name="service">
                      <SelectTrigger className="border-gray-300 focus:border-antique-gold focus:ring-antique-gold rounded-lg py-6">
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

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-forest-green">
                      Message*
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your needs and how we can help"
                      className="border-gray-300 focus:border-antique-gold focus:ring-antique-gold min-h-[150px] rounded-lg"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 border-gray-300 focus:ring-antique-gold text-antique-gold rounded"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="/privacy-policy" className="text-antique-gold hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to having my data processed.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold py-6 rounded-full group"
                    disabled={formSubmitted}
                  >
                    {formSubmitted ? (
                      <>
                        Sending... <span className="ml-2 animate-pulse">•••</span>
                      </>
                    ) : (
                      <>
                        Send Message{" "}
                        <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              ref={contactInfoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isContactInfoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:mt-0"
            >
              <div className="relative h-[300px] mb-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/global-connection.png"
                  alt="Global professional connections without boundaries"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4 bg-forest-green/30 backdrop-blur-sm py-6 rounded-lg max-w-lg">
                    <h3 className="text-2xl font-bold text-white mb-2">Breaking Boundaries Globally</h3>
                    <p className="text-white/90 max-w-md">
                      Connecting professionals across continents with expertise that transcends geographical limitations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-forest-green mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-antique-gold/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-antique-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-green text-lg">Phone</h4>
                      <p className="text-gray-600">+1 (404) 441-5346</p>
                      <p className="text-gray-500 text-sm mt-1">Monday to Friday, 9am to 6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-antique-gold/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-antique-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-green text-lg">Email</h4>
                      <p className="text-gray-600">engage@gracefulandpoised.com</p>
                      <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-antique-gold/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-antique-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-green text-lg">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-600">Saturday: By appointment only</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-forest-green text-lg mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-antique-gold/10 p-3 rounded-full hover:bg-antique-gold/20 transition-colors"
                    >
                      <svg
                        className="h-6 w-6 text-antique-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-antique-gold/10 p-3 rounded-full hover:bg-antique-gold/20 transition-colors"
                    >
                      <svg
                        className="h-6 w-6 text-antique-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-antique-gold/10 p-3 rounded-full hover:bg-antique-gold/20 transition-colors"
                    >
                      <svg
                        className="h-6 w-6 text-antique-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-antique-gold/10 p-3 rounded-full hover:bg-antique-gold/20 transition-colors"
                    >
                      <svg
                        className="h-6 w-6 text-antique-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-forest-green mb-6">Our Location</h2>
            <div className="elegant-divider"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative h-[300px] mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/global-connection.png"
                alt="Global professional connections without boundaries"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 bg-forest-green/30 backdrop-blur-sm py-6 rounded-lg max-w-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">Breaking Boundaries Globally</h3>
                  <p className="text-white/90 max-w-md">
                    Connecting professionals across continents with expertise that transcends geographical limitations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
