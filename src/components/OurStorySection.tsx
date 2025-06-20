
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const statistics = [
  {
    icon: "💝",
    number: "10K+",
    label: "Happy Customers",
    color: "text-purple-500"
  },
  {
    icon: "😊",
    number: "50+",
    label: "Unique Designs",
    color: "text-yellow-500"
  },
  {
    icon: "⏰",
    number: "3+",
    label: "Years of Joy",
    color: "text-green-500"
  },
  {
    icon: "🌍",
    number: "25+",
    label: "States Reached",
    color: "text-blue-500"
  }
];

export const OurStorySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md mb-6 border border-border">
            <span className="text-red-500">❤️</span>
            <span className="text-holy-blue dark:text-holy-gold font-medium">Our Story</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-shadow">
            Where <span className="text-holy-blue">Faith</span> Meets <span className="text-holy-gold">Fun</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Born from a simple belief that faith should bring joy, not just solemnity. We're here to spark conversations, spread smiles, and remind everyone that God has a sense of humor too.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Our Mission */}
          <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-border transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
          }`}>
            <h3 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-6">Our Mission</h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                HOLYHUMOR was born when we saw too many people afraid to laugh in church, to smile about scripture, or to find humor in their daily walk with God. We believe faith and fun aren't opposites—they're companions.
              </p>
              <p>
                Every design is crafted with love, respect, and a healthy dose of holy wit. We're not just making apparel; we're creating conversation starters that spread joy wherever you go.
              </p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-border text-center transition-all duration-1000 hover:shadow-xl hover-scale ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-4xl mb-3 animate-float ${stat.color}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-holy-blue dark:text-holy-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-foreground/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bible Quote */}
        <div className={`mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`} style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-to-r from-holy-blue to-blue-700 dark:from-holy-blue dark:to-blue-800 rounded-2xl p-8 text-center text-white shadow-lg">
            <blockquote className="text-xl lg:text-2xl font-medium italic mb-4 leading-relaxed">
              "A joyful heart is good medicine, but a crushed spirit dries up the bones."
            </blockquote>
            <cite className="text-blue-200 font-medium">— Proverbs 17:22</cite>
          </div>
        </div>

        {/* Spreading Joy Daily */}
        <div className={`bg-gradient-to-r from-holy-gold to-yellow-500 rounded-2xl p-8 text-center shadow-lg transition-all duration-1000 ${
          isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`} style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl animate-float">😊</span>
            <h3 className="text-2xl font-bold text-holy-blue">Spreading Joy Daily</h3>
          </div>
          <p className="text-holy-blue text-lg font-medium">
            Every shirt sold is a smile shared, every design is a moment of joy in someone's day.
          </p>
        </div>

        {/* What We Stand For */}
        <div className={`mt-20 text-center transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-3xl lg:text-4xl font-bold text-holy-blue dark:text-holy-gold mb-6">
            What We Stand For
          </h3>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Our core values guide everything we create and every relationship we build
          </p>
        </div>
      </div>
    </section>
  );
};
