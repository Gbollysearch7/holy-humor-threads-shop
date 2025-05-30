
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: "👕",
    title: "Premium Quality Materials",
    description: "100% cotton, pre-shrunk, and built to last through countless washes and life's adventures."
  },
  {
    icon: "✝️",
    title: "Faith-Inspired Designs",
    description: "Every design is carefully crafted to honor God while bringing smiles and sparking meaningful conversations."
  },
  {
    icon: "💬",
    title: "Conversation Starters",
    description: "Wear your faith proudly and watch as your shirt opens doors to share God's love with others."
  }
];

export const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-6 text-shadow">
            Why Choose HOLYHUMOR?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We're more than just a t-shirt company - we're a community of believers spreading joy, one shirt at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 text-center border border-border hover-scale ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-6 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-4">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
