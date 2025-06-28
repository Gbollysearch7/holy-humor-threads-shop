
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const customerPhotos = [
  {
    id: 1,
    customerName: "Sarah M.",
    location: "Birmingham, UK",
    product: "Blessed & Caffeinated",
    image: "☕",
    testimonial: "Love wearing this to my morning coffee dates!"
  },
  {
    id: 2,
    customerName: "James K.",
    location: "Manchester, UK",
    product: "Faith Over Fear",
    image: "✝️",
    testimonial: "This shirt sparked amazing conversations at uni."
  },
  {
    id: 3,
    customerName: "Emma L.",
    location: "London, UK",
    product: "Holy Guacamole",
    image: "🥑",
    testimonial: "Gets laughs every time I wear it to church!"
  },
  {
    id: 4,
    customerName: "David R.",
    location: "Glasgow, UK",
    product: "Sunday Funday Vibes",
    image: "⛪",
    testimonial: "Perfect for our church's casual Sundays."
  },
  {
    id: 5,
    customerName: "Grace T.",
    location: "Cardiff, UK",
    product: "Jesus Saves... Files",
    image: "💾",
    testimonial: "My coworkers love this tech-savvy design!"
  },
  {
    id: 6,
    customerName: "Michael P.",
    location: "Liverpool, UK",
    product: "Pray More Worry Less",
    image: "🙏",
    testimonial: "Daily reminder that helps me stay centered."
  }
];

export const SocialProof = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md mb-6 border border-border">
            <span className="text-holy-gold">📸</span>
            <span className="text-holy-blue dark:text-holy-gold font-medium">Customer Gallery</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-6 text-shadow">
            Worn with <span className="text-holy-gold">Pride</span> & <span className="text-holy-blue">Joy</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            See how our customers are spreading faith and joy around the world. Join the community and share your own HOLYHUMOR moments!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-border hover-scale ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Customer Photo Area */}
              <div className="relative bg-gradient-to-br from-holy-blue/10 to-holy-gold/10 h-64 flex items-center justify-center">
                <div className="text-8xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {photo.image}
                </div>
                <div className="absolute top-4 right-4 bg-holy-gold text-holy-blue px-3 py-1 rounded-full text-xs font-bold">
                  Customer Photo
                </div>
              </div>

              {/* Customer Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-holy-blue to-holy-gold rounded-full flex items-center justify-center text-white font-bold">
                    {photo.customerName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground">{photo.customerName}</h3>
                    <p className="text-sm text-foreground/60">{photo.location}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="text-sm font-medium text-holy-blue dark:text-holy-gold">
                    Wearing: {photo.product}
                  </span>
                </div>
                
                <blockquote className="text-foreground/80 italic">
                  "{photo.testimonial}"
                </blockquote>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex text-holy-gold">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-xs text-foreground/60">Verified Purchase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`} style={{ animationDelay: '0.6s' }}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-4">
              Share Your HOLYHUMOR Moment!
            </h3>
            <p className="text-foreground/70 mb-6">
              Tag us @holyhumor on social media or email your photos to see your story featured here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-holy-blue dark:text-holy-gold">
                <span className="text-2xl">📧</span>
                <span className="font-medium">info@holyhumor.com</span>
              </div>
              <div className="flex items-center gap-2 text-holy-blue dark:text-holy-gold">
                <span className="text-2xl">📱</span>
                <span className="font-medium">#HolyHumorMoments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
