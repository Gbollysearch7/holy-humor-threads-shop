
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProductCard } from "@/components/ProductCard";
import { enhancedProducts } from "@/data/enhancedProducts";

interface ProductRecommendationsProps {
  currentProductId?: string;
  title?: string;
  limit?: number;
}

export const ProductRecommendations = ({ 
  currentProductId, 
  title = "Customers Also Bought",
  limit = 4 
}: ProductRecommendationsProps) => {
  const { ref, isVisible } = useScrollAnimation();

  // Filter out current product and get random recommendations
  const recommendations = enhancedProducts
    .filter(product => product.id !== currentProductId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);

  if (recommendations.length === 0) return null;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-holy-blue dark:text-holy-gold mb-4">
            {title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Complete your faith-filled wardrobe with these popular choices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} delay={index * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
