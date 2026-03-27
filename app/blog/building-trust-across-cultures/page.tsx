import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from "lucide-react"

export const metadata = {
  title: "Building Trust Across Cultures: The Foundation of Global Leadership | Graceful & Poised",
  description:
    "Explore proven strategies for establishing credibility and trust with international stakeholders, understanding cultural nuances that make or break business relationships.",
}

export default function BuildingTrustCulturesPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/blog/building-trust-cultures.png"
          alt="Building Trust Across Cultures"
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
              Cultural Intelligence
            </span>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-sandstone mb-4">
              Building Trust Across Cultures: The Foundation of Global Leadership
            </h1>
            <div className="flex items-center text-sandstone/80 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>January 12, 2025</span>
              <span className="mx-3">|</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>8 min read</span>
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
                Trust is the currency of global business, yet it&apos;s earned differently across cultures. What builds 
                credibility in New York may undermine it in Tokyo. Understanding these nuances is not optional for 
                today&apos;s leaders—it&apos;s essential for success in an interconnected world.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Understanding Trust Across Cultural Dimensions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cultures differ fundamentally in how trust is established. In task-oriented cultures like the United 
                States and Germany, trust often begins with demonstrated competence and reliability. In relationship-oriented 
                cultures like China, Japan, and much of the Middle East, trust must be built through personal connection 
                before business can begin.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Neither approach is superior—they simply reflect different cultural values about the nature of business 
                relationships. The sophisticated global leader learns to operate fluently in both paradigms.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                The Role of Time in Trust Building
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Western business culture often emphasizes efficiency and speed. However, in many cultures, rushing 
                toward a deal signals desperation or untrustworthiness. Taking time for meals, social conversations, 
                and multiple meetings before discussing business demonstrates respect and genuine interest in partnership.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-antique-gold">
                <h3 className="font-playfair text-xl font-bold text-forest-green mb-3">Trust-Building Timelines by Region</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>North America/Northern Europe:</strong> Trust can develop alongside business discussions</li>
                  <li><strong>Latin America:</strong> Personal relationships typically precede business by weeks or months</li>
                  <li><strong>East Asia:</strong> Deep trust may require years of relationship building</li>
                  <li><strong>Middle East:</strong> Family and personal connections often determine business viability</li>
                </ul>
              </div>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Communication Styles and Trust
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Direct communication, valued in Western business, can damage trust in high-context cultures where 
                meaning is often conveyed indirectly. Learning to read between the lines—and to communicate with 
                appropriate nuance—is essential for building credibility across cultures.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pay attention to what is not said as much as what is. In many Asian cultures, silence indicates 
                thoughtful consideration, not disagreement or disinterest. Interrupting or filling silences can 
                undermine the trust you&apos;re trying to build.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                The Power of Cultural Humility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Perhaps nothing builds trust more effectively than genuine cultural humility—acknowledging what you 
                don&apos;t know and demonstrating willingness to learn. Asking thoughtful questions about cultural practices, 
                showing respect for local customs, and admitting when you&apos;ve made a cultural misstep all contribute to 
                credibility.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This doesn&apos;t mean abandoning your own cultural identity. Authenticity is valued universally. The goal 
                is to show respect while remaining true to who you are.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Practical Strategies for Cross-Cultural Trust
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Before any international engagement, invest time in understanding the cultural context. Learn basic 
                greetings in the local language, research appropriate gift-giving practices, and understand the role 
                of hierarchy in business interactions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Build a network of cultural advisors—people from different backgrounds who can provide insight and 
                feedback on your cross-cultural communication. Their perspectives are invaluable for avoiding missteps 
                and identifying opportunities to build trust.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Maintaining Trust Across Distance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In our hybrid world, maintaining cross-cultural relationships requires intentional effort. Regular 
                communication, remembering personal details shared in previous conversations, and acknowledging 
                cultural holidays and observances all demonstrate ongoing commitment to the relationship.
              </p>

              <div className="bg-forest-green text-sandstone p-8 rounded-lg my-10">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-antique-gold">Develop Your Cultural Intelligence</h3>
                <p className="mb-6">
                  Our Corporate Training programs include specialized modules on cross-cultural communication and 
                  international business protocol, preparing your team for success in global markets.
                </p>
                <Link href="/corporate-training">
                  <Button className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold">
                    Explore Corporate Training
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
