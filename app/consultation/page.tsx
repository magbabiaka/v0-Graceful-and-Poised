"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { CheckCircle, Star, Users, Globe, Award } from "lucide-react"

export default function ConsultationPage() {
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
      <section className="pt-32 pb-20 bg-deep-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rich-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rich-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-rich-gold text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in">
              Complimentary Strategy Session
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-soft-cream mb-6 animate-slide-up">
              Book Your Free{" "}
              <span className="text-rich-gold">Consultation</span>
            </h1>
            <p className="text-xl text-soft-cream/80 mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-100">
              Take the first step toward transforming your leadership presence and unlocking your full potential.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 animate-slide-up animate-delay-200">
              <div className="flex items-center gap-2 text-soft-cream/70">
                <Star className="h-5 w-5 text-rich-gold" />
                <span className="text-sm">500+ Leaders Transformed</span>
              </div>
              <div className="flex items-center gap-2 text-soft-cream/70">
                <Globe className="h-5 w-5 text-rich-gold" />
                <span className="text-sm">Global Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-soft-cream/70">
                <Award className="h-5 w-5 text-rich-gold" />
                <span className="text-sm">Certified Protocol Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            
            {/* Left Column - Benefits */}
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Gain */}
              <div className="bg-white p-8 rounded-2xl shadow-elegant">
                <h2 className="text-2xl font-bold text-deep-navy mb-6">
                  What You&apos;ll Gain
                </h2>
                <div className="space-y-5">
                  {[
                    "Personalized assessment of your leadership presence",
                    "Actionable strategies tailored to your goals",
                    "Insights into elevating your professional brand",
                    "Clear roadmap for your transformation journey",
                    "Expert guidance on protocol and influence"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rich-gold/10 flex items-center justify-center mt-0.5">
                        <CheckCircle className="h-4 w-4 text-rich-gold" />
                      </div>
                      <p className="text-deep-navy-light">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Doreen */}
              <div className="bg-deep-navy p-8 rounded-2xl shadow-elegant">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rich-gold">
                    <Image
                      src="/images/doreen-portrait.jpg"
                      alt="Doreen Agbabiaka"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-soft-cream">Doreen Agbabiaka</h3>
                    <p className="text-rich-gold text-sm">Founder, Graceful & Poised</p>
                  </div>
                </div>
                <p className="text-soft-cream/80 text-sm leading-relaxed">
                  With expertise in international business protocol, cultural intelligence, and diplomatic relations, 
                  Doreen has helped hundreds of executives and leaders elevate their presence and influence on the global stage.
                </p>
              </div>

              {/* Social Proof */}
              <div className="bg-white p-6 rounded-2xl shadow-elegant">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image src="/images/testimonial-1.jpg" alt="Client" width={40} height={40} className="object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image src="/images/testimonial-2.jpg" alt="Client" width={40} height={40} className="object-cover" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image src="/images/testimonial-3.jpg" alt="Client" width={40} height={40} className="object-cover" />
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-rich-gold text-rich-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-deep-navy-light text-sm italic">
                  &quot;The consultation exceeded my expectations. Doreen&apos;s insights were transformative.&quot;
                </p>
                <p className="text-deep-navy font-semibold text-sm mt-2">— Executive, Fortune 500</p>
              </div>
            </div>

            {/* Right Column - Calendly Embed */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-elegant overflow-hidden">
                <div className="bg-deep-navy px-8 py-6">
                  <h2 className="text-2xl font-bold text-soft-cream mb-2">
                    Schedule Your Free Session
                  </h2>
                  <p className="text-soft-cream/70 text-sm">
                    Select a time that works best for you. All consultations are conducted via video call.
                  </p>
                </div>
                
                {/* Calendly Inline Widget */}
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/engage-gracefulandpoised/speaker-inquiry-call?hide_gdpr_banner=1&primary_color=d4af37"
                  style={{ minWidth: "320px", height: "700px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-deep-navy text-center mb-4">
            Frequently Asked Questions
          </h2>
          <div className="elegant-divider mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long is the consultation?",
                answer: "The complimentary consultation typically lasts 30 minutes, giving us enough time to understand your needs and outline potential strategies."
              },
              {
                question: "Is there any obligation?",
                answer: "Absolutely not. This is a no-pressure conversation to explore how we might help you achieve your goals."
              },
              {
                question: "How is the consultation conducted?",
                answer: "All consultations are conducted via secure video call, making it convenient for you regardless of your location."
              },
              {
                question: "What should I prepare?",
                answer: "Come with an open mind and think about your current challenges and goals. We'll guide the conversation from there."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-soft-cream rounded-xl">
                <h3 className="font-bold text-deep-navy mb-2">{faq.question}</h3>
                <p className="text-deep-navy-light text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-navy">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Users className="h-12 w-12 text-rich-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-soft-cream mb-4">
            Join 500+ Leaders Who&apos;ve Transformed Their Presence
          </h2>
          <p className="text-soft-cream/70 mb-8">
            Your journey to becoming a more influential and impactful leader starts with a single conversation.
          </p>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="inline-block bg-rich-gold hover:bg-rich-gold-light text-deep-navy font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Free Consultation Now
          </a>
        </div>
      </section>
    </div>
  )
}
