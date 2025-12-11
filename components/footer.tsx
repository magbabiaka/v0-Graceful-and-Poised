import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-forest-green text-sandstone relative">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-sandstone rounded-b-[50%]"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-antique-gold">Graceful & Poised</h3>
            <p className="text-sandstone/80 max-w-xs leading-relaxed">
              Transforming leaders into high-level influencers who command respect, build trust, and close deals with
              power and precision.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/gracefulandpoised"
                className="text-sandstone hover:text-antique-gold transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/doreen-agbabiaka/"
                className="text-sandstone hover:text-antique-gold transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>

            {/* Certification Badges */}
            <div className="flex flex-col space-y-4 mt-6">
              <div className="w-full max-w-[200px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MMI-badges_certified-protocol-consultant_badge-Z3TBAZi2jHSzjO8qI1vrZVdrOjDeNw.png"
                  alt="Minding Manners International Certified Consultant"
                  width={200}
                  height={240}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full max-w-[200px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IEPAL_badge_trained-and-certified-by_silver-1342.jpg-Kq2hhp9H0hwZ6xRMctXlxyKK2TqzpY.jpeg"
                  alt="Trained and Certified by International Etiquette and Protocol Academy of London"
                  width={200}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-antique-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sandstone/80 hover:text-antique-gold transition-colors group flex items-center"
                >
                  <ArrowRight className="h-4 w-0 mr-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-antique-gold" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sandstone/80 hover:text-antique-gold transition-colors group flex items-center"
                >
                  <ArrowRight className="h-4 w-0 mr-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-antique-gold" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching"
                  className="text-sandstone/80 hover:text-antique-gold transition-colors group flex items-center"
                >
                  <ArrowRight className="h-4 w-0 mr-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-antique-gold" />
                  One-on-One Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-training"
                  className="text-sandstone/80 hover:text-antique-gold transition-colors group flex items-center"
                >
                  <ArrowRight className="h-4 w-0 mr-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-antique-gold" />
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sandstone/80 hover:text-antique-gold transition-colors group flex items-center"
                >
                  <ArrowRight className="h-4 w-0 mr-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-antique-gold" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-antique-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-forest-green-light/30 p-2 rounded-full mr-3 mt-1">
                  <MapPin className="h-5 w-5 text-antique-gold" />
                </div>
                <span className="text-sandstone/80">Atlanta, Georgia, USA</span>
              </li>
              <li className="flex items-center">
                <div className="bg-forest-green-light/30 p-2 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-antique-gold" />
                </div>
                <span className="text-sandstone/80">+1 (404) 441-5346</span>
              </li>
              <li className="flex items-center">
                <div className="bg-forest-green-light/30 p-2 rounded-full mr-3">
                  <Mail className="h-5 w-5 text-antique-gold" />
                </div>
                <span className="text-sandstone/80">engage@gracefulandpoised.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-forest-green-light/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sandstone/80 text-sm">
              &copy; {new Date().getFullYear()} Graceful & Poised. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sandstone/80 hover:text-antique-gold text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sandstone/80 hover:text-antique-gold text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sandstone/80 hover:text-antique-gold text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
