
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Daily Devotionals",
    count: 30,
    description: "Start your day with God's word and inspiration",
    icon: "📖",
    color: "bg-holy-blue/10 hover:bg-holy-blue/20"
  },
  {
    name: "Faith in Fashion",
    count: 15,
    description: "How to wear your beliefs with style and confidence",
    icon: "👗",
    color: "bg-holy-gold/10 hover:bg-holy-gold/20"
  },
  {
    name: "Community Stories",
    count: 25,
    description: "Real stories from our faith-filled community",
    icon: "🤝",
    color: "bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/20 dark:hover:bg-purple-900/30"
  },
  {
    name: "Lifestyle",
    count: 20,
    description: "Living out your faith in everyday moments",
    icon: "🌟",
    color: "bg-green-100 hover:bg-green-200 dark:bg-green-900/20 dark:hover:bg-green-900/30"
  },
  {
    name: "Behind the Scenes",
    count: 12,
    description: "The story behind our designs and mission",
    icon: "🎨",
    color: "bg-pink-100 hover:bg-pink-200 dark:bg-pink-900/20 dark:hover:bg-pink-900/30"
  },
  {
    name: "Customer Spotlights",
    count: 18,
    description: "Celebrating our amazing community members",
    icon: "⭐",
    color: "bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/20 dark:hover:bg-orange-900/30"
  }
];

export const BlogCategories = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-holy-blue dark:text-holy-gold mb-4">
              Explore Our Content
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover faith-filled content across different topics and themes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                className="group"
              >
                <Card 
                  className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border ${
                    isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className={`p-6 ${category.color} transition-colors duration-300`}>
                    <div className="text-4xl mb-4 group-hover:animate-float">
                      {category.icon}
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-holy-blue dark:text-holy-gold">
                        {category.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {category.count} posts
                      </Badge>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
