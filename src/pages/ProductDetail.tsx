
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductDetailContent } from "@/components/ProductDetailContent";
import { RelatedProducts } from "@/components/RelatedProducts";
import { getProductById } from "@/data/enhancedProducts";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-holy-blue dark:text-holy-gold mb-4">
            Product Not Found
          </h1>
          <p className="text-foreground/70 mb-8">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Button onClick={() => navigate("/shop")}>
            Return to Shop
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-foreground/60">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/shop")}
            className="p-0 h-auto font-normal hover:text-holy-blue dark:hover:text-holy-gold"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Shop
          </Button>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <ProductDetailContent product={product} />
        
        <RelatedProducts productId={product.id} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
