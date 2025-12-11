"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-forest-green/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className="flex items-center justify-between"
        >
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-playfair font-bold text-antique-gold">
                Graceful <span className="text-sandstone">&#38;</span> Poised
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav variants={itemVariants} className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sandstone hover:text-antique-gold transition-colors relative ${
                isActive("/")
                  ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-antique-gold"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sandstone hover:text-antique-gold transition-colors relative ${
                isActive("/about")
                  ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-antique-gold"
                  : ""
              }`}
            >
              About Us
            </Link>
            <div className="relative">
              <button
                className={`flex items-center text-sandstone hover:text-antique-gold transition-colors ${
                  pathname.includes("/services") ||
                  pathname.includes("/coaching") ||
                  pathname.includes("/corporate-training") ||
                  pathname.includes("/diplomatic-protocol") ||
                  pathname.includes("/vip-events") ||
                  pathname.includes("/own-the-room")
                    ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-antique-gold"
                    : ""
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services{" "}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="absolute top-full left-0 mt-2 w-64 rounded-md overflow-hidden shadow-lg"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="bg-forest-green border border-antique-gold/20 rounded-md py-2">
                      <Link
                        href="/coaching"
                        className="block px-4 py-3 text-sandstone hover:bg-forest-green-light hover:text-antique-gold transition-colors"
                      >
                        One-on-One Coaching
                      </Link>
                      <Link
                        href="/corporate-training"
                        className="block px-4 py-3 text-sandstone hover:bg-forest-green-light hover:text-antique-gold transition-colors"
                      >
                        Corporate Training
                      </Link>
                      <Link
                        href="/diplomatic-protocol"
                        className="block px-4 py-3 text-sandstone hover:bg-forest-green-light hover:text-antique-gold transition-colors"
                      >
                        Diplomatic Protocol
                      </Link>
                      <Link
                        href="/vip-events"
                        className="block px-4 py-3 text-sandstone hover:bg-forest-green-light hover:text-antique-gold transition-colors"
                      >
                        VIP Events
                      </Link>
                      <Link
                        href="/own-the-room"
                        className="block px-4 py-3 text-sandstone hover:bg-forest-green-light hover:text-antique-gold transition-colors"
                      >
                        Own the Room
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/blog"
              className={`text-sandstone hover:text-antique-gold transition-colors relative ${
                isActive("/blog") || pathname.startsWith("/blog/")
                  ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-antique-gold"
                  : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="/booking"
              className={`text-sandstone hover:text-antique-gold transition-colors relative ${
                isActive("/booking")
                  ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-antique-gold"
                  : ""
              }`}
            >
              Booking
            </Link>
            <Link
              href="/contact"
              className={`text-sandstone hover:text-antique-gold transition-colors relative ${
                isActive("/contact")
                  ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-antique-gold"
                  : ""
              }`}
            >
              Contact Us
            </Link>
            {/* Fix: Remove the nested Link and use the Button directly with href */}
            <Button
              className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            className="lg:hidden text-sandstone"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="lg:hidden bg-forest-green/95 backdrop-blur-md border-t border-forest-green-light overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <motion.div variants={itemVariants}>
                <Link
                  href="/"
                  className={`block text-sandstone hover:text-antique-gold transition-colors py-3 ${
                    isActive("/") ? "text-antique-gold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/about"
                  className={`block text-sandstone hover:text-antique-gold transition-colors py-3 ${
                    isActive("/about") ? "text-antique-gold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="py-3">
                  <button
                    className={`flex items-center text-sandstone hover:text-antique-gold transition-colors ${
                      pathname.includes("/services") ||
                      pathname.includes("/coaching") ||
                      pathname.includes("/corporate-training") ||
                      pathname.includes("/diplomatic-protocol") ||
                      pathname.includes("/vip-events") ||
                      pathname.includes("/own-the-room")
                        ? "text-antique-gold"
                        : ""
                    }`}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    Services{" "}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-2 border-l-2 border-antique-gold/30"
                      >
                        <Link
                          href="/coaching"
                          className="block text-sandstone hover:text-antique-gold transition-colors py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          One-on-One Coaching
                        </Link>
                        <Link
                          href="/corporate-training"
                          className="block text-sandstone hover:text-antique-gold transition-colors py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Corporate Training
                        </Link>
                        <Link
                          href="/diplomatic-protocol"
                          className="block text-sandstone hover:text-antique-gold transition-colors py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Diplomatic Protocol
                        </Link>
                        <Link
                          href="/vip-events"
                          className="block text-sandstone hover:text-antique-gold transition-colors py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          VIP Events
                        </Link>
                        <Link
                          href="/own-the-room"
                          className="block text-sandstone hover:text-antique-gold transition-colors py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Own the Room
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/blog"
                  className={`block text-sandstone hover:text-antique-gold transition-colors py-3 ${
                    isActive("/blog") || pathname.startsWith("/blog/") ? "text-antique-gold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/booking"
                  className={`block text-sandstone hover:text-antique-gold transition-colors py-3 ${
                    isActive("/booking") ? "text-antique-gold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Booking
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/contact"
                  className={`block text-sandstone hover:text-antique-gold transition-colors py-3 ${
                    isActive("/contact") ? "text-antique-gold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} className="pt-2">
                {/* Fix: Remove the nested Link and use the Button directly with asChild */}
                <Button
                  className="w-full bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-medium py-6 rounded-full shadow-md"
                  asChild
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Free Consultation
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
