import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function OwnTheRoomPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-forest-green">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-antique-gold mb-6">
              Own The Room: Mastering Professional Excellence
            </h1>
            <div className="relative mt-8 h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/own-the-room.jpg"
                alt="Professional speaking in a meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-forest-green/50"></div>
            </div>
            <p className="text-xl text-sandstone mb-8 mt-8">
              Command authority, project confidence, and exude charisma in high-stakes business environments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-sandstone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Program Overview */}
            <div className="bg-white p-10 rounded-lg shadow-elegant mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Program Overview</h2>
              <div className="elegant-divider mb-8"></div>

              <p className="text-forest-green/80 mb-8">
                "Own The Room" is a comprehensive, hands-on course designed to equip executives and professionals with
                the skills to project authority, confidence, and charisma in high-stakes business environments.
                Participants will develop essential competencies in executive presence, business protocol,
                communication, emotional intelligence, and social acumen to become influential leaders capable of
                navigating global business challenges.
              </p>

              <div className="bg-forest-green-light/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-forest-green mb-4">Target Audience:</h3>
                <p className="text-forest-green/80">
                  Executives, entrepreneurs, mid-to-senior level professionals, and emerging leaders who want to enhance
                  their executive presence, communication, and social influence.
                </p>
              </div>

              <div className="flex justify-center">
                <Link href="/contact">
                  <Button className="bg-forest-green hover:bg-forest-green-light text-sandstone">
                    Request Program Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Program Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Program Benefits</h2>
              <div className="elegant-divider mb-8"></div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-elegant">
                  <h3 className="text-xl font-bold text-forest-green mb-4">Develop Executive Presence</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Master the art of commanding attention when you enter a room
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Develop a powerful personal brand that exudes credibility</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Learn to project confidence even in intimidating situations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-elegant">
                  <h3 className="text-xl font-bold text-forest-green mb-4">Enhance Communication Skills</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Craft compelling messages that resonate with any audience</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Develop active listening skills that build trust and rapport
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Master non-verbal communication cues that reinforce your message
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-elegant">
                  <h3 className="text-xl font-bold text-forest-green mb-4">Master Business Protocol</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Navigate complex business and social situations with ease</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Understand cultural nuances in international business settings
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Learn proper etiquette for high-level meetings and events</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-elegant">
                  <h3 className="text-xl font-bold text-forest-green mb-4">Build Emotional Intelligence</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Develop self-awareness and emotional regulation skills</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">Read and respond to others' emotional cues effectively</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-antique-gold mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-forest-green/80">
                        Navigate difficult conversations and negotiations with empathy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Structure */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Program Structure</h2>
              <div className="elegant-divider mb-8"></div>

              <div className="bg-forest-green text-sandstone p-8 rounded-lg shadow-elegant mb-8">
                <h3 className="text-xl font-bold text-antique-gold mb-6">Comprehensive Curriculum</h3>
                <p className="text-sandstone/80 mb-4">
                  Our program is delivered through a combination of interactive workshops, personalized coaching, and
                  practical exercises designed to transform your professional presence.
                </p>

                <div className="space-y-6 mt-8">
                  <div>
                    <h4 className="font-bold text-antique-gold mb-2">
                      Module 1: The Foundations of Executive Presence
                    </h4>
                    <p className="text-sandstone/80">
                      Understanding the components of presence and how they impact perception and influence.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-antique-gold mb-2">Module 2: Strategic Communication & Influence</h4>
                    <p className="text-sandstone/80">
                      Mastering verbal and non-verbal communication to enhance your impact and persuasiveness.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-antique-gold mb-2">
                      Module 3: Business Protocol & Social Intelligence
                    </h4>
                    <p className="text-sandstone/80">
                      Navigating professional settings with confidence, from networking events to boardroom
                      presentations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-antique-gold mb-2">Module 4: Personal Brand Development</h4>
                    <p className="text-sandstone/80">
                      Crafting and maintaining a consistent, authentic personal brand that aligns with your goals.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-antique-gold mb-2">Module 5: Advanced Leadership Presence</h4>
                    <p className="text-sandstone/80">
                      Integrating all elements to establish yourself as a confident, credible, and charismatic leader.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-elegant text-center">
                  <h3 className="text-lg font-bold text-forest-green mb-3">Duration</h3>
                  <p className="text-forest-green/80">
                    Intensive 2-day workshop or flexible 6-week program with weekly sessions
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-elegant text-center">
                  <h3 className="text-lg font-bold text-forest-green mb-3">Format</h3>
                  <p className="text-forest-green/80">
                    Available in-person or virtual to accommodate your schedule and preferences
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-elegant text-center">
                  <h3 className="text-lg font-bold text-forest-green mb-3">Group Size</h3>
                  <p className="text-forest-green/80">
                    Limited to 12 participants to ensure personalized attention and feedback
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-forest-green mb-6 text-center">Success Stories</h2>
              <div className="elegant-divider mb-8"></div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-elegant">
                  <p className="text-forest-green/80 italic mb-6">
                    "This program completely transformed how I present myself in professional settings. I've received
                    multiple comments about my enhanced confidence and leadership presence since completing the course."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/images/testimonial-3.jpg"
                        alt="Client"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-forest-green">Alexandra Rivera</p>
                      <p className="text-sm text-forest-green/80">Senior Director, Fortune 500 Company</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-elegant">
                  <p className="text-forest-green/80 italic mb-6">
                    "The skills I gained from 'Own The Room' have been invaluable. I now walk into high-stakes meetings
                    with complete confidence, knowing I can effectively communicate my ideas and influence decisions."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/images/testimonial-2.jpg"
                        alt="Client"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-forest-green">Michael Chen</p>
                      <p className="text-sm text-forest-green/80">VP of Operations, Tech Industry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-forest-green text-sandstone p-10 rounded-lg shadow-elegant text-center">
              <h2 className="text-2xl font-bold text-antique-gold mb-4">Ready to Own Every Room You Enter?</h2>
              <p className="text-sandstone mb-8">
                Take the first step toward transforming your professional presence and unlocking new opportunities in
                your career.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Button
                  asChild
                  className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold text-lg px-8 py-6"
                >
                  <Link href="/booking">Register for the Program</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-antique-gold text-antique-gold hover:bg-forest-green-light font-bold text-lg px-8 py-6"
                >
                  <Link href="/contact">Request More Information</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
