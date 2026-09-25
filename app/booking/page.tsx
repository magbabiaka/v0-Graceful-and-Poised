"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { CheckCircle, Calendar, Clock, Users, Star, Shield } from "lucide-react"

export default function BookingPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-medium tracking-wider uppercase mb-4">Start Your Transformation</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Take the first step toward elevating your professional presence, leadership impact, and strategic influence.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>30-Minute Call</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-secondary" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-secondary" />
                <span>Personalized Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left Column - Benefits */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why Book Section */}
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Why Book a Consultation?</h2>
                <p className="text-muted-foreground mb-6">
                  This complimentary 30-minute session is designed to understand your unique needs and explore how we can help you achieve your goals.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/20 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <p className="text-muted-foreground">Discuss your current challenges and aspirations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/20 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <p className="text-muted-foreground">Identify areas where our expertise can help you excel</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/20 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <p className="text-muted-foreground">Receive tailored strategies and actionable insights</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/20 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <p className="text-muted-foreground">Get answers to all your questions about our approach</p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-elegant">
                <h2 className="text-2xl font-bold text-secondary mb-6">What to Expect</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-2.5 rounded-full flex-shrink-0">
                      <Calendar className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg mb-1">Instant Confirmation</h3>
                      <p className="text-primary-foreground/70 text-sm">
                        Select your preferred time and receive immediate calendar confirmation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-2.5 rounded-full flex-shrink-0">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg mb-1">30-Minute Session</h3>
                      <p className="text-primary-foreground/70 text-sm">
                        Focused conversation to understand your goals and explore solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-2.5 rounded-full flex-shrink-0">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-lg mb-1">Personalized Follow-Up</h3>
                      <p className="text-primary-foreground/70 text-sm">
                        Receive a customized proposal outlining recommended next steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Doreen */}
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary">
                    <Image
                      src="/images/doreen-portrait.jpg"
                      alt="Doreen Agbabiaka"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground">Doreen Agbabiaka</h3>
                    <p className="text-sm text-muted-foreground">Founder, Graceful & Poised</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  With expertise in executive coaching, diplomatic protocol, and leadership development, Doreen has helped 
                  hundreds of professionals and organizations elevate their presence and influence on the global stage.
                </p>
              </div>
            </div>

            {/* Right Column - Calendly Embed */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl shadow-elegant overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="text-2xl font-bold text-card-foreground">Select Your Preferred Time</h2>
                  <p className="text-muted-foreground mt-2">Choose a time that works best for your schedule.</p>
                </div>
                
                {/* Calendly Inline Widget */}
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/engage-gracefulandpoised/speaker-inquiry-call?hide_gdpr_banner=1&primary_color=b8860b"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-2xl shadow-elegant">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">
                "The initial consultation was incredibly valuable. They took the time to understand my specific
                challenges and provided actionable insights right from the start. I knew immediately this was the
                right partnership for my leadership journey."
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

            <div className="bg-muted p-8 rounded-2xl shadow-elegant">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">
                "I was hesitant at first, but the free consultation convinced me of their expertise. They outlined a
                clear path forward that aligned perfectly with my leadership goals. The transformation has been
                remarkable."
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

      {/* Trust Indicators */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-primary-foreground/70">
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">500+</p>
              <p className="text-sm">Leaders Coached</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">50+</p>
              <p className="text-sm">Corporate Partners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">25+</p>
              <p className="text-sm">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">98%</p>
              <p className="text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
