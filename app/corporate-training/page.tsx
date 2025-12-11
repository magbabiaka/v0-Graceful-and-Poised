import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import { CheckCircle, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CorporateTrainingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-forest-green relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/corporate-training-1.png"
            alt="Corporate training session"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-antique-gold mb-6">Corporate Training Solutions</h1>
            <p className="text-xl text-sandstone mb-8">
              Transform your organization with expert-led protocol and leadership training.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-sandstone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">
                From Internal Chaos to a Cohesive, Globally Respected Organization
              </h2>

              <p className="text-forest-green/80 mb-8">Does your leadership team struggle with…</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">Inconsistent executive presence across leadership ranks?</p>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    Communication breakdowns that cause lost deals and internal conflicts?
                  </p>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-forest-green/80">
                    Navigating the complexities of international business etiquette and protocol?
                  </p>
                </div>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/images/corporate-training-2.png"
                  alt="Corporate training workshop"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-forest-green/10 p-6 rounded-lg mb-8">
                <p className="text-forest-green text-center">
                  You're not alone. 67% of business failures in global markets stem from cultural misunderstandings and
                  weak executive communication skills.
                </p>
                <p className="text-antique-gold font-bold text-center mt-4">
                  Your competitors are sharpening their edge—so should you.
                </p>
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Our Training Services</h2>
              <div className="elegant-divider"></div>

              <div className="grid gap-8 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-forest-green mb-4">
                    1. The Emotionally Intelligent Enterprise Initiative™
                  </h3>
                  <p className="text-forest-green/80">
                    A high-authority consulting partnership that re-engineers the emotional systems driving trust,
                    collaboration, and performance. A structured, four-part engagement designed to diagnose emotional
                    risks, upgrade leadership capability, and build systems that embed trust and psychological safety
                    into everyday operations.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-forest-green mb-4">
                    2. Intercultural Etiquette and Professional Communications
                  </h3>
                  <p className="text-forest-green/80">
                    Equip government and business leaders with the tools to navigate international interactions,
                    intercultural protocols, and cultural nuances with ease and professionalism.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-forest-green mb-4">
                    3. Personal Diplomacy and Leadership for Emerging Professionals
                  </h3>
                  <p className="text-forest-green/80">
                    Support emerging leaders with training that emphasizes professional presence, personal diplomacy,
                    and business etiquette to prepare them for high-stakes environments.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-forest-green mb-4">
                    4. Strategic Trust & Influence Consulting for Organizations
                  </h3>
                  <p className="text-forest-green/80">
                    Ensuring corporations, luxury brands, and multinational firms eliminate cultural friction, avoid
                    reputational risks, and strengthen global partnerships.
                  </p>
                </div>
              </div>
            </div>

            {/* Why We're Different */}
            <div className="bg-forest-green text-sandstone p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 mb-16">
              <h2 className="text-2xl font-bold text-antique-gold mb-6 text-center">
                Why Most Corporate Training Fails (And How We're Different)
              </h2>

              <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/images/corporate-training-3.jpg"
                  alt="Diverse business professionals in a strategic meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-deep-navy/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-rich-gold font-bold text-2xl text-center px-4">
                    The Solution? Train your leaders in what REALLY moves the needle
                  </p>
                </div>
              </div>

              <p className="text-antique-gold font-bold mb-4">
                The Alternative? Investing in Weak Training That Yields No Real ROI.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sandstone">
                    Generic training programs teach surface-level leadership—that fail to address Underlying Emotional
                    Drivers that Convert human energy into enterprise value.
                  </p>
                </div>
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sandstone">
                    Treating symptoms with programs, processes and trainings that overlook the invisible systems of
                    trust, stability, and influence that hold performance together when structures are unstable.
                  </p>
                </div>
              </div>

              <p className="text-antique-gold font-bold mb-4">
                The Solution? Train your leaders in what REALLY moves the needle—executive power, cultural fluency, and
                high-level influence.
              </p>

              <p className="text-sandstone mb-4">We Provide:</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sandstone">
                    <span className="font-bold">Tailored Solutions:</span> Every training program is customized to align
                    with your organization's goals, industry, and audience.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sandstone">
                    <span className="font-bold">Global Expertise:</span> With our expertise in international business
                    protocol, cultural intelligence, and diplomatic relations, our training prepares your team for
                    success in any cultural or business context.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sandstone">
                    <span className="font-bold">Impact-Driven Outcomes:</span> Our training equips participants with
                    actionable insights, proactive problem solving and tools they can immediately apply to enhance their
                    leadership, communication, and professional presence.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-antique-gold/30">
                <p className="text-sandstone mb-4 italic">
                  This is high-end leadership development for organizations that understand one truth:
                </p>
                <p className="text-antique-gold font-bold text-xl mb-6 text-center">
                  Competitive advantage is psychological before it is operational.
                </p>
                <p className="text-sandstone">
                  Using proprietary frameworks such as the{" "}
                  <span className="font-bold text-antique-gold">Soft Power Ladder™</span>,{" "}
                  <span className="font-bold text-antique-gold">Presence Design™</span>, and the{" "}
                  <span className="font-bold text-antique-gold">Psychological Balance Sheet™</span>, to help leaders
                  strengthen trust, elevate authority, and accelerate execution.
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Client Transformations</h2>
              <div className="elegant-divider"></div>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <p className="text-forest-green/80 italic mb-6">
                    "Graceful and Poised completely transformed our leadership team. After their training on emotional
                    intelligence and intercultural communication, we saw a 35% improvement in collaboration and stronger
                    relationships with international partners."
                  </p>
                  <p className="font-bold text-forest-green">— Senior Executive, Global Corporation</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <p className="text-forest-green/80 italic mb-6">
                    "The DEI initiatives training was a game-changer for us. Within six months, our employee
                    satisfaction scores increased by 25%, and our leadership team received industry recognition for
                    inclusive practices."
                  </p>
                  <p className="font-bold text-forest-green">— HR Director, Tech Company</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <p className="text-forest-green/80 italic mb-6">
                    "As an emerging leader, I gained the confidence and skills to lead high-stakes initiatives. The
                    program's focus on professional presence and personal diplomacy has been invaluable."
                  </p>
                  <p className="font-bold text-forest-green">— Program Manager, Nonprofit Organization</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1">
                  <p className="text-forest-green/80 italic mb-6">
                    "The executive presence coaching exceeded my expectations. Not only did I secure a promotion, but I
                    also gained the tools to inspire and influence my team effectively."
                  </p>
                  <p className="font-bold text-forest-green">— Executive, Financial Sector</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-forest-green text-sandstone p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300 transform hover:-translate-y-1 text-center">
              <h2 className="text-2xl font-bold text-antique-gold mb-4">Transform Your Organization Today</h2>
              <p className="text-sandstone mb-6">
                Invest in your team's growth and your organization's success with Graceful and Poised. Our training
                programs empower leaders, strengthen teams, and cultivate a culture of excellence.
              </p>
              <h3 className="text-xl font-bold text-antique-gold mb-4">Contact Us Now</h3>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-antique-gold text-antique-gold hover:bg-forest-green-light font-bold text-lg px-8 py-6 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
              <p className="text-sandstone mb-8">
                Ready to elevate your organization's potential? Let's craft a customized training program that meets
                your needs.
              </p>
              <Button className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold text-lg px-8 py-6">
                <Link href="/booking">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
