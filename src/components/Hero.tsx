
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={ref} className={`text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
          }`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-holy-blue dark:text-white mb-6 leading-tight text-shadow">
              Where Faith
              <span className="block text-holy-gold animate-float">Meets Fun</span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Wear Your Joy - Christian T-Shirts That Spark Conversations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-holy-gold hover:bg-yellow-500 text-holy-blue font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover-scale"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-holy-blue dark:border-holy-gold text-holy-blue dark:text-holy-gold hover:bg-holy-blue dark:hover:bg-holy-gold hover:text-white dark:hover:text-gray-900 px-8 py-4 text-lg rounded-full transition-all duration-300 hover-scale"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
          }`}>
            <div className="bg-gradient-to-r from-holy-gold to-yellow-500 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="bg-background rounded-2xl p-6 text-center">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-yellow-100 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <div className="text-6xl animate-float">👕</div>
                </div>
                <h3 className="text-xl font-bold text-holy-blue dark:text-holy-gold mb-2">
                  "Blessed & Caffeinated"
                </h3>
                <p className="text-foreground/70">Starting at $24.99</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-background rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-2xl">💝</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
