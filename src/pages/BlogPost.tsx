
import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, Share2, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = {
  "faith-conversations": {
    id: "faith-conversations",
    title: "5 Ways to Start Faith Conversations",
    content: `
      <h2>Starting conversations about faith doesn't have to be intimidating</h2>
      <p>In our daily lives, we encounter countless opportunities to share God's love through simple, authentic conversations. Here are five natural ways to open doors for meaningful faith discussions:</p>
      
      <h3>1. Share Your Story</h3>
      <p>Personal testimonies are powerful. When someone asks about your peace during difficult times or your source of joy, that's your moment to share how faith has transformed your life.</p>
      
      <h3>2. Ask Thoughtful Questions</h3>
      <p>Show genuine interest in others' spiritual journeys. Questions like "What gives you hope?" or "How do you find peace in difficult times?" can open beautiful conversations.</p>
      
      <h3>3. Live Your Faith Visibly</h3>
      <p>Wearing faith-based apparel like our "Blessed & Caffeinated" collection naturally invites questions and comments, creating perfect conversation starters.</p>
      
      <h3>4. Offer to Pray</h3>
      <p>When someone shares a struggle, offering to pray for them shows God's love in action. Most people, regardless of their beliefs, appreciate genuine care.</p>
      
      <h3>5. Be Present in Difficult Moments</h3>
      <p>Sometimes the most powerful witness is simply being there. Your presence during someone's difficult season can speak volumes about God's love.</p>
      
      <blockquote>"Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." - Matthew 5:16</blockquote>
    `,
    category: "Lifestyle",
    readTime: "5 min read",
    date: "December 15, 2024",
    image: "💬",
    excerpt: "Simple and natural ways to share your faith through everyday interactions while wearing your values with style."
  },
  "customer-spotlight-sarah": {
    id: "customer-spotlight-sarah",
    title: "Customer Spotlight: Sarah's Story",
    content: `
      <h2>How One T-Shirt Sparked Workplace Revival</h2>
      <p>Meet Sarah, a marketing manager from Dallas, who discovered that her "Blessed & Caffeinated" tee would become more than just comfortable work attire.</p>
      
      <h3>The Coffee Connection</h3>
      <p>"I was grabbing my usual morning coffee when a colleague noticed my shirt," Sarah shares. "She laughed and said, 'I need both of those things!' That simple comment opened up a 30-minute conversation about faith, stress, and finding peace in our busy lives."</p>
      
      <h3>Creating Safe Spaces</h3>
      <p>What started as a casual comment evolved into regular coffee meetings. Sarah found that her shirt created a safe space for spiritual conversations in a typically secular environment.</p>
      
      <h3>The Ripple Effect</h3>
      <p>"Within months, we had a small group of colleagues meeting weekly for prayer and encouragement. My shirt wasn't just a fashion statement—it was God using a simple piece of clothing to build community."</p>
      
      <h3>Sarah's Advice</h3>
      <p>"Don't underestimate the power of wearing your faith. You never know who needs to see God's love today. Sometimes it's as simple as a shirt that makes someone smile and opens their heart."</p>
      
      <blockquote>"For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes." - Romans 1:16</blockquote>
    `,
    category: "Community",
    readTime: "3 min read",
    date: "December 10, 2024",
    image: "⭐",
    excerpt: "How one customer used our 'Blessed & Caffeinated' tee to start meaningful conversations at her workplace."
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const { ref, isVisible } = useScrollAnimation();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-holy-blue dark:text-holy-gold mb-4">
            Post Not Found
          </h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-holy-blue dark:text-holy-gold hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="bg-card rounded-lg border border-border p-8 mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{post.image}</div>
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl font-bold text-holy-blue dark:text-holy-gold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-sm text-foreground/60">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-holy-blue dark:prose-headings:text-holy-gold prose-blockquote:border-holy-gold prose-blockquote:bg-holy-gold/5 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Actions */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-border">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
              </div>
              <div className="text-sm text-foreground/60">
                Share this post with someone who needs encouragement today
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
