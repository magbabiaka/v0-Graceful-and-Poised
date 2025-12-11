import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { ArrowRight } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6">Our Signature Programs</h1>
            <p className="text-xl text-ivory mb-8">
              Transformative training solutions designed to elevate your leadership presence and influence.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4">
          {/* Program 1 */}
          <div className="bg-white rounded-lg shadow-elegant mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <h2 className="text-2xl font-bold text-navy mb-4">Global Power & Influence Strategy</h2>
                <p className="text-gold font-medium mb-6">For Executives and Business Leaders</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Hidden Problem:</h3>
                  <p className="text-navy-light">
                    Most leaders don't realize their presence, communication style, and reputation management determine
                    their influence and credibility, especially in high-stakes, cross-cultural environments.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Transformation:</h3>
                  <p className="text-navy-light">
                    We teach leaders how to command rooms globally, embody authority, and adapt seamlessly to varying
                    cultural power dynamics—unlocking the invisible power that drives decision-making, trust, and
                    leadership impact.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Key Outcomes:</h3>
                  <ul className="list-disc pl-5 text-navy-light space-y-2">
                    <li>Master global executive presence to inspire loyalty and respect.</li>
                    <li>Increase influence and authority while staying true to your authentic leadership style.</li>
                    <li>Navigate complex power dynamics and cultural expectations with ease.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Who Should Attend:</h3>
                  <p className="text-navy-light">
                    Senior Executives, High-Potential Leaders, Diplomats, and Global Influencers.
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="bg-navy hover:bg-navy-light text-ivory">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative min-h-[300px] md:min-h-full">
                <Image
                  src="/images/leadership-program.jpg"
                  alt="Global Power & Influence Strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-white rounded-lg shadow-elegant mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[300px] md:min-h-full order-last md:order-first">
                <Image
                  src="/images/corporate-training.jpg"
                  alt="Strategic Trust & Influence Consulting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10">
                <h2 className="text-2xl font-bold text-navy mb-4">Strategic Trust & Influence Consulting</h2>
                <p className="text-gold font-medium mb-6">For Organizations and Teams</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Hidden Problem:</h3>
                  <p className="text-navy-light">
                    Companies struggle to build trust quickly in international negotiations, often losing deals due to
                    cultural misunderstandings and interpersonal friction.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Transformation:</h3>
                  <p className="text-navy-light">
                    We accelerate trust-building through refined etiquette, emotional intelligence, and cultural
                    competence—helping organizations secure multi-million-dollar deals faster and strengthen strategic
                    alliances.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Key Outcomes:</h3>
                  <ul className="list-disc pl-5 text-navy-light space-y-2">
                    <li>Build and maintain trust in high-stakes global negotiations.</li>
                    <li>Navigate complex stakeholder relationships with cultural fluency.</li>
                    <li>Create a competitive advantage through strategic influence and soft power.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Who Should Attend:</h3>
                  <p className="text-navy-light">
                    Global Sales Teams, Business Development Executives, International Relations Teams, and Senior
                    Leadership Teams.
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="bg-navy hover:bg-navy-light text-ivory">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-white rounded-lg shadow-elegant mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <h2 className="text-2xl font-bold text-navy mb-4">Crisis-Proof Leadership & Reputation Management</h2>
                <p className="text-gold font-medium mb-6">For CEOs and High-Profile Leaders</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Hidden Problem:</h3>
                  <p className="text-navy-light">
                    One cultural misstep or insensitive remark can lead to a PR disaster, costing millions in reputation
                    damage.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Transformation:</h3>
                  <p className="text-navy-light">
                    We provide advanced cultural intelligence training and crisis management strategies to protect
                    leaders and organizations from costly errors, ensuring they navigate sensitive situations with
                    diplomacy and confidence.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Key Outcomes:</h3>
                  <ul className="list-disc pl-5 text-navy-light space-y-2">
                    <li>Master cultural fluency to avoid reputational risks.</li>
                    <li>Lead with diplomacy in high-stakes, sensitive environments.</li>
                    <li>Develop a proactive crisis management strategy to safeguard credibility.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Who Should Attend:</h3>
                  <p className="text-navy-light">
                    CEOs, Public Figures, Diplomatic Officials, and Corporate Communications Teams.
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="bg-navy hover:bg-navy-light text-ivory">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative min-h-[300px] md:min-h-full">
                <Image
                  src="/images/crisis-management.jpg"
                  alt="Crisis-Proof Leadership & Reputation Management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Program 4 */}
          <div className="bg-white rounded-lg shadow-elegant mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[300px] md:min-h-full order-last md:order-first">
                <Image
                  src="/images/executive-coaching.jpg"
                  alt="Invisible Signals of Influence Mastery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10">
                <h2 className="text-2xl font-bold text-navy mb-4">Invisible Signals of Influence Mastery</h2>
                <p className="text-gold font-medium mb-6">For Executives in High-Stakes Settings</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Hidden Problem:</h3>
                  <p className="text-navy-light">
                    Most executives focus on what they say—but it's how they say it, when they say it, and the invisible
                    signals they send that determine success in high-level business interactions.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Transformation:</h3>
                  <p className="text-navy-light">
                    We teach leaders to decode the invisible signals of influence—from body language and tone to
                    hierarchical respect and cultural cues—ensuring they control the room's energy and drive
                    conversations to their advantage.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Key Outcomes:</h3>
                  <ul className="list-disc pl-5 text-navy-light space-y-2">
                    <li>Command respect and attention without saying a word.</li>
                    <li>Decode unspoken cultural norms and business etiquettes.</li>
                    <li>Influence high-stakes negotiations and decision-making through subtle cues.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Who Should Attend:</h3>
                  <p className="text-navy-light">
                    Senior Executives, Diplomats, Negotiators, and High-Level Influencers.
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="bg-navy hover:bg-navy-light text-ivory">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Program 5 */}
          <div className="bg-white rounded-lg shadow-elegant mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <h2 className="text-2xl font-bold text-navy mb-4">DEI as a High-Performance Business Strategy</h2>
                <p className="text-gold font-medium mb-6">For Organizations Committed to Global Excellence</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Hidden Problem:</h3>
                  <p className="text-navy-light">
                    Most companies treat Diversity, Equity, and Inclusion (DEI) as a compliance checkbox, missing the
                    opportunity to leverage it for strategic growth and global expansion.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Transformation:</h3>
                  <p className="text-navy-light">
                    We elevate DEI from a "feel-good" initiative to a high-performance business strategy, helping
                    organizations attract international clients, build innovative teams, and strengthen market position
                    through inclusive leadership.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Key Outcomes:</h3>
                  <ul className="list-disc pl-5 text-navy-light space-y-2">
                    <li>Transform DEI into a competitive growth strategy.</li>
                    <li>Lead with cultural intelligence to expand global reach.</li>
                    <li>Build diverse teams that drive innovation and performance.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Who Should Attend:</h3>
                  <p className="text-navy-light">
                    C-Suite Executives, HR Leaders, Global Teams, and DEI Professionals.
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="bg-navy hover:bg-navy-light text-ivory">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative min-h-[300px] md:min-h-full">
                <Image
                  src="/images/dei-strategy.jpg"
                  alt="DEI as a High-Performance Business Strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Program 6 */}
          <div className="bg-white rounded-lg shadow-elegant mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[300px] md:min-h-full order-last md:order-first">
                <Image
                  src="/images/own-the-room.jpg"
                  alt="Own The Room: Mastering Professional Excellence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10">
                <h2 className="text-2xl font-bold text-navy mb-4">Own The Room: Mastering Professional Excellence</h2>
                <p className="text-gold font-medium mb-6">For Executives and Professionals</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Overview:</h3>
                  <p className="text-navy-light">
                    "Own The Room" is a comprehensive, hands-on course designed to equip executives and professionals
                    with the skills to project authority, confidence, and charisma in high-stakes business environments.
                    Participants will develop essential competencies in executive presence, business protocol,
                    communication, emotional intelligence, and social acumen to become influential leaders capable of
                    navigating global business challenges.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-navy mb-2">Target Audience:</h3>
                  <p className="text-navy-light">
                    Executives, entrepreneurs, mid-to-senior level professionals, and emerging leaders who want to
                    enhance their executive presence, communication, and social influence.
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="bg-navy hover:bg-navy-light text-ivory">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-navy rounded-lg p-12 shadow-elegant text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Ready to Elevate Your Leadership?</h2>
            <p className="text-ivory text-lg max-w-2xl mx-auto mb-8">
              Schedule a consultation with our experts and discover how our programs can transform your professional
              presence and influence.
            </p>
            <Button className="bg-gold hover:bg-gold-dark text-navy font-bold text-lg px-8 py-6">
              <Link href="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
