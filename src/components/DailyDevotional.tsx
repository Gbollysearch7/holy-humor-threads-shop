
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Clock } from "lucide-react";

const todayDevotional = {
  date: new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }),
  title: "Finding Joy in the Journey",
  verse: "Rejoice in the Lord always. I will say it again: Rejoice!",
  reference: "Philippians 4:4",
  content: "Today, God reminds us that joy isn't dependent on our circumstances—it's a choice we make daily. Even when life feels overwhelming, we can find reasons to celebrate God's goodness. Your faith-filled style isn't just about what you wear; it's about the joy you carry and share with others.",
  prayer: "Heavenly Father, help me choose joy today, even in difficult moments. Let my life be a reflection of Your goodness, and may others see Your light through my words, actions, and the way I present myself to the world. Amen.",
  actionStep: "Compliment someone today and share why their presence brings you joy.",
  readTime: "2 min read"
};

export const DailyDevotional = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-gradient-to-br from-holy-blue/5 to-holy-gold/5 dark:from-holy-gold/5 dark:to-holy-blue/5">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-holy-blue text-white dark:bg-holy-gold dark:text-gray-900">
              Today's Devotional
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-holy-blue dark:text-holy-gold mb-2">
              Daily Bread for Your Soul
            </h2>
            <p className="text-foreground/70">
              Start your day with God's word and encouragement
            </p>
          </div>

          <Card className="border-2 border-holy-gold/20 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2 text-sm text-foreground/60 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{todayDevotional.date}</span>
                <Clock className="h-4 w-4 ml-2" />
                <span>{todayDevotional.readTime}</span>
              </div>
              <CardTitle className="text-2xl text-holy-blue dark:text-holy-gold">
                {todayDevotional.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Scripture Verse */}
              <div className="bg-holy-gold/10 dark:bg-holy-blue/10 rounded-lg p-6 text-center">
                <BookOpen className="h-8 w-8 text-holy-blue dark:text-holy-gold mx-auto mb-4" />
                <blockquote className="text-lg font-medium text-holy-blue dark:text-holy-gold mb-2">
                  "{todayDevotional.verse}"
                </blockquote>
                <cite className="text-sm text-foreground/70">
                  - {todayDevotional.reference}
                </cite>
              </div>

              {/* Devotional Content */}
              <div>
                <h4 className="font-semibold text-holy-blue dark:text-holy-gold mb-3">Today's Reflection</h4>
                <p className="text-foreground/80 leading-relaxed">
                  {todayDevotional.content}
                </p>
              </div>

              {/* Prayer */}
              <div>
                <h4 className="font-semibold text-holy-blue dark:text-holy-gold mb-3">Prayer</h4>
                <p className="text-foreground/80 italic leading-relaxed">
                  {todayDevotional.prayer}
                </p>
              </div>

              {/* Action Step */}
              <div className="bg-background/50 rounded-lg p-4 border border-border">
                <h4 className="font-semibold text-holy-blue dark:text-holy-gold mb-2">Today's Challenge</h4>
                <p className="text-foreground/80">
                  {todayDevotional.actionStep}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900 flex-1">
                  Share Today's Devotional
                </Button>
                <Button variant="outline" className="flex-1">
                  Subscribe to Daily Devotionals
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
