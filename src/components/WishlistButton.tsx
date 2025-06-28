
import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface WishlistButtonProps {
  productId: string;
  productName: string;
  size?: "sm" | "default" | "lg" | "icon";
  variant?: "default" | "outline" | "ghost";
}

export const WishlistButton = ({ 
  productId, 
  productName, 
  size = "default", 
  variant = "ghost" 
}: WishlistButtonProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleWishlistToggle = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newWishlistState = !isWishlisted;
    setIsWishlisted(newWishlistState);
    
    if (newWishlistState) {
      toast.success(`${productName} added to your wishlist! ❤️`);
    } else {
      toast.success(`${productName} removed from wishlist`);
    }
    
    setIsLoading(false);
  };

  const iconSize = size === "sm" ? 16 : size === "lg" ? 24 : 20;
  
  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleWishlistToggle}
      disabled={isLoading}
      className={`transition-all duration-300 hover:scale-110 ${
        isWishlisted 
          ? 'text-red-500 hover:text-red-600' 
          : 'text-gray-400 hover:text-red-500'
      }`}
    >
      <Heart 
        size={iconSize} 
        fill={isWishlisted ? "currentColor" : "none"}
        className="transition-all duration-300"
      />
      {size === "lg" && (
        <span className="ml-2">
          {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
        </span>
      )}
    </Button>
  );
};
