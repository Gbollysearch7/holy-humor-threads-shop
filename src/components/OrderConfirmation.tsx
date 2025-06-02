
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { CheckCircle, Package, Mail, Download } from "lucide-react";
import { useEffect } from "react";

interface OrderConfirmationProps {
  shippingData: any;
  paymentData: any;
}

export const OrderConfirmation = ({ shippingData, paymentData }: OrderConfirmationProps) => {
  const { items, clearCart, getTotalPrice } = useCart();
  const { toast } = useToast();

  const orderNumber = `HH${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

  useEffect(() => {
    // Clear cart and show success toast
    const timer = setTimeout(() => {
      clearCart();
      toast({
        title: "Order Confirmed! 🎉",
        description: `Order ${orderNumber} has been placed successfully.`,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [clearCart, toast, orderNumber]);

  return (
    <div className="space-y-6">
      {/* Success Header */}
      <Card className="border-green-200 bg-green-50 dark:bg-green-900/20">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">
            Order Confirmed!
          </h2>
          <p className="text-green-700 dark:text-green-300 mb-4">
            Thank you for your purchase! Your order has been received and is being processed.
          </p>
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg">
            <Package className="h-4 w-4" />
            <span className="font-mono font-medium">Order #{orderNumber}</span>
          </div>
        </CardContent>
      </Card>

      {/* Order Details */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Shipping Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Shipping Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Name:</strong> {shippingData?.firstName} {shippingData?.lastName}</p>
            <p><strong>Email:</strong> {shippingData?.email}</p>
            <p><strong>Phone:</strong> {shippingData?.phone}</p>
            <div className="pt-2">
              <p><strong>Shipping Address:</strong></p>
              <p>{shippingData?.address}</p>
              <p>{shippingData?.city}, {shippingData?.state} {shippingData?.zipCode}</p>
            </div>
            <div className="pt-2">
              <p><strong>Estimated Delivery:</strong></p>
              <p className="text-holy-blue dark:text-holy-gold font-medium">
                {estimatedDelivery.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>Payment Method:</strong> {paymentData?.paymentMethod === 'card' ? 'Credit Card' : paymentData?.paymentMethod}</p>
            {paymentData?.paymentMethod === 'card' && paymentData?.cardNumber && (
              <p><strong>Card:</strong> ****-****-****-{paymentData.cardNumber.slice(-4)}</p>
            )}
            <div className="pt-2">
              <p><strong>Total Paid:</strong></p>
              <p className="text-xl font-bold text-holy-blue dark:text-holy-gold">
                ${getTotalPrice().toFixed(2)}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">What's Next?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <Mail className="h-8 w-8 mx-auto text-holy-blue dark:text-holy-gold" />
              <h4 className="font-medium">Email Confirmation</h4>
              <p className="text-xs text-foreground/60">
                We've sent a confirmation email with your order details
              </p>
            </div>
            <div className="space-y-2">
              <Package className="h-8 w-8 mx-auto text-holy-blue dark:text-holy-gold" />
              <h4 className="font-medium">Processing</h4>
              <p className="text-xs text-foreground/60">
                Your order will be processed within 24 hours
              </p>
            </div>
            <div className="space-y-2">
              <Download className="h-8 w-8 mx-auto text-holy-blue dark:text-holy-gold" />
              <h4 className="font-medium">Track Order</h4>
              <p className="text-xs text-foreground/60">
                You'll receive tracking information once shipped
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="flex-1" variant="outline">
          <Link to="/shop">
            Continue Shopping
          </Link>
        </Button>
        <Button asChild className="flex-1">
          <Link to="/">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};
