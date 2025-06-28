
import { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface QuickShopProps {
  productId: string;
  productName: string;
  price: number;
  image: string;
  sizes: string[];
}

export const QuickShop = ({ productId, productName, price, image, sizes }: QuickShopProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = async () => {
    if (!selectedSize) {
      toast.error("Please select a size first!");
      return;
    }

    setIsAddingToCart(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast.success(`${productName} (Size ${selectedSize}) added to cart! 🛒`);
    setIsAddingToCart(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-border">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl">{image}</div>
        <div>
          <h3 className="font-bold text-lg text-card-foreground">{productName}</h3>
          <p className="text-2xl font-bold text-holy-gold">£{price}</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-3">
          Select Size:
        </label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-2 rounded-lg border transition-all duration-300 ${
                selectedSize === size
                  ? 'border-holy-blue bg-holy-blue text-white'
                  : 'border-border hover:border-holy-blue'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          className="flex-1 bg-holy-blue hover:bg-blue-700 text-white"
        >
          {isAddingToCart ? (
            "Adding..."
          ) : (
            <>
              <ShoppingCart size={16} className="mr-2" />
              Add to Cart
            </>
          )}
        </Button>
        
        <Button
          variant="outline"
          className="border-holy-blue text-holy-blue hover:bg-holy-blue hover:text-white"
        >
          <Eye size={16} />
        </Button>
      </div>
    </div>
  );
};
