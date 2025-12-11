import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import { CheckCircle, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DiplomaticProtocolPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-forest-green relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/diplomatic-protocol-1.png"
            alt="Diplomatic protocol event"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-antique-gold mb-6">Diplomatic Protocol</h1>
            <p className="text-xl text-sandstone mb-8">
              Flawless Protocol. Effortless Prestige. Influence That Leaves a Legacy.
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
                International events, high-profile meetings, and diplomatic functions are won or lost in the subtleties.
              </p>

              <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/images/diplomatic-protocol-2.jpg"
                  alt="International flags representing global diplomatic relations"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-forest-green/80 mb-6">Would you trust an executive, diplomat, or VIP guest who…</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">Fumbled through a high-stakes introduction?</p>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">Violated seating protocol at an official event?</p>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">Unknowingly offended a world leader with a simple misstep?</p>
                </div>
              </div>

              <p className="text-forest-green/80 mb-8 font-bold">
                These mistakes don't just cause embarrassment—they erode trust, damage relationships, and close doors
                forever.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Why Choose Us?</h2>
              <div className="elegant-divider"></div>

              <p className="text-forest-green/80 mb-8 text-center">
                At Graceful and Poised, we blend our expertise in diplomatic protocol, cultural intelligence, and event
                management to offer unparalleled training solutions. Our customized programs ensure your team is
                equipped to:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">Handle high-pressure situations with ease.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">Build strong relationships across cultures.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">Represent your organization with grace and authority.</p>
                </div>
              </div>
            </div>

            {/* Who We Serve */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Who We Serve</h2>
              <div className="elegant-divider"></div>

              <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/images/diplomatic-protocol-3.png"
                  alt="Diplomatic protocol clients"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 mt-10">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    <span className="font-bold">Government, and Diplomatic Leaders:</span> Elevate your leadership
                    presence and manage official events with precision.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    <span className="font-bold">Hospitality and Tourism Professionals:</span> Gain the skills to
                    seamlessly host international guests and delegations.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    <span className="font-bold">Administrative and Support Staff:</span> Develop expertise in protocol
                    and etiquette for official events and international business meetings.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    <span className="font-bold">Government Meeting Professionals and Special Event Teams:</span> Prepare
                    to host VIPs, international delegations, and distinguished guests with exceptional professionalism.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    <span className="font-bold">Non-profit and educational institutions</span> seeking to enhance their
                    global presence and protocol standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Our Services Include</h2>
              <div className="elegant-divider"></div>

              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-forest-green mb-4">1. Diplomatic Protocol Training</h3>
                  <p className="text-forest-green/80 mb-4">
                    Equip your team with a deep understanding of cultural norms, international customs, and diplomatic
                    etiquette. Learn the intricacies of:
                  </p>
                  <ul className="list-disc pl-5 text-forest-green/80 space-y-2">
                    <li>Addressing dignitaries and VIPs appropriately.</li>
                    <li>Seating arrangements and flag protocols.</li>
                    <li>Cross-cultural communication for effective collaboration.</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-forest-green mb-4">2. Hospitality and Tourism Training</h3>
                  <p className="text-forest-green/80 mb-4">
                    Deliver an elevated guest experience through specialized protocol and etiquette training. Topics
                    include:
                  </p>
                  <ul className="list-disc pl-5 text-forest-green/80 space-y-2">
                    <li>Hosting international guests with cultural sensitivity.</li>
                    <li>Managing diplomatic dining and entertainment.</li>
                    <li>Building strong relationships with global visitors.</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-forest-green mb-4">
                    3. Administrative and Support Staff Training
                  </h3>
                  <p className="text-forest-green/80 mb-4">
                    Empower your team to be the backbone of successful international engagements. Training includes:
                  </p>
                  <ul className="list-disc pl-5 text-forest-green/80 space-y-2">
                    <li>Effective preparation for official meetings.</li>
                    <li>Understanding and implementing event protocol.</li>
                    <li>Supporting dignitaries and executives with professionalism.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">
                How It Works: Our Protocol Excellence System
              </h2>
              <p className="text-forest-green/80 mb-8 text-center">
                We ensure that every aspect of your diplomatic engagement aligns with elite standards, global
                expectations, and high-stakes protocol.
              </p>

              <div className="space-y-8 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-antique-gold mb-4">
                    Phase 1: Protocol Mastery & Cultural Intelligence
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Understanding diplomatic hierarchies and international protocol standards
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Mastering cultural nuances and etiquette across different regions
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Developing sensitivity to international customs and traditions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-antique-gold mb-4">
                    Phase 2: Communication Excellence & Diplomatic Presence
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Crafting diplomatic language and communication that builds bridges
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Developing executive presence that commands respect in international settings
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Handling introductions, speeches, and formal interactions with poise
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-antique-gold mb-4">
                    Phase 3: Crisis Prevention & Diplomatic Problem Solving
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Navigating sensitive situations with diplomatic finesse</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Preventing protocol missteps that could damage international relationships
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Protecting your organization's reputation on the global stage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Success Stories</h2>
              <div className="elegant-divider"></div>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <p className="text-forest-green/80 italic mb-6">
                    "After working with Graceful and Poised, our administrative team is now fully prepared to handle
                    international delegations. The training was engaging, informative, and immediately impactful."
                  </p>
                  <p className="font-bold text-forest-green">— Government Executive</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <p className="text-forest-green/80 italic mb-6">
                    "The hospitality training transformed our team's approach to hosting VIPs. We've received glowing
                    feedback from international guests."
                  </p>
                  <p className="font-bold text-forest-green">— Luxury Hotel Manager</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-forest-green text-sandstone p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 text-center">
              <h2 className="text-2xl font-bold text-antique-gold mb-4">Ready to Elevate Your Team?</h2>
              <p className="text-sandstone mb-8">
                Exclusivity matters. We only work with select clients committed to executing world-class diplomatic
                protocol. Let's make your organization one of them.
              </p>
              <Button className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold text-lg px-8 py-6">
                <Link href="/booking">Apply for a Consultation Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
