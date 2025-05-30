
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id);
    toast({
      title: "Item removed",
      description: `${name} has been removed from your cart`,
    });
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-holy-blue dark:text-holy-gold">
            Shopping Cart ({items.length})
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold text-foreground/80 mb-2">Your cart is empty</h3>
              <p className="text-foreground/60 mb-6">Add some blessed items to get started!</p>
              <Button 
                onClick={onClose}
                className="bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                      <div className="text-3xl">{item.image}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-foreground/60">Size: {item.size}</p>
                        <p className="text-lg font-bold text-holy-blue dark:text-holy-gold">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(`${item.id}-${item.size}`, item.name)}
                          className="h-6 w-6 text-foreground/60 hover:text-red-500"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleUpdateQuantity(`${item.id}-${item.size}`, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleUpdateQuantity(`${item.id}-${item.size}`, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-border pt-4 space-y-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-holy-blue dark:text-holy-gold">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      onClick={onClose}
                      className="flex-1"
                    >
                      Continue Shopping
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleClearCart}
                      className="flex-1"
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
