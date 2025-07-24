
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WishlistButton } from "@/components/WishlistButton";
import { QuickShop } from "@/components/QuickShop";
import { DetailedProduct } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: DetailedProduct;
  delay?: number;
  compact?: boolean;
}

export const ProductCard = ({ product, delay = 0, compact = false }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickShop, setShowQuickShop] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowQuickShop(true);
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.variants && product.variants.length > 0) {
      const variant = product.variants[0];
      const sizeOption = variant.selectedOptions?.find(opt => opt.name.toLowerCase() === 'size');
      
      try {
        await addToCart(variant.id, 1, {
          name: product.name,
          price: product.price,
          image: product.image,
          size: sizeOption?.value || 'One Size',
          handle: product.handle || ''
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to add item to cart",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Error",
        description: "Product variant not available",
        variant: "destructive",
      });
    }
  };

  const handleProductClick = () => {
    navigate(`/product/${product.handle || product.id}`);
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${product.handle || product.id}`);
  };

  return (
    <>
      <div
        className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-border hover-scale group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleProductClick}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="relative">
          <div className={`bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 ${compact ? 'h-48' : 'h-64'} flex items-center justify-center transition-colors duration-300`}>
            {product.image.startsWith('/') || product.image.startsWith('http') ? (
              <img 
                src={product.image} 
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className={`${compact ? 'text-4xl' : 'text-6xl'} mb-4 animate-float`} style={{ animationDelay: `${delay * 0.2}s` }}>
                {product.image}
              </div>
            )}
          </div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNewArrival && (
              <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">
                New
              </Badge>
            )}
            {product.isOnSale && (
              <Badge className="bg-red-500 hover:bg-red-600 text-white text-xs">
                Sale
              </Badge>
            )}
            {product.isFeatured && (
              <Badge className="bg-holy-gold hover:bg-yellow-500 text-holy-blue text-xs">
                Featured
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <div className="absolute top-2 right-2" onClick={(e) => e.stopPropagation()}>
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
                  size={compact ? "sm" : "default"}
                  className="bg-holy-gold hover:bg-yellow-500 text-holy-blue font-bold transform hover:scale-110 transition-transform duration-300"
                  onClick={handleQuickView}
                >
                  Quick Shop
                </Button>
                <Button 
                  variant="outline" 
                  size={compact ? "sm" : "default"}
                  className="bg-white hover:bg-gray-100 text-holy-blue border-white font-bold transform hover:scale-110 transition-transform duration-300"
                  onClick={handleViewDetails}
                >
                  View Details
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div className={compact ? "p-4" : "p-6"}>
          <div className="flex items-start justify-between mb-2">
            <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-card-foreground group-hover:text-holy-blue dark:group-hover:text-holy-gold transition-colors duration-300 line-clamp-2`}>
              {product.name}
            </h3>
          </div>
          
          <p className={`text-sm text-foreground/60 mb-${compact ? '3' : '4'} line-clamp-2`}>
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className={`${compact ? 'text-xl' : 'text-2xl'} font-bold text-holy-gold`}>
                £{product.price}
              </span>
              {product.originalPrice && (
                <span className={`${compact ? 'text-sm' : 'text-lg'} text-foreground/50 line-through`}>
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
            size={compact ? "sm" : "default"}
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
