import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { enhancedProducts, DetailedProduct } from "@/data/enhancedProducts";

interface ProductGridProps {
  category: string;
  sortBy: string;
}

export const ProductGrid = ({ category, sortBy }: ProductGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState<DetailedProduct[]>(enhancedProducts);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    let products = [...enhancedProducts];

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
