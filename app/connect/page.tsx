import Image from "next/image"
import Link from "next/link"
import { Download, Mail, Mic, Users, Building2, CreditCard, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Connect with Doreen Agbabiaka | Graceful and Poised",
  description: "Connect with Doreen Agbabiaka - Certified Diplomatic Protocol Consultant, Influence Strategist, and Leadership Trainer. Explore resources, book speaking engagements, or work together.",
  keywords: "Doreen Agbabiaka, connect, diplomatic protocol, leadership training, influence strategist, speaker",
}

const connectionLinks = [
  {
    title: "Download Free E-Book",
    description: "Get actionable insights on executive presence and influence",
    href: "/ebook",
    icon: Download,
    variant: "accent" as const,
  },
  {
    title: "Join My Free Newsletter",
    description: "Weekly insights on leadership, protocol, and professional excellence",
    href: "https://gracefulandpoised.substack.com/",
    icon: Mail,
    variant: "default" as const,
    external: true,
  },
  {
    title: "Book Me to Speak",
    description: "Keynotes and workshops on leadership, protocol, and influence",
    href: "https://calendly.com/engage-gracefulandpoised/art-of-power-influence",
    icon: Mic,
    variant: "default" as const,
    external: true,
  },
  {
    title: "Work With Me 1:1",
    description: "Personalized executive coaching and presence development",
    href: "/coaching",
    icon: Users,
    variant: "default" as const,
  },
  {
    title: "Corporate Training",
    description: "Transform your team with bespoke leadership development programs",
    href: "/corporate-training",
    icon: Building2,
    variant: "default" as const,
  },
  {
    title: "Digital Business Card",
    description: "Save my contact information",
    href: "https://dot.cards/deeabiaka",
    icon: CreditCard,
    variant: "default" as const,
    external: true,
  },
  {
    title: "Follow Me on LinkedIn",
    description: "Stay connected and join the conversation",
    href: "https://www.linkedin.com/in/doreen-agbabiaka/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B7jdbiqRNRtOn%2FJleuLeOww%3D%3D",
    icon: Linkedin,
    variant: "outline" as const,
    external: true,
  },
]

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative pt-16 pb-8 px-4">
        <div className="max-w-md mx-auto text-center">
          {/* Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-6">
            <Image
              src="/images/doreen-portrait.jpg"
              alt="Doreen Agbabiaka - Certified Diplomatic Protocol Consultant"
              fill
              className="object-cover object-top rounded-full border-4 border-secondary shadow-lg"
              priority
            />
          </div>

          {/* Greeting */}
          <h1 className="font-serif text-3xl md:text-4xl text-primary mb-2">
            Hello!
          </h1>
          
          <p className="text-lg text-foreground font-medium mb-2">
            I&apos;m Doreen Agbabiaka
          </p>
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Certified Diplomatic Protocol Consultant, Influence Strategist, 
            Leadership Trainer, and Founder &amp; Principal of Graceful and Poised
          </p>

          <p className="text-base text-foreground/90 leading-relaxed">
            Let&apos;s connect and explore how I can help you or your organization 
            refine presence, enhance influence, and lead with distinction.
          </p>
        </div>
      </section>

      {/* Connection Links */}
      <section className="px-4 pb-16">
        <div className="max-w-md mx-auto space-y-4">
          {connectionLinks.map((link) => {
            const Icon = link.icon
            const isExternal = link.external

            const linkContent = (
              <div
                className={`
                  group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                  ${link.variant === "accent" 
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md" 
                    : link.variant === "outline"
                    ? "bg-card border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                    : "bg-card hover:bg-card/80 shadow-sm hover:shadow-md border border-border"
                  }
                `}
              >
                <div className={`
                  flex items-center justify-center w-12 h-12 rounded-full shrink-0
                  ${link.variant === "accent"
                    ? "bg-secondary-foreground/10"
                    : "bg-primary/10"
                  }
                `}>
                  <Icon className={`
                    w-5 h-5 
                    ${link.variant === "accent" 
                      ? "text-secondary-foreground" 
                      : "text-primary"
                    }
                  `} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className={`
                    font-semibold text-base
                    ${link.variant === "accent" 
                      ? "text-secondary-foreground" 
                      : "text-foreground"
                    }
                  `}>
                    {link.title}
                  </h2>
                  <p className={`
                    text-sm truncate
                    ${link.variant === "accent" 
                      ? "text-secondary-foreground/80" 
                      : "text-muted-foreground"
                    }
                  `}>
                    {link.description}
                  </p>
                </div>

                <svg 
                  className={`
                    w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1
                    ${link.variant === "accent" 
                      ? "text-secondary-foreground/70" 
                      : "text-muted-foreground"
                    }
                  `}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )

            if (isExternal) {
              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkContent}
                </a>
              )
            }

            return (
              <Link key={link.title} href={link.href}>
                {linkContent}
              </Link>
            )
          })}
        </div>
      </section>

      {/* Footer Branding */}
      <section className="pb-8 px-4">
        <div className="max-w-md mx-auto text-center">
          <Link href="/" className="inline-block">
            <span className="font-serif text-xl text-primary hover:text-primary/80 transition-colors">
              Graceful <span className="text-secondary">&amp;</span> Poised
            </span>
          </Link>
          <p className="text-xs text-muted-foreground mt-2">
            Elevating Leaders. Refining Presence. Inspiring Excellence.
          </p>
        </div>
      </section>
    </main>
  )
}
