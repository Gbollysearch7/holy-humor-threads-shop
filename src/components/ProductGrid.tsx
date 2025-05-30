import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
}

interface ProductGridProps {
  category: string;
  sortBy: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Blessed & Caffeinated",
    price: 24.99,
    category: "humor",
    image: "☕",
    description: "Perfect for coffee-loving Christians who need their daily dose of both caffeine and blessings.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "2",
    name: "Faith Over Fear",
    price: 26.99,
    category: "inspirational",
    image: "✝️",
    description: "A powerful reminder that with God, we can overcome any challenge life throws our way.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "3",
    name: "Holy Guacamole",
    price: 23.99,
    category: "humor",
    image: "🥑",
    description: "A holy twist on everyone's favorite exclamation. Perfect for foodie Christians!",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "4",
    name: "Chosen & Loved",
    price: 25.99,
    category: "inspirational",
    image: "💕",
    description: "A beautiful reminder of our identity in Christ and His unconditional love for us.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "5",
    name: "Jesus Saves... Files",
    price: 24.99,
    category: "humor",
    image: "💾",
    description: "For the tech-savvy believers who know Jesus saves more than just files!",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "6",
    name: "Pray More Worry Less",
    price: 26.99,
    category: "inspirational",
    image: "🙏",
    description: "A gentle reminder to turn our anxieties into prayers and trust God's plan.",
    sizes: ["S", "M", "L", "XL", "XXL"]
  }
];

export const ProductGrid = ({ category, sortBy }: ProductGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    let products = [...mockProducts];

    // Filter by category
    if (category !== "all") {
      products = products.filter(product => product.category === category);
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products.sort((a, b) => b.price - a.price);
        break;
      case "name":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for "featured"
        break;
    }

    setFilteredProducts(products);
  }, [category, sortBy]);

  return (
    <div ref={ref} className={`transition-all duration-1000 ${
      isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
    }`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product}
            delay={index * 0.1}
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-2xl text-foreground/50">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};
