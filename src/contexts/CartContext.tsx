
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createCart, addToCart as shopifyAddToCart, updateCartLines, removeFromCart as shopifyRemoveFromCart, ShopifyCart } from '@/lib/shopify';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
  lineId: string;
  variantId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  productHandle: string;
}

interface CartContextType {
  items: CartItem[];
  cart: ShopifyCart | null;
  isLoading: boolean;
  addToCart: (variantId: string, quantity: number, productData: { name: string; price: number; image: string; size: string; handle: string }) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getCheckoutUrl: () => string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Initialize cart on mount
  useEffect(() => {
    const initCart = async () => {
      try {
        const existingCartId = localStorage.getItem('shopify-cart-id');
        if (!existingCartId) {
          const newCart = await createCart();
          setCart(newCart);
          localStorage.setItem('shopify-cart-id', newCart.id);
        }
      } catch (error) {
        console.error('Failed to initialize cart:', error);
      }
    };
    initCart();
  }, []);

  // Transform Shopify cart to our items format
  const transformCartItems = (shopifyCart: ShopifyCart): CartItem[] => {
    return shopifyCart.lines.edges.map(edge => {
      const line = edge.node;
      const product = line.merchandise.product;
      const variant = line.merchandise;
      const sizeOption = variant.selectedOptions.find(opt => opt.name.toLowerCase() === 'size');
      
      return {
        id: `${variant.id}-${sizeOption?.value || 'default'}`,
        lineId: line.id,
        variantId: variant.id,
        name: product.title,
        price: parseFloat(variant.price.amount),
        image: product.images.edges[0]?.node.url || '',
        quantity: line.quantity,
        size: sizeOption?.value || 'One Size',
        productHandle: product.handle
      };
    });
  };

  const addToCart = async (variantId: string, quantity: number, productData: { name: string; price: number; image: string; size: string; handle: string }) => {
    setIsLoading(true);
    try {
      let currentCart = cart;
      
      // Create cart if it doesn't exist
      if (!currentCart) {
        currentCart = await createCart();
        localStorage.setItem('shopify-cart-id', currentCart.id);
      }

      const updatedCart = await shopifyAddToCart(currentCart.id, variantId, quantity);
      setCart(updatedCart);
      setItems(transformCartItems(updatedCart));
      
      toast({
        title: "Added to cart",
        description: `${productData.name} has been added to your cart.`,
      });
    } catch (error) {
      console.error('Failed to add to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (lineId: string) => {
    if (!cart) return;
    
    setIsLoading(true);
    try {
      const updatedCart = await shopifyRemoveFromCart(cart.id, [lineId]);
      setCart(updatedCart);
      setItems(transformCartItems(updatedCart));
      
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart.",
      });
    } catch (error) {
      console.error('Failed to remove from cart:', error);
      toast({
        title: "Error",
        description: "Failed to remove item from cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (lineId: string, quantity: number) => {
    if (!cart) return;
    
    if (quantity <= 0) {
      await removeFromCart(lineId);
      return;
    }

    setIsLoading(true);
    try {
      const updatedCart = await updateCartLines(cart.id, lineId, quantity);
      setCart(updatedCart);
      setItems(transformCartItems(updatedCart));
    } catch (error) {
      console.error('Failed to update quantity:', error);
      toast({
        title: "Error",
        description: "Failed to update quantity. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearCart = () => {
    setItems([]);
    setCart(null);
    localStorage.removeItem('shopify-cart-id');
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart?.cost.totalAmount ? parseFloat(cart.cost.totalAmount.amount) : 0;
  };

  const getCheckoutUrl = () => {
    return cart?.checkoutUrl || null;
  };

  return (
    <CartContext.Provider value={{
      items,
      cart,
      isLoading,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice,
      getCheckoutUrl
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
