
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WishlistButton } from "@/components/WishlistButton";
import { QuickShop } from "@/components/QuickShop";
import { DetailedProduct } from "@/types/product";
import { toast } from "sonner";

interface ProductCardProps {
  product: DetailedProduct;
  delay?: number;
}

export const ProductCard = ({ product, delay = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickShop, setShowQuickShop] = useState(false);

  const handleQuickView = () => {
    setShowQuickShop(true);
  };

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart! 🛒`);
  };

  return (
    <>
      <div
        className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-border hover-scale group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 h-64 flex items-center justify-center transition-colors duration-300">
            {product.image.startsWith('/') ? (
              <img 
                src={product.image} 
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${delay * 0.2}s` }}>
                {product.image}
              </div>
            )}
          </div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNewArrival && (
              <Badge className="bg-green-500 hover:bg-green-600 text-white">
                New
              </Badge>
            )}
            {product.isOnSale && (
              <Badge className="bg-red-500 hover:bg-red-600 text-white">
                Sale
              </Badge>
            )}
            {product.isFeatured && (
              <Badge className="bg-holy-gold hover:bg-yellow-500 text-holy-blue">
                Featured
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <div className="absolute top-4 right-4">
            <WishlistButton 
              productId={product.id} 
              productName={product.name}
              size="sm"
            />
          </div>
          
          {/* Hover Overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-holy-blue/90 dark:bg-gray-900/90 flex items-center justify-center transition-all duration-300 animate-fade-in">
              <div className="flex gap-2">
                <Button 
                  variant="secondary" 
                  className="bg-holy-gold hover:bg-yellow-500 text-holy-blue font-bold transform hover:scale-110 transition-transform duration-300"
                  onClick={handleQuickView}
                >
                  Quick Shop
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-gray-100 text-holy-blue border-white font-bold transform hover:scale-110 transition-transform duration-300"
                >
                  View Details
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-card-foreground group-hover:text-holy-blue dark:group-hover:text-holy-gold transition-colors duration-300">
              {product.name}
            </h3>
          </div>
          
          <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-holy-gold">
                £{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-foreground/50 line-through">
                  £{product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center text-holy-gold">
              <span className="text-sm mr-1">{"★".repeat(5)}</span>
              <span className="text-foreground/60 text-sm">({product.reviewCount})</span>
            </div>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-holy-blue hover:bg-blue-700 dark:bg-holy-gold dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-medium transition-all duration-300 hover:scale-105"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Quick Shop Modal */}
      {showQuickShop && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-md w-full">
            <button
              onClick={() => setShowQuickShop(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 z-10"
            >
              ✕
            </button>
            <QuickShop
              productId={product.id}
              productName={product.name}
              price={product.price}
              image={product.image}
              sizes={product.sizes}
            />
          </div>
        </div>
      )}
    </>
  );
};
