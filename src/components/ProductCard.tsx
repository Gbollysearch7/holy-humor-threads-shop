
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export const ProductCard = ({ product, delay = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: "M" // Default size
    });

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <Card 
      className="group hover-scale transition-all duration-300 hover:shadow-xl border border-border animate-scale-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-6">
        <div className="text-6xl text-center mb-4 group-hover:animate-float">
          {product.image}
        </div>
        <h3 className="text-xl font-bold text-holy-blue dark:text-holy-gold mb-2 text-center">
          {product.name}
        </h3>
        <p className="text-foreground/70 text-sm text-center mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="text-center">
          <span className="text-2xl font-bold text-holy-blue dark:text-holy-gold">
            ${product.price}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900 transition-all duration-300 hover:scale-105"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
