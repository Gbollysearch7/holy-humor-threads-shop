
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export const CheckoutForm = () => {
  const { getCheckoutUrl } = useCart();

  const handleShopifyCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      // Fallback - redirect to shop if no checkout URL
      window.location.href = '/shop';
    }
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-holy-blue dark:text-holy-gold text-center">
          Complete Your Order
        </CardTitle>
        <p className="text-center text-foreground/60">
          Proceed to our secure Shopify checkout to complete your purchase
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Direct Shopify Checkout */}
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold text-foreground">Ready to checkout?</h3>
          <p className="text-foreground/60 mb-6">
            You'll be redirected to Shopify's secure checkout to complete your purchase safely.
          </p>
          
          <Button
            onClick={handleShopifyCheckout}
            className="w-full bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
            size="lg"
          >
            Proceed to Shopify Checkout
          </Button>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-foreground/60 mt-4">
            <div className="flex items-center">
              <span className="text-green-500 mr-1">🔒</span>
              Secure Checkout
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-1">🛡️</span>
              SSL Protected
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">⚡</span>
              Fast Processing
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
