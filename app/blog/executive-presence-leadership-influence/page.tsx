import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from "lucide-react"

export const metadata = {
  title: "Executive Presence: The Key to Leadership Influence | Graceful & Poised",
  description:
    "Discover the invisible qualities that separate influential leaders from the rest. Learn to develop authentic executive presence that commands respect and drives results.",
  keywords:
    "executive presence, leadership influence, leadership development, executive coaching, leadership skills, professional presence, leadership authority",
}

export default function ExecutivePresencePage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog/executive-presence-hero.png"
            alt="Executive presenting to audience"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Executive Presence: The Key to Leadership Influence
          </h1>
          <p className="text-xl text-sandstone max-w-2xl mx-auto">
            Discover the invisible qualities that separate influential leaders from the rest
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                  <Image src="/images/founder-new.jpeg" alt="Article author" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium text-forest-green">Graceful & Poised Team</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>June 15, 2024</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>8 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">Share:</span>
                <a href="#" className="text-gray-500 hover:text-antique-gold transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-antique-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-antique-gold transition-colors">
                  <Share2 className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead text-xl text-forest-green">
                Executive presence is the elusive quality that makes some leaders magnetic and influential while others,
                despite their intelligence and expertise, struggle to command attention and respect. It's the difference
                between being heard and being listened to, between managing and truly leading.
              </p>

              <p>
                Research from the Center for Talent Innovation reveals that executive presence accounts for 26% of what
                it takes to get promoted to senior leadership positions. Yet, despite its critical importance, executive
                presence remains one of the most misunderstood and underdeveloped leadership competencies.
              </p>

              <h2>Defining Executive Presence</h2>

              <p>
                Executive presence is not about charisma or being the loudest voice in the room. It's a sophisticated
                combination of gravitas, communication skills, and appearance that signals leadership readiness and
                inspires confidence in others.
              </p>

              <p>
                At its core, executive presence is about authenticity—being genuinely yourself while adapting your
                communication and behavior to be most effective in leadership situations. It's the ability to connect
                with others, inspire trust, and project confidence even in challenging circumstances.
              </p>

              <h3>The Three Pillars of Executive Presence</h3>

              <h4>1. Gravitas (55% of Executive Presence)</h4>

              <p>
                Gravitas is your ability to project confidence, composure, and decisiveness under pressure. It includes:
              </p>

              <ul>
                <li>
                  <strong>Emotional Regulation:</strong> Maintaining composure in high-stress situations
                </li>
                <li>
                  <strong>Decisiveness:</strong> Making tough decisions with confidence and clarity
                </li>
                <li>
                  <strong>Integrity:</strong> Demonstrating consistent values and ethical behavior
                </li>
                <li>
                  <strong>Vision:</strong> Articulating a compelling future and inspiring others to follow
                </li>
                <li>
                  <strong>Confidence:</strong> Projecting self-assurance without arrogance
                </li>
              </ul>

              <h4>2. Communication (28% of Executive Presence)</h4>

              <p>How you communicate determines how others perceive your leadership capability:</p>

              <ul>
                <li>
                  <strong>Speaking Skills:</strong> Clear, concise, and compelling verbal communication
                </li>
                <li>
                  <strong>Assertiveness:</strong> Standing up for your ideas while respecting others
                </li>
                <li>
                  <strong>Listening:</strong> Demonstrating genuine interest in others' perspectives
                </li>
                <li>
                  <strong>Body Language:</strong> Projecting confidence through posture and gestures
                </li>
                <li>
                  <strong>Storytelling:</strong> Using narrative to make complex ideas accessible and memorable
                </li>
              </ul>

              <h4>3. Appearance (17% of Executive Presence)</h4>

              <p>While the smallest component, appearance significantly impacts first impressions:</p>

              <ul>
                <li>
                  <strong>Professional Grooming:</strong> Polished and appropriate for your industry
                </li>
                <li>
                  <strong>Dress for the Role:</strong> Clothing that reflects your leadership aspirations
                </li>
                <li>
                  <strong>Physical Fitness:</strong> Demonstrating self-discipline and energy
                </li>
                <li>
                  <strong>Posture and Movement:</strong> Carrying yourself with confidence and purpose
                </li>
              </ul>

              <div className="my-8 p-6 bg-forest-green/5 rounded-lg border border-forest-green/10">
                <h4 className="text-forest-green font-playfair text-xl mb-3">Executive Presence Myth</h4>
                <p className="mb-0">
                  <strong>Myth:</strong> Executive presence is innate—you either have it or you don't.
                  <br />
                  <strong>Reality:</strong> Executive presence is a learnable set of skills that can be developed
                  through deliberate practice and coaching.
                </p>
              </div>

              <h2>Building Gravitas: The Foundation of Leadership</h2>

              <h3>Developing Emotional Intelligence</h3>

              <p>Leaders with strong executive presence excel at managing their emotions and reading others:</p>

              <ul>
                <li>
                  <strong>Self-Awareness:</strong> Understanding your emotional triggers and patterns
                </li>
                <li>
                  <strong>Self-Regulation:</strong> Managing your responses, especially under pressure
                </li>
                <li>
                  <strong>Empathy:</strong> Reading and responding to others' emotional states
                </li>
                <li>
                  <strong>Social Skills:</strong> Building rapport and influencing others positively
                </li>
              </ul>

              <h3>Cultivating Decisiveness</h3>

              <p>
                Executive presence requires the ability to make decisions confidently, even with incomplete information:
              </p>

              <ul>
                <li>Gather sufficient information quickly and efficiently</li>
                <li>Consider multiple perspectives and potential outcomes</li>
                <li>Make decisions within appropriate timeframes</li>
                <li>Communicate decisions clearly and stand behind them</li>
                <li>Learn from outcomes and adjust future decision-making</li>
              </ul>

              <h3>Demonstrating Integrity</h3>

              <p>Trust is the foundation of leadership influence. Build it through:</p>

              <ul>
                <li>Consistency between your words and actions</li>
                <li>Transparency in your decision-making process</li>
                <li>Admitting mistakes and taking responsibility</li>
                <li>Standing up for your values, even when it's difficult</li>
                <li>Treating all people with respect and dignity</li>
              </ul>

              <h2>Mastering Executive Communication</h2>

              <h3>The Power of Presence in Speaking</h3>

              <p>How you speak is often more important than what you say:</p>

              <ul>
                <li>
                  <strong>Pace and Pause:</strong> Speak deliberately and use strategic pauses for emphasis
                </li>
                <li>
                  <strong>Vocal Variety:</strong> Vary your tone, volume, and inflection to maintain engagement
                </li>
                <li>
                  <strong>Clarity:</strong> Articulate clearly and avoid filler words
                </li>
                <li>
                  <strong>Conciseness:</strong> Make your point efficiently without unnecessary elaboration
                </li>
                <li>
                  <strong>Conviction:</strong> Speak with confidence and belief in your message
                </li>
              </ul>

              <h3>Strategic Listening</h3>

              <p>Executive presence includes being fully present and engaged when others speak:</p>

              <ul>
                <li>Give your complete attention to the speaker</li>
                <li>Ask thoughtful questions that demonstrate understanding</li>
                <li>Summarize and reflect back what you've heard</li>
                <li>Respond to the emotion behind the words, not just the content</li>
                <li>Use listening to build relationships and gather intelligence</li>
              </ul>

              <h3>Commanding the Room</h3>

              <p>Executive presence is often most visible when you're leading meetings or presenting:</p>

              <ul>
                <li>
                  <strong>Enter with Purpose:</strong> Walk into rooms with confidence and intention
                </li>
                <li>
                  <strong>Strategic Positioning:</strong> Choose seating or standing positions that enhance your
                  influence
                </li>
                <li>
                  <strong>Eye Contact:</strong> Connect with individuals throughout the room
                </li>
                <li>
                  <strong>Inclusive Facilitation:</strong> Draw out contributions from all participants
                </li>
                <li>
                  <strong>Graceful Handling of Challenges:</strong> Address difficult questions or situations with
                  composure
                </li>
              </ul>

              <div className="my-8 p-6 bg-forest-green/5 rounded-lg border border-forest-green/10">
                <h4 className="text-forest-green font-playfair text-xl mb-3">Communication Framework</h4>
                <p className="mb-2">
                  <strong>CLEAR Method for Executive Communication:</strong>
                </p>
                <ul className="mb-0">
                  <li>
                    <strong>C</strong>oncise: Get to the point quickly
                  </li>
                  <li>
                    <strong>L</strong>ogical: Structure your thoughts coherently
                  </li>
                  <li>
                    <strong>E</strong>ngaging: Connect emotionally with your audience
                  </li>
                  <li>
                    <strong>A</strong>ctionable: Provide clear next steps
                  </li>
                  <li>
                    <strong>R</strong>espectful: Honor different perspectives and experiences
                  </li>
                </ul>
              </div>

              <h2>The Role of Authentic Leadership</h2>

              <h3>Finding Your Leadership Voice</h3>

              <p>Executive presence isn't about copying other leaders—it's about amplifying your authentic self:</p>

              <ul>
                <li>Identify your core values and leadership principles</li>
                <li>Understand your natural communication style and strengths</li>
                <li>Develop your unique perspective and point of view</li>
                <li>Practice expressing your authentic self in professional settings</li>
                <li>Seek feedback on how others experience your leadership</li>
              </ul>

              <h3>Balancing Confidence and Humility</h3>

              <p>The most effective leaders combine strong confidence with genuine humility:</p>

              <ul>
                <li>
                  <strong>Confident Humility:</strong> Being secure enough to admit what you don't know
                </li>
                <li>
                  <strong>Learning Orientation:</strong> Continuously seeking to grow and improve
                </li>
                <li>
                  <strong>Credit Sharing:</strong> Acknowledging others' contributions to success
                </li>
                <li>
                  <strong>Vulnerability:</strong> Showing appropriate human connection without undermining authority
                </li>
              </ul>

              <h2>Executive Presence in Different Contexts</h2>

              <h3>Virtual Leadership Presence</h3>

              <p>In our digital-first world, executive presence must translate to virtual environments:</p>

              <ul>
                <li>Master the technology to avoid distractions</li>
                <li>Optimize your visual presentation (lighting, background, camera angle)</li>
                <li>Adapt your communication style for virtual audiences</li>
                <li>Use digital tools strategically to enhance engagement</li>
                <li>Maintain energy and connection despite physical distance</li>
              </ul>

              <h3>Crisis Leadership</h3>

              <p>Executive presence is most critical during challenging times:</p>

              <ul>
                <li>
                  <strong>Calm in the Storm:</strong> Projecting stability when others are anxious
                </li>
                <li>
                  <strong>Clear Communication:</strong> Providing transparent, frequent updates
                </li>
                <li>
                  <strong>Decisive Action:</strong> Making tough decisions quickly when needed
                </li>
                <li>
                  <strong>Empathetic Leadership:</strong> Acknowledging the human impact of difficult situations
                </li>
                <li>
                  <strong>Future Focus:</strong> Helping others see beyond the immediate crisis
                </li>
              </ul>

              <h2>Developing Your Executive Presence Action Plan</h2>

              <h3>Self-Assessment</h3>

              <p>Begin by honestly evaluating your current executive presence:</p>

              <ul>
                <li>Seek 360-degree feedback from colleagues, supervisors, and direct reports</li>
                <li>Record yourself presenting or leading meetings</li>
                <li>Assess your gravitas, communication, and appearance objectively</li>
                <li>Identify specific areas for improvement</li>
                <li>Set measurable goals for development</li>
              </ul>

              <h3>Practice and Development</h3>

              <p>Executive presence improves through deliberate practice:</p>

              <ul>
                <li>
                  <strong>Join Speaking Organizations:</strong> Practice public speaking in supportive environments
                </li>
                <li>
                  <strong>Seek Stretch Assignments:</strong> Take on roles that challenge your leadership skills
                </li>
                <li>
                  <strong>Find Mentors:</strong> Learn from leaders you admire
                </li>
                <li>
                  <strong>Work with Coaches:</strong> Get professional guidance on specific development areas
                </li>
                <li>
                  <strong>Practice Daily:</strong> Incorporate presence-building activities into your routine
                </li>
              </ul>

              <h3>Measuring Progress</h3>

              <p>Track your development through multiple indicators:</p>

              <ul>
                <li>Regular feedback from trusted colleagues</li>
                <li>Increased invitations to high-level meetings</li>
                <li>Greater influence in decision-making processes</li>
                <li>Positive changes in team engagement and performance</li>
                <li>Enhanced reputation within your organization and industry</li>
              </ul>

              <h2>Common Executive Presence Derailers</h2>

              <p>Avoid these behaviors that can undermine your executive presence:</p>

              <ul>
                <li>
                  <strong>Overtalking:</strong> Dominating conversations instead of facilitating them
                </li>
                <li>
                  <strong>Emotional Reactivity:</strong> Losing composure under pressure
                </li>
                <li>
                  <strong>Inconsistency:</strong> Saying one thing and doing another
                </li>
                <li>
                  <strong>Micromanaging:</strong> Failing to delegate and trust others
                </li>
                <li>
                  <strong>Perfectionism:</strong> Being paralyzed by the need to have all the answers
                </li>
                <li>
                  <strong>Arrogance:</strong> Dismissing others' ideas or contributions
                </li>
                <li>
                  <strong>Indecisiveness:</strong> Avoiding difficult decisions or taking too long to decide
                </li>
              </ul>

              <h2>The Business Impact of Executive Presence</h2>

              <p>Developing strong executive presence delivers measurable business results:</p>

              <ul>
                <li>
                  <strong>Career Advancement:</strong> 67% faster promotion rates for leaders with strong presence
                </li>
                <li>
                  <strong>Team Performance:</strong> 25% higher engagement scores for teams led by high-presence leaders
                </li>
                <li>
                  <strong>Organizational Influence:</strong> Greater ability to drive change and innovation
                </li>
                <li>
                  <strong>Stakeholder Confidence:</strong> Increased trust from boards, investors, and clients
                </li>
                <li>
                  <strong>Talent Attraction:</strong> Top performers want to work for inspiring leaders
                </li>
              </ul>

              <h2>Conclusion: Your Executive Presence Journey</h2>

              <p>
                Executive presence is not a destination but a continuous journey of growth and refinement. It's about
                becoming the leader others want to follow—not because they have to, but because they're inspired by your
                vision, trust your judgment, and believe in your ability to guide them toward success.
              </p>

              <p>
                The most successful executives understand that presence is not about perfection—it's about authenticity,
                continuous learning, and the courage to lead with both confidence and humility. It's about being fully
                present in every interaction and bringing out the best in yourself and others.
              </p>

              <p>
                Remember that developing executive presence is an investment in your leadership legacy. The skills you
                build today will serve you throughout your career and enable you to make a lasting impact on your
                organization and the people you lead.
              </p>

              <p>
                At Graceful & Poised, we specialize in helping executives develop the authentic presence that drives
                leadership success. If you'd like personalized coaching on executive presence or other aspects of
                leadership development, we invite you to{" "}
                <a href="/contact" className="text-antique-gold hover:text-antique-gold-dark">
                  contact us
                </a>{" "}
                for a consultation.
              </p>
            </div>

            {/* Author Bio */}
            <div className="bg-forest-green/5 p-6 rounded-lg mb-12">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
                  <Image src="/images/founder-new.jpeg" alt="Article author" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-forest-green">Graceful & Poised Team</h3>
                  <p className="text-gray-600">
                    Etiquette experts specializing in executive presence, business protocol, and professional
                    development for global leaders.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mb-12">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-forest-green">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <Link href="/blog/diplomatic-communication-in-business">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/images/blog/diplomatic-communication.png"
                        alt="Diplomatic communication"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-playfair text-lg font-bold mb-2 text-forest-green">
                        The Art of Diplomatic Communication in Business
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Master the subtle skills that build bridges and resolve conflicts gracefully.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <Link href="/blog/master-executive-dining-etiquette">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/images/blog/executive-dining.png"
                        alt="Executive dining etiquette"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-playfair text-lg font-bold mb-2 text-forest-green">
                        How to Master Executive Dining Etiquette
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Navigate business meals with confidence using these essential dining etiquette rules.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-forest-green text-white p-8 rounded-lg text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4 text-antique-gold">
                Develop Your Executive Presence
              </h3>
              <p className="mb-6 text-sandstone">
                Ready to command respect and influence as a leader? Our expert coaches provide personalized guidance for
                developing authentic executive presence.
              </p>
              <Button className="bg-antique-gold hover:bg-antique-gold-dark text-forest-green font-medium px-8 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center text-antique-gold hover:text-antique-gold-dark transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
