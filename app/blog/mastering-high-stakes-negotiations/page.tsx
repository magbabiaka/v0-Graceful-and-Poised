import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from "lucide-react"

export const metadata = {
  title: "Mastering High-Stakes Negotiations: A Leader's Guide | Graceful & Poised",
  description:
    "Learn the psychological frameworks and strategic techniques that elite negotiators use to secure favorable outcomes while maintaining valuable relationships.",
}

export default function HighStakesNegotiationsPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/blog/high-stakes-negotiations.png"
          alt="High-Stakes Negotiations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 via-forest-green/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-sandstone hover:text-antique-gold transition-colors mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            <span className="bg-antique-gold text-forest-green px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Negotiation
            </span>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-sandstone mb-4">
              Mastering High-Stakes Negotiations: A Leader&apos;s Guide
            </h1>
            <div className="flex items-center text-sandstone/80 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>January 5, 2025</span>
              <span className="mx-3">|</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                In the world of executive leadership, negotiations aren&apos;t just about getting what you want—they&apos;re about 
                creating outcomes that strengthen relationships and build lasting partnerships. The most successful leaders 
                understand that every negotiation is an opportunity to demonstrate integrity, strategic thinking, and 
                emotional intelligence.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                The Psychology of Successful Negotiations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Elite negotiators understand that human psychology drives every deal. Before entering any high-stakes 
                discussion, they invest time understanding the other party&apos;s motivations, fears, and aspirations. This 
                insight allows them to frame proposals in ways that resonate emotionally while satisfying logical requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The principle of reciprocity plays a crucial role in negotiations. When you offer something of value 
                first—whether information, concessions, or simply respect—you create a psychological obligation that 
                often leads to favorable outcomes.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Preparation: The Foundation of Success
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The most critical phase of any negotiation happens before you enter the room. Thorough preparation 
                involves understanding your BATNA (Best Alternative to Negotiated Agreement), researching the other 
                party&apos;s constraints and pressures, and developing multiple scenarios for how the discussion might unfold.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-antique-gold">
                <h3 className="font-playfair text-xl font-bold text-forest-green mb-3">Key Preparation Questions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>What does success look like for both parties?</li>
                  <li>What are the non-negotiables versus the negotiables?</li>
                  <li>What external pressures is the other party facing?</li>
                  <li>What creative solutions could satisfy everyone&apos;s core interests?</li>
                  <li>What is my walk-away point, and am I truly prepared to walk away?</li>
                </ul>
              </div>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                The Art of Strategic Silence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                One of the most powerful tools in a negotiator&apos;s arsenal is silence. When faced with an offer or 
                statement, resist the urge to respond immediately. Strategic pauses create space for reflection and 
                often prompt the other party to fill the void with additional information or concessions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Silence also conveys confidence and control. Leaders who are comfortable with silence demonstrate 
                that they&apos;re not desperate to close the deal at any cost.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Building Value, Not Just Claiming It
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traditional negotiation focuses on claiming value—fighting over a fixed pie. Elite negotiators focus 
                on expanding the pie first. They ask questions that uncover interests beyond the obvious positions, 
                looking for creative combinations that create more value for everyone.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This approach requires genuine curiosity about the other party&apos;s situation. When you understand what 
                they truly need (which may differ from what they&apos;re asking for), you can often find solutions that 
                cost you little but deliver significant value to them.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Managing Emotions Under Pressure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                High-stakes negotiations trigger emotional responses. The key is not to eliminate emotions but to 
                manage them strategically. Recognize when you&apos;re feeling defensive, frustrated, or overly eager, 
                and use that awareness to calibrate your responses.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Taking breaks when emotions run high is not weakness—it&apos;s strategic discipline. The best decisions 
                are made with clear heads, not in the heat of the moment.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                The Power of Principled Flexibility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While it&apos;s essential to know your non-negotiables, remaining flexible on how you achieve your 
                objectives opens doors that rigid positions close. Focus on interests rather than positions, and 
                be willing to explore unconventional paths to your goals.
              </p>

              <div className="bg-forest-green text-sandstone p-8 rounded-lg my-10">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-antique-gold">Ready to Elevate Your Negotiation Skills?</h3>
                <p className="mb-6">
                  Our Executive Coaching program includes specialized training in high-stakes negotiations, 
                  helping leaders develop the confidence and skills to navigate complex business discussions.
                </p>
                <Link href="/coaching">
                  <Button className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold">
                    Explore Executive Coaching
                  </Button>
                </Link>
              </div>
            </div>

            {/* Share Section */}
            <div className="border-t border-muted pt-8 mt-12">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Share this article:</span>
                <div className="flex gap-4">
                  <button className="p-2 rounded-full bg-muted hover:bg-forest-green hover:text-sandstone transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-forest-green hover:text-sandstone transition-colors">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-forest-green hover:text-sandstone transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
