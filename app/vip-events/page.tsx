import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import { CheckCircle, XCircle } from "lucide-react"

export default function VIPEventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-forest-green relative">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/vip-events-1.png" alt="VIP event" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-antique-gold mb-6">
              VIP Event Consultation & Management
            </h1>
            <p className="text-xl text-sandstone mb-8 mt-8">
              Flawless Execution. Unmatched Prestige. Events That Command Respect.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-sandstone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 mb-16">
              <p className="text-forest-green/80 mb-8 text-center text-lg">
                Every VIP event is a statement. It's not just about logistics—it's about creating an aura of prestige,
                seamless execution, and effortless influence that reflects the status of your organization.
              </p>

              <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
                <Image src="/images/vip-events-2.png" alt="Luxury VIP event" fill className="object-cover" />
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">Hosting a high-profile diplomatic, corporate, or luxury event?</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    Need to impress international dignitaries, VIPs, and elite guests?
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    Worried about protocol missteps that could damage your reputation?
                  </p>
                </div>
              </div>

              <p className="text-forest-green/80 mb-8">
                One small misstep—a misplaced VIP, an overlooked cultural protocol, an unrefined guest experience—can
                unravel credibility, relationships, and even major deals.
              </p>
              <p className="text-forest-green font-bold text-center text-xl mb-8">
                But when done right? Your event becomes a power move.
              </p>
            </div>

            {/* The Transformation */}
            <div className="bg-forest-green text-sandstone p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 mb-16">
              <h2 className="text-2xl font-bold text-antique-gold mb-6 text-center">
                The Transformation: From Risky Oversights to Flawless, Prestige-Driven Events
              </h2>

              <div className="mb-8">
                <p className="text-antique-gold font-bold mb-4">Where You Are Now:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sandstone">
                      Concerned about protocol errors that could offend or embarrass high-profile guests
                    </p>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sandstone">
                      Struggling to create an event that truly reflects power, exclusivity, and influence
                    </p>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sandstone">
                      Uncertain about seating hierarchies, cultural expectations, and VIP engagement
                    </p>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sandstone">Worried that logistical issues will overshadow the event's success</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
                <Image src="/images/vip-events-3.png" alt="Elegant VIP event setup" fill className="object-cover" />
                <div className="absolute inset-0 bg-forest-green/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-antique-gold font-bold text-2xl text-center px-4">
                    Transform your events into powerful statements
                  </p>
                </div>
              </div>

              <div>
                <p className="text-antique-gold font-bold mb-4">Where You'll Be After Working With Us:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sandstone">
                      Hosting an event that exudes prestige, sophistication, and effortless power
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sandstone">
                      Every detail—from protocol to security to guest experience—is flawlessly executed
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sandstone">
                      Dignitaries, executives, and elite guests feel valued, respected, and impressed
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sandstone">
                      Your organization strengthens its reputation as a leader in global affairs and luxury experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">
                How It Works: Our VIP Event & Protocol Excellence System
              </h2>
              <p className="text-forest-green/80 mb-8 text-center">
                We ensure that every aspect of your event aligns with elite standards, global expectations, and
                high-stakes protocol.
              </p>

              <div className="space-y-8 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-antique-gold mb-4">
                    Phase 1: VIP Guest Management & Protocol Mastery
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Seating charts that respect diplomatic and corporate hierarchies
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        VIP arrivals, security, and red-carpet protocol—no missteps allowed
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Personalized guest experience that resonates with cultural expectations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-antique-gold mb-4">
                    Phase 2: Event Flow, Prestige, and Influence Design
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Crafting an event narrative that elevates brand status and prestige
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Timing, sequence, and movement coordination—ensuring flawless transitions
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Handling introductions, speeches, and VIP interactions with poise and strategy
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-antique-gold mb-4">
                    Phase 3: Crisis Prevention & Reputation Protection
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Contingency planning for last-minute protocol shifts</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Ensuring that nothing—from catering to decor to seating—diminishes the experience
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Protecting your organization's image, reputation, and relationships
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who This is For */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Who This is For</h2>
              <div className="elegant-divider"></div>

              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 text-center">
                  <h3 className="text-xl font-bold text-forest-green mb-4">Government & Diplomatic Leaders</h3>
                  <p className="text-forest-green/80">
                    Needing flawless state protocol execution for official functions and international relations.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 text-center">
                  <h3 className="text-xl font-bold text-forest-green mb-4">Luxury Brands & High-Net-Worth Events</h3>
                  <p className="text-forest-green/80">
                    That demand elevated guest experiences and impeccable attention to detail.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 text-center">
                  <h3 className="text-xl font-bold text-forest-green mb-4">Corporate & Global Organizations</h3>
                  <p className="text-forest-green/80">
                    Wanting to strengthen international relationships through elite event management.
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-forest-green text-sandstone p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 text-center">
              <h2 className="text-2xl font-bold text-antique-gold mb-4">Ready to Create an Unforgettable Event?</h2>
              <p className="text-sandstone mb-8">
                Exclusivity matters. We only work with select clients committed to executing world-class events. Let's
                make yours one of them.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold text-lg px-8 py-6">
                  <Link href="/booking">Apply for a Consultation</Link>
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-antique-gold text-antique-gold hover:bg-forest-green-light font-bold text-lg px-8 py-6"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
