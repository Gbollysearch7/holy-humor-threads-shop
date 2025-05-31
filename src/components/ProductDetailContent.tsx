
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { DetailedProduct } from "@/data/enhancedProducts";
import { Star, Plus, Minus, Heart } from "lucide-react";

interface ProductDetailContentProps {
  product: DetailedProduct;
}

export const ProductDetailContent = ({ product }: ProductDetailContentProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before adding to cart",
        variant: "destructive"
      });
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize
    });

    toast({
      title: "Added to cart!",
      description: `${product.name} (${selectedSize}) has been added to your cart`,
    });
  };

  const incrementQuantity = () => {
    if (quantity < product.stockCount) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="aspect-square bg-gradient-to-br from-holy-blue/10 to-holy-gold/10 dark:from-holy-gold/10 dark:to-holy-blue/10 rounded-lg flex items-center justify-center">
          <div className="text-8xl animate-float">
            {product.image}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          {product.gallery.map((img, index) => (
            <div 
              key={index}
              className="aspect-square bg-gradient-to-br from-holy-blue/5 to-holy-gold/5 dark:from-holy-gold/5 dark:to-holy-blue/5 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-holy-blue/15 hover:to-holy-gold/15 transition-colors"
            >
              <div className="text-2xl">{img}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <Badge className="mb-2 capitalize">{product.category}</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold text-holy-blue dark:text-holy-gold mb-2">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-foreground/60">
              ({product.reviewCount} reviews)
            </span>
          </div>
          
          <div className="text-3xl font-bold text-holy-blue dark:text-holy-gold mb-4">
            ${product.price}
          </div>
          
          <p className="text-foreground/70 text-lg">
            {product.description}
          </p>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="font-semibold mb-3">Size</h3>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSize(size)}
                className={selectedSize === size ? "bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900" : ""}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <h3 className="font-semibold mb-3">Quantity</h3>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="icon"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button 
              variant="outline" 
              size="icon"
              onClick={incrementQuantity}
              disabled={quantity >= product.stockCount}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-foreground/60 mt-1">
            {product.stockCount} items in stock
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            onClick={handleAddToCart}
            className="flex-1 bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Product Details Tabs */}
        <Card>
          <CardContent className="p-0">
            <div className="border-b">
              <div className="flex">
                {["description", "details", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium capitalize transition-colors ${
                      activeTab === tab 
                        ? "text-holy-blue dark:text-holy-gold border-b-2 border-holy-blue dark:border-holy-gold" 
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-6">
              {activeTab === "description" && (
                <div className="space-y-4">
                  <p className="text-foreground/70">{product.detailedDescription}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Materials</h4>
                    <p className="text-sm text-foreground/70">{product.materials}</p>
                  </div>
                </div>
              )}
              
              {activeTab === "details" && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Care Instructions</h4>
                    <p className="text-sm text-foreground/70">{product.careInstructions}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "reviews" && (
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.customerName}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">Verified</Badge>
                          )}
                        </div>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-sm text-foreground/70 mb-1">{review.comment}</p>
                      <p className="text-xs text-foreground/50">{review.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
