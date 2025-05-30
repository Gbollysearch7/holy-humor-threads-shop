
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const communityStories = [
  {
    id: 1,
    image: "👨‍💼",
    name: "David K.",
    story: "Wore my 'Faith It Till You Make It' shirt to a business meeting. It sparked an amazing conversation about faith in the workplace!",
    location: "Dallas, TX",
    product: "Faith It Till You Make It"
  },
  {
    id: 2,
    image: "👩‍🏫",
    name: "Maria S.",
    story: "My students love my 'Blessed & Caffeinated' shirt! It's become our classroom motto during exam season.",
    location: "Phoenix, AZ",
    product: "Blessed & Caffeinated"
  },
  {
    id: 3,
    image: "👨‍👩‍👧‍👦",
    name: "The Johnson Family",
    story: "We all wore our matching 'Holy Guacamole' shirts to the church picnic. It was such a hit with the kids and adults!",
    location: "Nashville, TN",
    product: "Holy Guacamole"
  },
  {
    id: 4,
    image: "👩‍⚕️",
    name: "Sarah L.",
    story: "Working long hospital shifts, my 'Pray More Worry Less' shirt reminds me and my patients what really matters.",
    location: "Denver, CO",
    product: "Pray More Worry Less"
  },
  {
    id: 5,
    image: "👨‍🎓",
    name: "Pastor Mike",
    story: "The youth group went crazy for my 'Jesus Saves... Files' shirt! Perfect way to connect faith with their digital world.",
    location: "Orlando, FL",
    product: "Jesus Saves... Files"
  },
  {
    id: 6,
    image: "👩‍💻",
    name: "Rachel W.",
    story: "My 'Chosen & Loved' shirt has been a conversation starter at coffee shops. Love sharing God's love through fashion!",
    location: "Seattle, WA",
    product: "Chosen & Loved"
  }
];

export const CommunityStories = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-6 text-shadow">
            Stories from Our Community
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            See how our faith-inspired designs are sparking conversations and spreading joy in communities everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {communityStories.map((story, index) => (
            <div
              key={story.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-border transition-all duration-500 hover:shadow-xl hover-scale ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-holy-gold rounded-full flex items-center justify-center text-2xl mr-4 animate-float">
                  {story.image}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-holy-blue dark:text-white">{story.name}</h4>
                  <p className="text-sm text-foreground/60">{story.location}</p>
                </div>
              </div>
              
              <p className="text-foreground/80 italic leading-relaxed mb-4">
                "{story.story}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-holy-blue dark:text-holy-gold">
                  Wearing: {story.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-4">
            Share Your Story
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Have a story about how your HOLYHUMOR shirt started a conversation or brightened someone's day? 
            We'd love to hear it!
          </p>
          <Button 
            size="lg"
            className="bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900 transition-all duration-300 hover:scale-105"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};
