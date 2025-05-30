
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductFilter } from "@/components/ProductFilter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-4">
            Holy Humor Collection
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our faith-inspired designs that spread joy and start conversations
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <ProductFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </aside>
          
          <main className="lg:w-3/4">
            <ProductGrid 
              category={selectedCategory}
              sortBy={sortBy}
            />
          </main>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
