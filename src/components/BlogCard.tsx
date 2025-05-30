
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
  delay?: number;
}

export const BlogCard = ({ post, delay = 0 }: BlogCardProps) => {
  return (
    <Card 
      className="group hover-scale transition-all duration-300 hover:shadow-xl border border-border animate-scale-in cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-6">
        <div className="text-6xl text-center mb-4 group-hover:animate-float">
          {post.image}
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {post.category}
          </Badge>
          <div className="flex items-center text-xs text-foreground/60 gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-holy-blue dark:text-holy-gold mb-3 group-hover:text-holy-blue/80 dark:group-hover:text-holy-gold/80 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <div className="flex items-center text-xs text-foreground/60 gap-1">
          <Calendar className="h-3 w-3" />
          {post.date}
        </div>
      </CardFooter>
    </Card>
  );
};
