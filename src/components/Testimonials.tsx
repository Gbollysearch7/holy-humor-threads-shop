
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "👩",
    rating: 5,
    text: "I love my 'Blessed & Caffeinated' shirt! It's so comfortable and always gets compliments at church. Quality is amazing!"
  },
  {
    name: "Mike Thompson",
    image: "👨",
    rating: 5,
    text: "Perfect conversation starter! Wore my 'Faith It Till You Make It' shirt to the gym and had three people ask about it."
  },
  {
    name: "Emma Davis",
    image: "👩‍🦰",
    rating: 5,
    text: "Fast shipping, great quality, and my daughter loves her 'Holy Guacamole' shirt. Will definitely order again!"
  }
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-6 text-shadow">
            What Our Community Says
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Join thousands of believers who are spreading joy and faith through our designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg border border-border transition-all duration-500 hover:shadow-xl hover-scale ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-holy-gold rounded-full flex items-center justify-center text-3xl mr-4 animate-float">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-holy-blue dark:text-white">{testimonial.name}</h4>
                  <div className="flex text-holy-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80 italic leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
