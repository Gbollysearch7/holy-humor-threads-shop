
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { FeaturedBlogPost } from "@/components/FeaturedBlogPost";
import { DailyDevotional } from "@/components/DailyDevotional";
import { BlogCategories } from "@/components/BlogCategories";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "5 Ways to Start Faith Conversations",
    excerpt: "Simple and natural ways to share your faith through everyday interactions while wearing your values with style.",
    category: "Lifestyle",
    readTime: "5 min read",
    date: "December 15, 2024",
    image: "💬",
    featured: true
  },
  {
    id: "2",
    title: "Customer Spotlight: Sarah's Story",
    excerpt: "How one customer used our 'Blessed & Caffeinated' tee to start meaningful conversations at her workplace.",
    category: "Community",
    readTime: "3 min read",
    date: "December 10, 2024",
    image: "⭐"
  },
  {
    id: "3",
    title: "Behind the Design: Blessed & Caffeinated",
    excerpt: "The inspiration and creative process behind one of our most popular designs, from concept to completion.",
    category: "Behind-the-Scenes",
    readTime: "4 min read",
    date: "December 5, 2024",
    image: "🎨"
  },
  {
    id: "4",
    title: "Faith in the Workplace",
    excerpt: "Practical tips for living out your faith authentically in professional environments.",
    category: "Faith",
    readTime: "6 min read",
    date: "November 30, 2024",
    image: "💼"
  },
  {
    id: "5",
    title: "Styling Your Faith: Fashion Meets Purpose",
    excerpt: "How to incorporate faith-based apparel into your everyday wardrobe with confidence and style.",
    category: "Lifestyle",
    readTime: "4 min read",
    date: "November 25, 2024",
    image: "👗"
  },
  {
    id: "6",
    title: "Building Community Through Shared Values",
    excerpt: "The power of faith-based fashion in creating connections and building meaningful relationships.",
    category: "Community",
    readTime: "5 min read",
    date: "November 20, 2024",
    image: "🤝"
  }
];

const categories = ["All", "Faith", "Lifestyle", "Community", "Behind-the-Scenes"];

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="animate-fade-in">
        {/* Daily Devotional Section */}
        <DailyDevotional />
        
        <div className="container mx-auto px-4 py-16">
          <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
          }`}>
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-4">
                Faith & Life Blog
              </h1>
              <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                Stories, inspiration, and insights from our community of faith-filled individuals
              </p>
              
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-holy-blue dark:focus:ring-holy-gold"
                  />
                </div>
                
                <div className="flex gap-2 flex-wrap justify-center">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={category === "All" ? "default" : "outline"}
                      size="sm"
                      className="hover:scale-105 transition-transform duration-200"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-6">Featured Post</h2>
                <FeaturedBlogPost post={featuredPost} />
              </div>
            )}

            {/* Blog Posts Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-6">Latest Posts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} delay={index * 0.1} />
                ))}
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center mb-16">
              <Button className="bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900 px-8 py-3">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Categories Section */}
        <BlogCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
