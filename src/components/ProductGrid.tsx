
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { enhancedProducts } from "@/data/productData";
import { DetailedProduct } from "@/types/product";

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
    if (category === "new-arrivals") {
      // For demo purposes, treat the first 4 products as new arrivals
      products = products.slice(0, 4);
    } else if (category !== "all") {
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
      {/* Product Count */}
      <div className="mb-6 text-sm text-foreground/60">
        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
      </div>

      {/* Product Grid - 5 columns on desktop, responsive on smaller screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product}
            delay={index * 0.1}
            compact={true}
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-2xl text-foreground/50">No products found in this category.</p>
          <p className="text-foreground/40 mt-2">Try selecting a different category or adjusting your filters.</p>
        </div>
      )}
    </div>
  );
};
