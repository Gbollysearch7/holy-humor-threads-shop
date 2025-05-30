
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const OurStory = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold text-holy-blue dark:text-holy-gold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Where faith meets fashion, and every shirt tells a story of hope, humor, and holy conversations.
            </p>
          </div>

          {/* Origin Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-holy-blue dark:text-holy-gold mb-6">
                It All Started with a Simple Idea
              </h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  In 2020, during one of the most challenging times in recent history, our founder Sarah 
                  discovered something beautiful: faith-filled humor has the power to bridge gaps, 
                  start conversations, and bring light to dark moments.
                </p>
                <p>
                  It began with a simple t-shirt design - "Blessed & Caffeinated" - worn to her local 
                  coffee shop. What happened next was magical. Strangers approached her with smiles, 
                  conversations about faith naturally flowed, and suddenly, a piece of clothing became 
                  a ministry tool.
                </p>
                <p>
                  That's when HOLYHUMOR was born - not just as a clothing brand, but as a movement 
                  to help believers everywhere share their faith through joy, humor, and authentic conversation.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-9xl mb-4 animate-float">☕</div>
              <p className="text-sm text-foreground/60 italic">
                Where it all began - one coffee shop conversation at a time
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-holy-blue dark:text-holy-gold mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
                To create conversation-starting, joy-spreading, faith-sharing apparel that helps 
                believers everywhere live out their faith with confidence, humor, and love.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-holy-blue dark:text-white mb-2">Start Conversations</h3>
                <p className="text-foreground/70">
                  Every design is crafted to naturally open doors for meaningful discussions about faith.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">😊</div>
                <h3 className="text-xl font-bold text-holy-blue dark:text-white mb-2">Spread Joy</h3>
                <p className="text-foreground/70">
                  Faith should be joyful! Our designs combine humor with hope to brighten everyone's day.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-holy-blue dark:text-white mb-2">Share Love</h3>
                <p className="text-foreground/70">
                  At the heart of everything we do is God's love - and we want that love to shine through.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-holy-blue dark:text-holy-gold text-center mb-12">
              What We Believe
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-holy-gold pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Faith in Action</h3>
                  <p className="text-foreground/80">
                    We believe faith is meant to be lived out loud, shared with others, and expressed 
                    in creative, authentic ways.
                  </p>
                </div>
                <div className="border-l-4 border-holy-gold pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Quality Matters</h3>
                  <p className="text-foreground/80">
                    Every shirt is made with premium materials because we believe in offering our 
                    best, just as God gives His best to us.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-holy-gold pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Community First</h3>
                  <p className="text-foreground/80">
                    We're not just selling shirts - we're building a community of believers who 
                    support and encourage one another.
                  </p>
                </div>
                <div className="border-l-4 border-holy-gold pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Giving Back</h3>
                  <p className="text-foreground/80">
                    A portion of every purchase goes to support local churches and faith-based 
                    organizations in their community outreach efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-center">
              <div className="text-9xl mb-4 animate-float">👩‍💼</div>
              <h3 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-2">Sarah Thompson</h3>
              <p className="text-foreground/60">Founder & Chief Joy Officer</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-holy-blue dark:text-holy-gold mb-6">
                A Heart for Ministry
              </h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  "I never imagined that a simple t-shirt could become such a powerful ministry tool. 
                  But that's exactly what God has done through HOLYHUMOR."
                </p>
                <p>
                  "Every design starts with prayer, every message is carefully crafted to honor God, 
                  and every customer becomes part of our extended family. This isn't just business 
                  for us - it's ministry."
                </p>
                <p>
                  "My prayer is that when you wear HOLYHUMOR, you feel confident, joyful, and ready 
                  to share the hope that lives within you. Because that's what this is all about - 
                  spreading God's love, one conversation at a time."
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-holy-blue dark:bg-holy-gold rounded-3xl p-12 text-white dark:text-gray-900">
            <h2 className="text-3xl font-bold mb-6">Join Our Story</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to be part of something bigger? Join thousands of believers who are spreading 
              faith, joy, and hope through conversation-starting fashion.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-holy-blue dark:bg-gray-900 dark:text-holy-gold border-white dark:border-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Shop Our Collection
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
