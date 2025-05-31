
import { ProductCard } from "@/components/ProductCard";
import { getRelatedProducts } from "@/data/enhancedProducts";

interface RelatedProductsProps {
  productId: string;
}

export const RelatedProducts = ({ productId }: RelatedProductsProps) => {
  const relatedProducts = getRelatedProducts(productId);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-8 text-center">
        You Might Also Like
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};
