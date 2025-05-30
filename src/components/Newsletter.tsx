
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    // Here you would typically send the email to your newsletter service
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Blessed with Discounts! 
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community and be the first to know about new designs, special offers, and faith-filled inspiration.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-none text-gray-900 placeholder-gray-500 rounded-full px-6 py-4"
              required
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-blue-200 text-sm mt-4">
            No spam, just blessings! Unsubscribe anytime.
          </p>
          
          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 mt-12 text-blue-200">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📦</span>
              <span>Free Shipping $50+</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">↩️</span>
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
