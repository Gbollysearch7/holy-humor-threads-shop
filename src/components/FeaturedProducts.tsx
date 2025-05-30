
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    id: 1,
    name: "Blessed & Caffeinated",
    price: "$24.99",
    image: "☕",
    category: "Faith & Fun"
  },
  {
    id: 2,
    name: "Jesus Loves You (But I'm His Favorite)",
    price: "$22.99",
    image: "😇",
    category: "Scripture & Giggles"
  },
  {
    id: 3,
    name: "Holy Guacamole",
    price: "$23.99",
    image: "🥑",
    category: "Biblical Humor"
  },
  {
    id: 4,
    name: "Pray More, Worry Less",
    price: "$25.99",
    image: "🙏",
    category: "Faith & Fun"
  },
  {
    id: 5,
    name: "Sunday Funday Vibes",
    price: "$24.99",
    image: "⛪",
    category: "Sunday School Sass"
  },
  {
    id: 6,
    name: "Faith It Till You Make It",
    price: "$23.99",
    image: "💪",
    category: "Christian Dad Jokes"
  }
];

export const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-6 text-shadow">
            Best Selling Designs
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our most popular faith-inspired designs that bring joy and start conversations wherever you go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-border hover-scale ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 h-64 flex items-center justify-center transition-colors duration-300">
                  <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {product.image}
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-holy-gold text-holy-blue px-3 py-1 rounded-full text-sm font-bold">
                  {product.category}
                </div>
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-holy-blue/90 dark:bg-gray-900/90 flex items-center justify-center transition-all duration-300 animate-fade-in">
                    <Button 
                      variant="secondary" 
                      className="bg-holy-gold hover:bg-yellow-500 text-holy-blue font-bold transform hover:scale-110 transition-transform duration-300"
                    >
                      Quick View
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-holy-gold">{product.price}</span>
                  <div className="flex items-center text-holy-gold">
                    <span className="text-sm mr-1">★★★★★</span>
                    <span className="text-foreground/60 text-sm">(127)</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-4 bg-holy-blue hover:bg-blue-700 dark:bg-holy-gold dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-medium transition-all duration-300 hover:scale-105"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-holy-blue dark:border-holy-gold text-holy-blue dark:text-holy-gold hover:bg-holy-blue dark:hover:bg-holy-gold hover:text-white dark:hover:text-gray-900 px-8 py-4 font-bold rounded-full hover-scale"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
