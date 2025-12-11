"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, BookOpen, CheckCircle, ArrowRight, Star } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const testimonialsRef = useRef(null)
  const ctaRef = useRef(null)
  const blogRef = useRef(null)

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 })
  const isBlogInView = useInView(blogRef, { once: true, amount: 0.3 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 100])
  const heroBlur = useTransform(scrollYProgress, [0, 0.8], [0, 5])

  // Parallax effect for background elements
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-deep-teal"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
          filter: `blur(${heroBlur.get()}px)`,
        }}
      >
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
          <Image
            src="/images/hero-bg.jpg"
            alt="Elegant business setting"
            fill
            className="object-cover opacity-20"
            priority
          />
        </motion.div>
        <div className="hero-gradient absolute inset-0 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-3xl">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-light-taupe mb-6"
            >
              Elevate Your{" "}
              <span className="text-burnt-orange inline-block relative">
                Professional Presence
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-2 left-0 h-[6px] bg-burnt-orange/30 -z-10"
                ></motion.span>
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-light-taupe-dark mb-8 leading-relaxed"
            >
              Transform into a high-level influencer who commands respect, builds trust, and closes deals with power and
              precision.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-burnt-orange hover:bg-burnt-orange-dark text-deep-teal font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group animate-pulse-glow">
                <Link href="/programs" className="flex items-center">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-burnt-orange text-burnt-orange hover:bg-deep-teal-light font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/booking">Book a Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-light-taupe text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-light-taupe rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-3 bg-burnt-orange rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-light-taupe">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">About Graceful & Poised</h2>
            <div className="elegant-divider"></div>
            <p className="text-lg text-deep-teal-light">
              We go beyond traditional etiquette and protocol to transform leaders into influential professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
              className="relative"
            >
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-burnt-orange/20 rounded-full -z-10"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-deep-teal/10 rounded-full -z-10"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              ></motion.div>
              <Image
                src="/images/global-professionals.jpg"
                alt="Diverse global professionals collaborating"
                width={800}
                height={600}
                className="rounded-lg shadow-elegant object-cover animate-fade-blur"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-deep-teal">Our Mission</h3>
              <p className="text-deep-teal-light leading-relaxed">
                At Graceful and Poised, we equip professionals and organizations with expert-led, practical solutions
                that seamlessly integrate modern business protocol, emotional intelligence, diplomacy, and leadership
                best practices.
              </p>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="bg-burnt-orange/20 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-burnt-orange" />
                  </div>
                  <p className="text-deep-teal-light">
                    Comprehensive protocol training tailored to your specific industry and needs
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="bg-burnt-orange/20 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-burnt-orange" />
                  </div>
                  <p className="text-deep-teal-light">Personalized coaching for executives and leadership teams</p>
                </motion.div>
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="bg-burnt-orange/20 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-burnt-orange" />
                  </div>
                  <p className="text-deep-teal-light">
                    Practical tools to enhance your professional presence and influence
                  </p>
                </motion.div>
              </div>
              <Button className="bg-deep-teal hover:bg-deep-teal-light text-light-taupe font-medium rounded-full group">
                <Link href="/about" className="flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white relative">
        <div
          className="absolute top-0 left-0 w-full h-32 bg-light-taupe"
          style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">Our Premium Services</h2>
            <div className="elegant-divider"></div>
            <p className="text-lg text-deep-teal-light">
              Expert-led solutions that integrate modern business protocol, emotional intelligence, and leadership best
              practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", damping: 12 }}
              className="service-card bg-light-taupe rounded-xl p-8 shadow-elegant group"
            >
              <motion.div
                className="bg-burnt-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-burnt-orange/20 transition-colors duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Users className="h-8 w-8 text-burnt-orange" />
              </motion.div>
              <h3 className="text-xl font-bold text-deep-teal mb-4 group-hover:text-burnt-orange transition-colors duration-300">
                Executive Coaching
              </h3>
              <p className="text-deep-teal-light mb-6">
                One-on-one coaching sessions designed to refine your professional presence, communication skills, and
                leadership style.
              </p>
              <Link href="/coaching" className="flex items-center text-burnt-orange font-medium group-hover:underline">
                <span className="relative">
                  Learn More
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burnt-orange group-hover:w-full transition-all duration-300"></span>
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", damping: 12 }}
              className="service-card bg-light-taupe rounded-xl p-8 shadow-elegant group"
            >
              <motion.div
                className="bg-burnt-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-burnt-orange/20 transition-colors duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <BookOpen className="h-8 w-8 text-burnt-orange" />
              </motion.div>
              <h3 className="text-xl font-bold text-deep-teal mb-4 group-hover:text-burnt-orange transition-colors duration-300">
                Corporate Training
              </h3>
              <p className="text-deep-teal-light mb-6">
                Customized workshops and training programs for teams to enhance protocol awareness and professional
                etiquette.
              </p>
              <Link
                href="/corporate-training"
                className="flex items-center text-burnt-orange font-medium group-hover:underline"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burnt-orange group-hover:w-full transition-all duration-300"></span>
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", damping: 12 }}
              className="service-card bg-light-taupe rounded-xl p-8 shadow-elegant group"
            >
              <motion.div
                className="bg-burnt-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-burnt-orange/20 transition-colors duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Award className="h-8 w-8 text-burnt-orange" />
              </motion.div>
              <h3 className="text-xl font-bold text-deep-teal mb-4 group-hover:text-burnt-orange transition-colors duration-300">
                Event Protocol
              </h3>
              <p className="text-deep-teal-light mb-6">
                Comprehensive planning and execution of high-profile events with impeccable attention to protocol and
                etiquette.
              </p>
              <Link
                href="/diplomatic-protocol"
                className="flex items-center text-burnt-orange font-medium group-hover:underline"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burnt-orange group-hover:w-full transition-all duration-300"></span>
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button className="bg-deep-teal hover:bg-deep-teal-light text-light-taupe font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
              <Link href="/programs">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-deep-teal text-light-taupe relative">
        <div
          className="absolute top-0 left-0 w-full h-32 bg-white"
          style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
        ></div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 rounded-full bg-burnt-orange/5 blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-burnt-orange/5 blur-xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        ></motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-burnt-orange mb-4">Client Testimonials</h2>
            <div className="elegant-divider"></div>
            <p className="text-lg text-light-taupe-dark">
              Hear from professionals who have transformed their presence and influence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", damping: 12 }}
              className="bg-deep-teal-light/50 backdrop-blur-sm p-8 rounded-xl shadow-elegant border border-deep-teal-light/20 hover:border-burnt-orange/20 transition-all duration-300 group"
            >
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-burnt-orange fill-burnt-orange" />
                ))}
              </div>
              <p className="text-light-taupe-dark mb-6 leading-relaxed">
                "Working with Graceful and Poised transformed not just how I present myself, but how my entire executive
                team approaches leadership. The results have been remarkable—increased confidence, better client
                relationships, and more successful negotiations."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-transparent group-hover:border-burnt-orange transition-all duration-300">
                  <Image
                    src="/images/testimonial-1.jpg"
                    alt="Sarah Johnson"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-burnt-orange font-bold">Sarah Johnson</h4>
                  <p className="text-light-taupe-dark text-sm">CEO, Global Enterprises</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", damping: 12 }}
              className="bg-deep-teal-light/50 backdrop-blur-sm p-8 rounded-xl shadow-elegant border border-deep-teal-light/20 hover:border-burnt-orange/20 transition-all duration-300 group"
            >
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-burnt-orange fill-burnt-orange" />
                ))}
              </div>
              <p className="text-light-taupe-dark mb-6 leading-relaxed">
                "The protocol training we received was invaluable for our international business dealings. Their
                attention to cultural nuances and diplomatic etiquette gave us a significant edge in establishing trust
                with our global partners."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-transparent group-hover:border-burnt-orange transition-all duration-300">
                  <Image
                    src="/images/testimonial-2.jpg"
                    alt="Michael Chen"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-burnt-orange font-bold">Michael Chen</h4>
                  <p className="text-light-taupe-dark text-sm">Director of International Relations</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", damping: 12 }}
              className="bg-deep-teal-light/50 backdrop-blur-sm p-8 rounded-xl shadow-elegant border border-deep-teal-light/20 hover:border-burnt-orange/20 transition-all duration-300 group"
            >
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-burnt-orange fill-burnt-orange" />
                ))}
              </div>
              <p className="text-light-taupe-dark mb-6 leading-relaxed">
                "Their event protocol services exceeded all expectations. Every detail was meticulously planned and
                executed, creating an atmosphere of sophistication that perfectly aligned with our brand identity."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-transparent group-hover:border-burnt-orange transition-all duration-300">
                  <Image
                    src="/images/testimonial-3.jpg"
                    alt="Alexandra Rivera"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-burnt-orange font-bold">Alexandra Rivera</h4>
                  <p className="text-light-taupe-dark text-sm">Event Director, Luxury Brands</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button className="bg-burnt-orange hover:bg-burnt-orange-dark text-deep-teal font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
              <Link href="/about">Read More Testimonials</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-light-taupe relative">
        <div
          className="absolute top-0 left-0 w-full h-32 bg-deep-teal"
          style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isCtaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", damping: 15 }}
            className="bg-deep-teal rounded-2xl p-12 shadow-elegant text-center relative overflow-hidden"
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-burnt-orange/5 rounded-full -translate-y-1/2 translate-x-1/2"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-burnt-orange/5 rounded-full translate-y-1/2 -translate-x-1/2"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            ></motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-burnt-orange mb-4 relative z-10"
            >
              Ready to Elevate Your Professional Presence?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-light-taupe text-lg max-w-2xl mx-auto mb-8 relative z-10"
            >
              Schedule a consultation with our experts and discover how Graceful and Poised can transform your
              leadership style and professional impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4 relative z-10"
            >
              <Button className="bg-burnt-orange hover:bg-burnt-orange-dark text-deep-teal font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group animate-pulse-glow">
                <Link href="/booking" className="flex items-center">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-burnt-orange text-burnt-orange hover:bg-deep-teal-light font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">Download Brochure</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section ref={blogRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBlogInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">Latest Insights</h2>
            <div className="elegant-divider"></div>
            <p className="text-lg text-deep-teal-light">
              Expert advice and thought leadership on protocol, etiquette, and professional development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBlogInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", damping: 12 }}
              className="bg-light-taupe rounded-xl overflow-hidden shadow-elegant group hover:shadow-elegant-hover transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/blog-1.jpg"
                  alt="Blog post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-deep-teal/20 group-hover:bg-deep-teal/10 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-burnt-orange/10 text-burnt-orange font-medium rounded-full mb-4">
                  Leadership
                </div>
                <h3 className="text-xl font-bold text-deep-teal mb-3 group-hover:text-burnt-orange transition-colors duration-300">
                  The Art of Diplomatic Communication in Business
                </h3>
                <p className="text-deep-teal-light mb-4 line-clamp-3">
                  Learn how diplomatic communication techniques can transform challenging business conversations into
                  productive exchanges.
                </p>
                <Link href="/contact" className="flex items-center text-burnt-orange font-medium group-hover:underline">
                  <span className="relative">
                    Read Article
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burnt-orange group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Blog Post 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBlogInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", damping: 12 }}
              className="bg-light-taupe rounded-xl overflow-hidden shadow-elegant group hover:shadow-elegant-hover transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/blog-2.jpg"
                  alt="Blog post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-deep-teal/20 group-hover:bg-deep-teal/10 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-burnt-orange/10 text-burnt-orange font-medium rounded-full mb-4">
                  Protocol
                </div>
                <h3 className="text-xl font-bold text-deep-teal mb-3 group-hover:text-burnt-orange transition-colors duration-300">
                  International Business Etiquette: A Comprehensive Guide
                </h3>
                <p className="text-deep-teal-light mb-4 line-clamp-3">
                  Navigate cultural differences with confidence using our expert guide to international business
                  etiquette.
                </p>
                <Link href="/contact" className="flex items-center text-burnt-orange font-medium group-hover:underline">
                  <span className="relative">
                    Read Article
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burnt-orange group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Blog Post 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isBlogInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", damping: 12 }}
              className="bg-light-taupe rounded-xl overflow-hidden shadow-elegant group hover:shadow-elegant-hover transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/blog-3.jpg"
                  alt="Blog post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-deep-teal/20 group-hover:bg-deep-teal/10 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-burnt-orange/10 text-burnt-orange font-medium rounded-full mb-4">
                  Professional Development
                </div>
                <h3 className="text-xl font-bold text-deep-teal mb-3 group-hover:text-burnt-orange transition-colors duration-300">
                  Executive Presence: The Key to Leadership Influence
                </h3>
                <p className="text-deep-teal-light mb-4 line-clamp-3">
                  Discover the essential components of executive presence and how to develop them for maximum leadership
                  impact.
                </p>
                <Link href="/contact" className="flex items-center text-burnt-orange font-medium group-hover:underline">
                  <span className="relative">
                    Read Article
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burnt-orange group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isBlogInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button className="bg-deep-teal hover:bg-deep-teal-light text-light-taupe font-medium rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group animate-pulse-glow">
              <Link href="/contact" className="flex items-center">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
