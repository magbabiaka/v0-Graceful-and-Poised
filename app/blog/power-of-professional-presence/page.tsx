import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from "lucide-react"

export const metadata = {
  title: "The Power of Professional Presence in the Digital Age | Graceful & Poised",
  description:
    "Adapt your executive presence for virtual meetings, hybrid work environments, and digital communications while maintaining authority and authenticity.",
}

export default function DigitalPresencePage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/blog/digital-presence.png"
          alt="Professional Presence in the Digital Age"
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
              Digital Leadership
            </span>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-sandstone mb-4">
              The Power of Professional Presence in the Digital Age
            </h1>
            <div className="flex items-center text-sandstone/80 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>January 18, 2025</span>
              <span className="mx-3">|</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>7 min read</span>
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
                The fundamentals of executive presence haven&apos;t changed, but the medium has. Today&apos;s leaders must 
                command attention and convey authority through screens, across time zones, and in hybrid environments 
                where some participants are in the room while others join virtually.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                The New Rules of Virtual Presence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In a virtual meeting, you&apos;re competing with email notifications, home distractions, and the temptation 
                to multitask. Capturing and holding attention requires intentional strategies that translate your 
                physical presence into digital impact.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your camera framing matters enormously. Position yourself so your eyes are roughly in the upper third 
                of the frame, with appropriate headroom. Avoid backgrounds that distract or undermine your professional 
                image. Good lighting—ideally natural light from in front of you—eliminates shadows and conveys energy.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Mastering the Technical Foundation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Technical issues instantly undermine perceived competence. Invest in quality audio equipment—poor 
                sound quality is more distracting than poor video quality. Test your setup before important meetings, 
                have backup plans for connectivity issues, and know how to troubleshoot common problems quickly.
              </p>

              <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-antique-gold">
                <h3 className="font-playfair text-xl font-bold text-forest-green mb-3">Digital Presence Essentials</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Audio:</strong> Quality microphone, quiet environment, mute discipline</li>
                  <li><strong>Video:</strong> Eye-level camera, good lighting, professional background</li>
                  <li><strong>Connection:</strong> Wired internet when possible, backup mobile hotspot</li>
                  <li><strong>Environment:</strong> Minimize interruptions, close unnecessary applications</li>
                </ul>
              </div>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Eye Contact in a Virtual World
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The most common mistake in virtual meetings is looking at the screen rather than the camera. When 
                you look at others&apos; faces on your screen, you appear to be looking down or away from their perspective. 
                True virtual eye contact means looking directly at your camera lens, especially when speaking.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This feels unnatural at first because you can&apos;t see the faces you&apos;re addressing. Practice helps, as 
                does positioning your video call window as close to your camera as possible.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Voice and Pacing for Digital Communication
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Without the full range of physical cues, your voice carries more weight in virtual settings. Speak 
                slightly more slowly than feels natural, articulate clearly, and use pauses strategically. Vary your 
                tone and pace to maintain engagement—monotone delivery is deadly in virtual meetings.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Energy that might seem excessive in person often reads as appropriate and engaging on camera. Don&apos;t 
                be afraid to amplify your expressiveness slightly while remaining authentic.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Managing Hybrid Meetings Effectively
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hybrid meetings present unique challenges. Remote participants often feel like second-class attendees, 
                struggling to hear side conversations and read room dynamics. Effective leaders actively bridge this gap.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Repeat questions from the room for remote participants. Create deliberate moments to invite virtual 
                contributions. Use chat features to gather input that might otherwise be lost. Consider whether 
                all-virtual might sometimes be more equitable than hybrid.
              </p>

              <h2 className="font-playfair text-2xl font-bold text-forest-green mt-10 mb-4">
                Digital Communication Beyond Meetings
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your professional presence extends to every digital touchpoint. Email tone, response times, Slack 
                messages, and calendar management all contribute to how others perceive your professionalism and 
                reliability.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Be intentional about your digital communication style. Match formality to context, respond thoughtfully 
                rather than reactively, and remember that written communication lacks the nuance of tone and body language.
              </p>

              <div className="bg-forest-green text-sandstone p-8 rounded-lg my-10">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-antique-gold">Master Your Digital Presence</h3>
                <p className="mb-6">
                  Our Own The Room program includes dedicated training on virtual executive presence, helping 
                  leaders command attention and convey authority in any digital environment.
                </p>
                <Link href="/own-the-room">
                  <Button className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-bold">
                    Explore Own The Room
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
