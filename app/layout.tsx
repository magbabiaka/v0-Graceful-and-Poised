import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Graceful and Poised | Modern Protocol & Leadership Excellence",
  description:
    "Transform into a high-level influencer with our expert-led protocol, etiquette, and leadership training. Elevate your professional presence with Graceful and Poised.",
  keywords:
    "executive presence, business etiquette, protocol training, leadership development, professional development",
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.gracefulandpoised.com/#organization",
      name: "Graceful and Poised",
      url: "https://www.gracefulandpoised.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.gracefulandpoised.com/#logo",
        url: "https://www.gracefulandpoised.com/logo.png",
        caption: "Graceful and Poised",
      },
      image: "https://www.gracefulandpoised.com/logo.png",
      description:
        "Graceful and Poised equips executives, corporate teams, and organizations worldwide with modern business protocol, executive presence, emotional intelligence, and diplomatic leadership training.",
      email: "engage@gracefulandpoised.com",
      telephone: "+1-404-441-5346",
      founder: {
        "@type": "Person",
        "@id": "https://www.gracefulandpoised.com/#founder",
        name: "Doreen Agbabiaka",
        jobTitle: "Founder & Principal Consultant",
        description:
          "Certified International Business & Diplomatic Protocol Consultant, Image Strategist, and Leadership Trainer.",
      },
      knowsAbout: [
        "International Business Protocol",
        "Executive Presence",
        "Corporate Etiquette",
        "Diplomatic Protocol",
        "Emotional Intelligence",
        "Cross-Cultural Communication",
        "Leadership Development",
        "Personal Diplomacy",
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "AdministrativeArea",
          name: "Global",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Protocol and Leadership Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Executive Development",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "One-on-One Executive Coaching",
                  description:
                    "Bespoke coaching on executive presence, authority, body language, negotiation dynamics, and high-level personal branding.",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Corporate Training & Protocol",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "The Emotionally Intelligent Enterprise Initiative™",
                  description:
                    "Organizational leadership framework re-engineering internal trust, collaboration, and psychological safety.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Intercultural Etiquette & Professional Communications",
                  description:
                    "Global protocol training preparing corporate and diplomatic leaders for international trade, negotiations, and foreign missions.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "High-Profile Event Protocol Advisory",
                  description:
                    "Meticulous protocol architecture, VIP coordination, and ceremonial planning for corporate summits and luxury events.",
                },
              },
            ],
          },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.gracefulandpoised.com/#coaching-service",
      name: "One-on-One Executive Coaching",
      provider: {
        "@id": "https://www.gracefulandpoised.com/#organization",
      },
      serviceType: "Executive Coaching & Presence Development",
      description:
        "Personalized 1-on-1 coaching program designed to help leaders master executive presence, command authority in high-stakes environments, and navigate boardroom power dynamics.",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "C-Suite Executives, Senior Leaders, and Ambitious Professionals",
      },
      url: "https://www.gracefulandpoised.com/coaching",
    },
    {
      "@type": "Service",
      "@id": "https://www.gracefulandpoised.com/#corporate-training-service",
      name: "Corporate Protocol & Leadership Training",
      provider: {
        "@id": "https://www.gracefulandpoised.com/#organization",
      },
      serviceType: "Corporate Training Solutions",
      description:
        "Tailored organizational workshops and advisory covering emotional intelligence, intercultural communication, personal diplomacy, and global business protocol.",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Multinational Corporations, Government Bodies, and Luxury Brands",
      },
      url: "https://www.gracefulandpoised.com/corporate-training",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.gracefulandpoised.com/#website",
      url: "https://www.gracefulandpoised.com",
      name: "Graceful and Poised",
      publisher: {
        "@id": "https://www.gracefulandpoised.com/#organization",
      },
      inLanguage: "en-US",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${lato.variable} font-lato`}>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
