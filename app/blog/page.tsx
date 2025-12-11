import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Calendar } from "lucide-react"

export const metadata = {
  title: "Blog | Graceful & Poised - Professional Etiquette & Executive Presence",
  description:
    "Expert insights on executive presence, business etiquette, diplomatic protocol, and professional development from Graceful & Poised.",
}

export default function BlogPage() {
  const featuredArticles = [
    {
      id: "diplomatic-communication-in-business",
      title: "The Art of Diplomatic Communication in Business",
      excerpt:
        "Master the subtle art of diplomatic communication to navigate complex business relationships, resolve conflicts gracefully, and build lasting professional partnerships.",
      image: "/images/blog/diplomatic-communication.png",
      date: "June 10, 2024",
      readTime: "7 min read",
      category: "Communication",
    },
    {
      id: "international-business-etiquette-guide",
      title: "International Business Etiquette: A Comprehensive Guide",
      excerpt:
        "Navigate global business relationships with confidence. Learn essential cultural protocols and etiquette rules for successful international business interactions.",
      image: "/images/blog/international-business-etiquette.png",
      date: "June 12, 2024",
      readTime: "9 min read",
      category: "Global Business",
    },
    {
      id: "executive-presence-leadership-influence",
      title: "Executive Presence: The Key to Leadership Influence",
      excerpt:
        "Discover the invisible qualities that separate influential leaders from the rest. Learn to develop authentic executive presence that commands respect and drives results.",
      image: "/images/blog/executive-presence.png",
      date: "June 15, 2024",
      readTime: "8 min read",
      category: "Leadership",
    },
  ]

  const strategicArticles = [
    {
      id: "cross-cultural-communication-best-practices-2024",
      title: "Cross-Cultural Communication Best Practices for Global Leaders in 2024",
      excerpt:
        "Master the essential cross-cultural communication strategies that drive international business success. Learn proven frameworks for navigating cultural differences with confidence.",
      image: "/images/blog/cross-cultural-communication.png",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Global Communication",
    },
    {
      id: "how-to-dress-for-global-business-success",
      title: "How to Dress for Global Business Success: Executive Wardrobe Guide 2024",
      excerpt:
        "Discover the professional dress codes and cultural considerations that command respect in international business settings. Your complete guide to executive presence through appearance.",
      image: "/images/blog/global-business-attire.png",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Professional Image",
    },
    {
      id: "dei-strategy-leadership-teams-2024",
      title: "DEI Strategy for Leadership Teams: Building Inclusive Excellence in 2024",
      excerpt:
        "Transform your organization with proven diversity, equity, and inclusion strategies. Learn how forward-thinking leaders create cultures of belonging that drive business results.",
      image: "/images/blog/dei-leadership-strategy.png",
      date: "December 12, 2024",
      readTime: "12 min read",
      category: "Leadership & DEI",
    },
    {
      id: "how-to-command-room-professionally",
      title: "How to Command a Room Professionally: Executive Presence Mastery",
      excerpt:
        "Learn the proven techniques that help executives command attention and respect in any professional setting. Master the art of influential presence and authoritative communication.",
      image: "/images/blog/command-room-presence.png",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "Executive Presence",
    },
  ]

  return (
    <main className="pt-24 pb-16">
      <section className="bg-forest-green text-sandstone py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 text-antique-gold">
            Professional Excellence Insights
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Expert guidance on executive presence, global business etiquette, and leadership excellence for today's
            professionals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-sandstone/10">
        <div className="container mx-auto px-4">
          {/* Featured Articles */}
          <div className="mb-16">
            <h2 className="font-playfair text-3xl font-bold mb-12 text-forest-green text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
                >
                  <Link href={`/blog/${article.id}`}>
                    <div className="relative h-60 w-full">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-antique-gold text-forest-green px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <Link href={`/blog/${article.id}`}>
                      <h3 className="font-playfair text-xl font-bold mb-3 text-forest-green hover:text-forest-green-light transition-colors">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Link
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center text-antique-gold hover:text-antique-gold-dark transition-colors"
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Leadership Content */}
          <div className="mb-16">
            <h2 className="font-playfair text-3xl font-bold mb-12 text-forest-green text-center">
              Strategic Leadership Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategicArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
                >
                  <Link href={`/blog/${article.id}`}>
                    <div className="relative h-48 w-full">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-forest-green text-antique-gold px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <Link href={`/blog/${article.id}`}>
                      <h3 className="font-playfair text-lg font-bold mb-3 text-forest-green hover:text-forest-green-light transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                    <Link
                      href={`/blog/${article.id}`}
                      className="inline-flex items-center text-antique-gold hover:text-antique-gold-dark transition-colors text-sm"
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-forest-green text-white p-12 rounded-lg text-center">
            <h3 className="font-playfair text-3xl font-bold mb-4 text-antique-gold">
              Stay Ahead with Executive Excellence Insights
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-sandstone">
              Get exclusive strategies on global leadership, cultural intelligence, and executive presence delivered
              monthly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-forest-green-light focus:outline-none focus:ring-2 focus:ring-antique-gold text-forest-green"
              />
              <Button className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
