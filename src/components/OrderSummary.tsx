
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { Tag, Truck, Shield } from "lucide-react";

export const OrderSummary = () => {
  const { items, getTotalPrice, getCheckoutUrl } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const total = subtotal + shipping + tax - discount;

  const handleApplyPromo = () => {
    // Mock promo code validation
    const promoCodes: Record<string, number> = {
      'BLESSED10': 10,
      'FAITH20': 20,
      'HOLYHUMOR15': 15,
    };

    const discountAmount = promoCodes[promoCode.toUpperCase()];
    if (discountAmount) {
      setDiscount(discountAmount);
      setAppliedPromo(promoCode.toUpperCase());
    }
  };

  const removePromo = () => {
    setDiscount(0);
    setAppliedPromo(null);
    setPromoCode("");
  };

  return (
    <div className="space-y-6">
      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-holy-blue dark:text-holy-gold">
            Order Summary ({items.length} items)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <div className="text-2xl">{item.image}</div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{item.name}</h4>
                <p className="text-xs text-foreground/60">Size: {item.size}</p>
                <p className="text-xs text-foreground/60">Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Promo Code */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="h-4 w-4 text-holy-blue dark:text-holy-gold" />
            <span className="font-medium text-sm">Promo Code</span>
          </div>
          
          {appliedPromo ? (
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                {appliedPromo} Applied
              </span>
              <Button variant="ghost" size="sm" onClick={removePromo}>
                Remove
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Input
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="text-sm"
              />
              <Button variant="outline" size="sm" onClick={handleApplyPromo}>
                Apply
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Price Breakdown */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <Truck className="h-3 w-3" />
              <span>Shipping</span>
              {shipping === 0 && <span className="text-green-600 text-xs">(Free!)</span>}
            </div>
            <span>${shipping.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          {discount > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
          
          <Separator />
          
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-holy-blue dark:text-holy-gold">
              ${total.toFixed(2)}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Trust Indicators */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-center gap-4 text-xs text-foreground/60">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center gap-1">
              <Truck className="h-3 w-3" />
              <span>Free Shipping $100+</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
