import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-forest-green">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-antique-gold mb-6">About Graceful & Poised</h1>
            <p className="text-xl text-sandstone mb-8">
              Empowering professionals worldwide to navigate complex business landscapes with confidence, grace, and
              diplomacy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-forest-green mb-6">Our Mission</h2>
              <p className="text-forest-green/80 mb-6">
                In today's high-stakes global business environment, success is not just about strategy and
                operations—it's about mastering the invisible skills of influence, trust, and leadership presence. At
                Graceful and Poised, we go beyond traditional etiquette and protocol to transform leaders into
                high-level influencers who command respect, build trust, and close deals with power and precision.
              </p>
              <p className="text-forest-green/80 mb-6">
                We equip professionals and organizations with expert-led, practical solutions that seamlessly integrate
                modern business protocol, emotional intelligence, diplomacy, and leadership best practices. Our holistic
                approach empowers leaders to stand out, communicate with impact, and navigate high-level business
                interactions with confidence and poise.
              </p>
            </div>
            <div>
              <Image
                src="/images/about-team.jpg"
                alt="Professional training session"
                width={800}
                height={600}
                className="rounded-lg shadow-elegant"
              />
            </div>
          </div>

          {/* Vision Statement */}
          <div className="bg-forest-green text-sandstone p-10 rounded-lg shadow-elegant mb-16">
            <h2 className="text-2xl font-bold text-antique-gold mb-4 text-center">Vision Statement</h2>
            <p className="text-xl text-center italic">
              "To empower professionals worldwide to navigate complex and diverse business landscapes with confidence,
              grace, and diplomacy, fostering a world driven by inclusion and refined leadership."
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Why Choose Graceful and Poised?</h2>
            <div className="elegant-divider"></div>
            <p className="text-xl text-forest-green/80 mb-8 text-center">
              We Don't Just Teach—We Transform Leaders and Organizations.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="bg-card p-8 rounded-lg shadow-elegant">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Strategic Advisory Approach</h3>
                <p className="text-muted-foreground">
                  We partner with you as trusted advisors to solve complex business challenges—not just as trainers.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elegant">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Business Outcome Focused</h3>
                <p className="text-muted-foreground">
                  Our programs are designed to increase market share, accelerate negotiations, and build stronger
                  leadership pipelines.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elegant">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Global Perspective, Local Expertise</h3>
                <p className="text-muted-foreground">
                  Our consultants bring a wealth of international experience, ensuring culturally relevant solutions for
                  every market.
                </p>
              </div>
            </div>
          </div>

          {/* Who We Help */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Who We Help</h2>
            <div className="elegant-divider"></div>

            <div className="space-y-6 mt-10">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                <p className="text-forest-green/80">
                  <span className="font-bold">C-Suite Executives, professionals & business Leaders</span> aiming to
                  amplify their executive presence and strategic influence on a global scale.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                <p className="text-forest-green/80">
                  <span className="font-bold">High-Performance Teams & Emerging Leaders</span> needing to master
                  cultural intelligence, relationship management, and executive power dynamics.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-antique-gold mr-3 mt-1 flex-shrink-0" />
                <p className="text-forest-green/80">
                  <span className="font-bold">
                    Luxury Brands, Corporations, hospitality, nonprofit and Diplomatic Organizations
                  </span>{" "}
                  seeking to build unshakable trust, avoid cultural missteps, and secure high-stakes deals worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-card p-10 rounded-lg shadow-elegant">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/founder-new.jpeg"
                  alt="Doreen Agbabiaka"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-elegant"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-forest-green mb-6">Meet Our Founder</h2>
                <h3 className="text-xl font-bold text-antique-gold mb-4">Doreen Agbabiaka</h3>
                <p className="text-forest-green/80 mb-6">
                  Certified International Business & Diplomatic Protocol Consultant, Image Strategist, and Leadership
                  Trainer. As the Founder & Principal of Graceful and Poised, she is passionate about helping
                  professionals, business leaders, and organizations navigate today's complex, global business landscape
                  with confidence, diplomacy, and cultural intelligence.
                </p>
                <p className="text-forest-green/80 mb-6">
                  With over a decade of experience in business image management, personal branding, and leadership
                  development, she brings a unique, international perspective—seamlessly blending time-honored protocol
                  with modern leadership principles. Her background in marketing and international business allows her
                  to tailor her approach to each client's specific goals, ensuring they project credibility, influence,
                  and executive presence.
                </p>
                <p className="text-forest-green/80">
                  She has had the privilege of working with universities and professionals worldwide. Through strategic
                  communication, business protocol, and emotional intelligence, her goal is to empowers individuals and
                  teams to earn, lead, and win in a diverse, evolving business world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-forest-green rounded-lg p-12 shadow-elegant text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-antique-gold mb-4">
              Ready to Transform Your Leadership?
            </h2>
            <p className="text-sandstone text-lg max-w-2xl mx-auto mb-8">
              Discover how Graceful and Poised can help you and your organization navigate the complexities of global
              business with confidence and sophistication.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold text-lg px-8 py-6">
                <Link href="/programs">Explore Our Programs</Link>
              </Button>
              <Button
                variant="outline"
                className="border-antique-gold text-antique-gold hover:bg-forest-green-light font-bold text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
