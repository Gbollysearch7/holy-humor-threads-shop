
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-yellow-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-blue-900 mb-6 leading-tight">
              Where Faith
              <span className="block text-yellow-500">Meets Fun</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Wear Your Joy - Christian T-Shirts That Spark Conversations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-6xl">👕</div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">"Blessed & Caffeinated"</h3>
                <p className="text-gray-600">Starting at $24.99</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-pulse">
              <span className="text-2xl">💝</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
