import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CoachingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-forest-green relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/executive-coaching-1.png"
            alt="Executive coaching session"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-antique-gold mb-6">One-on-One Executive Coaching</h1>
            <p className="text-xl text-sandstone mb-8">
              Master the art of power, presence, and influence with personalized coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-sandstone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-forest-green/80 mb-10 text-center">
              Are you ready to unlock the next level of your professional journey? Whether you're a seasoned executive,
              a budding entrepreneur, or an ambitious professional, your presence, communication, and diplomacy can make
              or break opportunities.
            </p>

            <div className="bg-white p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">
                From Invisible to Influential: Master the Art of Power, Presence & Influence
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">Feel overlooked in high-stakes rooms?</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">Struggle to build trust and authority with the right people?</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    Know you're capable of more but feel like something is holding you back?
                  </p>
                </div>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/images/executive-coaching-2.png"
                  alt="Executive coaching in action"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-forest-green/80 mb-8">
                You're not alone. The difference between those who own the room and those who go unnoticed isn't just
                skill—it's presence, confidence, and the ability to navigate power dynamics like a seasoned leader.
              </p>

              <p className="text-forest-green/80 mb-8">
                In this elite 1-on-1 coaching program, you'll go from being just another professional to a highly
                respected, globally influential leader who commands attention and opportunities wherever you go. Our
                bespoke coaching provides:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    <span className="font-bold">A Tailor-Made Roadmap:</span> Your goals, challenges, and aspirations
                    are unique, and your coaching plan should be too. We'll craft a strategy designed specifically for
                    you.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    <span className="font-bold">Practical, Transferable Skills:</span> Learn frameworks and techniques
                    to adapt your communication, negotiation, and presence in real-time—no matter the situation or
                    market changes.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    <span className="font-bold">Competitive Distinction:</span> Develop skills that set you apart from
                    the competition, positioning you as a trusted authority in your field.
                  </p>
                </div>
              </div>
            </div>

            {/* What You'll Gain */}
            <div className="bg-forest-green text-sandstone p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 mb-16">
              <h2 className="text-2xl font-bold text-antique-gold mb-6 text-center">
                When you invest in yourself through this coaching program, you'll walk away with:
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sandstone">
                    The ability to walk into any room and immediately command respect and authority
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sandstone">
                    The ability to know exactly how to communicate with high-profile decision-makers
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sandstone">
                    How to navigate interpersonal dynamics and build trust with anyone, anywhere
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sandstone">How to exude power, confidence, and sophistication—effortlessly</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sandstone">A refined, consistent, and authentic personal brand</p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">
                How It Works: A Proven Process for Executive Mastery
              </h2>
              <p className="text-forest-green/80 mb-8 text-center">
                This isn't just mindset coaching—it's a strategic transformation designed to position you as a
                high-level player in your field.
              </p>

              <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/images/executive-coaching-3.jpg"
                  alt="Diverse professionals engaged in an executive coaching session in a modern conference room"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-antique-gold mb-4">Phase 1: Executive Presence & Influence</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Develop an aura of effortless confidence</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Control body language, tone, and presence to command any room
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Avoid common missteps that cost professionals credibility</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-antique-gold mb-4">
                    Phase 2: The Power of Soft Influence & Relationship Management
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Learn how the world's most powerful people gain access and trust
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Master networking strategies that open exclusive doors</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Position yourself as an industry authority</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-antique-gold mb-4">
                    Phase 3: Business Etiquette & Cultural Intelligence
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Understand how business, power, and respect function in different settings
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Navigate high-level negotiations, formal meetings, and business events with ease
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Ensure you never lose opportunities due to protocol missteps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">
                Success Stories from Our Clients
              </h2>
              <div className="elegant-divider"></div>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <p className="text-forest-green/80 italic mb-6">
                    "The coaching sessions completely changed how I show up in professional settings. Within months, I
                    received a promotion and was invited to represent my company at an international conference."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/images/testimonial-1.jpg"
                        alt="Sarah L."
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-forest-green">Sarah L.</p>
                      <p className="text-sm text-forest-green/70">Senior Manager</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <p className="text-forest-green/80 italic mb-6">
                    "I used to struggle with building genuine connections, but the frameworks and techniques I learned
                    helped me strengthen client relationships. My business revenue has doubled in the past year!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/images/testimonial-2.jpg"
                        alt="Michael T."
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-forest-green">Michael T.</p>
                      <p className="text-sm text-forest-green/70">Entrepreneur</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <p className="text-forest-green/80 italic mb-6">
                    "This program taught me how to refine my personal brand and confidently lead my team. The strategies
                    are practical and have had a lasting impact on my career trajectory."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/images/testimonial-3.jpg"
                        alt="Priya K."
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-forest-green">Priya K.</p>
                      <p className="text-sm text-forest-green/70">Director of Operations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <p className="text-forest-green/80 italic mb-6">
                    "I've gained unshakable confidence in high-stakes negotiations and boardroom presentations. I now
                    feel equipped to handle any professional challenge with grace."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/images/testimonial-4.jpg"
                        alt="James R."
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-forest-green">James R.</p>
                      <p className="text-sm text-forest-green/70">Executive Leader</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-forest-green text-sandstone p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 text-center">
              <h2 className="text-2xl font-bold text-antique-gold mb-4">Take Action Today</h2>
              <p className="text-sandstone mb-6">
                Your future is too important to leave to chance. Investing in your executive presence and personal
                diplomacy isn't just about career advancement—it's about creating opportunities, cultivating meaningful
                connections, and living with purpose.
              </p>
              <p className="text-sandstone mb-8">
                Don't spend months and years trying to figure it out and, in the process, lose one of your most valuable
                resources which is time.
              </p>
              <Button className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold text-lg px-8 py-6">
                <Link href="/booking">Schedule a Complimentary Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
