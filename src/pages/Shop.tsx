
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductFilter } from "@/components/ProductFilter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div ref={ref} className={`text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-4">
            Holy Humor Collection
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our faith-inspired designs that spread joy and start conversations
          </p>
        </div>

        {/* Mobile Filter Button */}
        {isMobile && (
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              onClick={() => setShowMobileFilters(true)}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              Filters & Sort
            </Button>
            <div className="text-sm text-foreground/60">
              {/* Product count will be passed from ProductGrid */}
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4 order-2 lg:order-1">
            <ProductGrid 
              category={selectedCategory}
              sortBy={sortBy}
            />
          </main>
          
          {/* Desktop Filters - Right Side */}
          <aside className="lg:w-1/4 order-1 lg:order-2">
            <div className="hidden lg:block">
              <ProductFilter 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>
          </aside>
        </div>

        {/* Mobile Filter Modal */}
        {isMobile && showMobileFilters && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
            <div className="bg-background w-full max-h-[80vh] overflow-y-auto rounded-t-2xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters & Sort</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <X size={20} />
                </Button>
              </div>
              <ProductFilter 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                sortBy={sortBy}
                onSortChange={setSortBy}
                isMobile={true}
                onClose={() => setShowMobileFilters(false)}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
