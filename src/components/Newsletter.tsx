
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-holy-blue to-blue-800 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-float">
            Get Blessed with Discounts! 
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community and be the first to know about new designs, special offers, and faith-filled inspiration.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-none text-gray-900 placeholder-gray-500 rounded-full px-6 py-4 transition-all duration-300 focus:scale-105"
              required
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-holy-gold hover:bg-yellow-500 text-holy-blue font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-blue-200 dark:text-gray-400 text-sm mt-4">
            No spam, just blessings! Unsubscribe anytime.
          </p>
          
          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 mt-12 text-blue-200 dark:text-gray-300 flex-wrap">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <span className="text-2xl animate-float">🔒</span>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <span className="text-2xl animate-float" style={{ animationDelay: '0.5s' }}>📦</span>
              <span>Free Shipping $50+</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <span className="text-2xl animate-float" style={{ animationDelay: '1s' }}>↩️</span>
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
