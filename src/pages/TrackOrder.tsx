
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TrackOrder = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with a real tracking system
    alert("Order tracking functionality will be available soon. You'll receive tracking information via email when your order ships.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-4">
              Track Your Order
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Enter your order details below to track your HOLYHUMOR package
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-holy-blue dark:text-holy-gold">📦 Order Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrackOrder} className="space-y-4">
                  <div>
                    <Label htmlFor="orderNumber">Order Number</Label>
                    <Input
                      id="orderNumber"
                      type="text"
                      placeholder="e.g., HH-12345-67890"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Track Order
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-holy-blue dark:text-holy-gold">📧 Email Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  We'll keep you updated on your order status via email:
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Order confirmation with order number</li>
                  <li>• Processing update when your order is prepared</li>
                  <li>• Shipping notification with tracking number</li>
                  <li>• Delivery confirmation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-holy-blue dark:text-holy-gold">❓ Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Can't find your order or having issues with tracking?
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Contact Customer Support</p>
                  <p className="text-sm text-foreground/70 mb-2">
                    Email: info@holyhumor.com
                  </p>
                  <p className="text-sm text-foreground/70">
                    We typically respond within 24 hours and will help you track down your order.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;
