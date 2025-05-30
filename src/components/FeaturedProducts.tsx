
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Best Selling Designs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular faith-inspired designs that bring joy and start conversations wherever you go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-yellow-50 h-64 flex items-center justify-center">
                  <div className="text-6xl mb-4">{product.image}</div>
                </div>
                <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                  {product.category}
                </div>
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-90 flex items-center justify-center transition-all duration-300">
                    <Button 
                      variant="secondary" 
                      className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold"
                    >
                      Quick View
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-500">{product.price}</span>
                  <div className="flex items-center text-yellow-400">
                    <span className="text-sm mr-1">★★★★★</span>
                    <span className="text-gray-600 text-sm">(127)</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white font-medium"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 font-bold rounded-full"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
