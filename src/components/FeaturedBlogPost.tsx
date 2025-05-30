
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

interface FeaturedBlogPostProps {
  post: BlogPost;
}

export const FeaturedBlogPost = ({ post }: FeaturedBlogPostProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-border">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="bg-gradient-to-br from-holy-blue/10 to-holy-gold/10 dark:from-holy-gold/10 dark:to-holy-blue/10 flex items-center justify-center p-12">
            <div className="text-8xl animate-float">
              {post.image}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-holy-blue text-white dark:bg-holy-gold dark:text-gray-900">
                  Featured
                </Badge>
                <Badge variant="secondary">
                  {post.category}
                </Badge>
              </div>
              
              <h2 className="text-3xl font-bold text-holy-blue dark:text-holy-gold mb-4 leading-tight">
                {post.title}
              </h2>
              
              <p className="text-foreground/70 mb-6 text-lg leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-foreground/60 mb-6">
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
            
            <Button className="bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900 group w-fit">
              Read Full Post
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
