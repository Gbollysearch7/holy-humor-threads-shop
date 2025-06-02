
import { Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductDetailContent } from "@/components/ProductDetailContent";
import { RelatedProducts } from "@/components/RelatedProducts";
import { ProductDetailSkeleton } from "@/components/ProductDetailSkeleton";
import { getProductById } from "@/data/enhancedProducts";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return (
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation />
        <main className="container mx-auto px-4 py-16 text-center">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-destructive mb-4">
                Invalid Product URL
              </h1>
              <p className="text-foreground/70 mb-6">
                The product link appears to be broken or incomplete.
              </p>
              <Button onClick={() => navigate("/shop")}>
                Return to Shop
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation />
        <main className="container mx-auto px-4 py-16 text-center">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="text-6xl mb-4">😕</div>
              <h1 className="text-2xl font-bold text-holy-blue dark:text-holy-gold mb-4">
                Product Not Found
              </h1>
              <p className="text-foreground/70 mb-6">
                Sorry, we couldn't find the product you're looking for. It may have been removed or the link is incorrect.
              </p>
              <div className="space-y-3">
                <Button onClick={() => navigate("/shop")} className="w-full">
                  Browse All Products
                </Button>
                <Button variant="outline" onClick={() => navigate("/")} className="w-full">
                  Go to Homepage
                </Button>
              </div>
            </CardContent>
          </Card>
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

        <Suspense fallback={<ProductDetailSkeleton />}>
          <ProductDetailContent product={product} />
        </Suspense>
        
        <Suspense fallback={<div className="h-64 animate-pulse bg-muted rounded-lg" />}>
          <RelatedProducts productId={product.id} />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
