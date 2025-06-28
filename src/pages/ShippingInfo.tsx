
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShippingInfo = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[20px]'
        }`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-holy-blue dark:text-holy-gold mb-4">
              Shipping Information
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Everything you need to know about our shipping options and delivery times
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-holy-blue dark:text-holy-gold">🚚 Shipping Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Standard Delivery</h3>
                    <p className="text-sm text-foreground/70 mb-2">3-5 business days</p>
                    <p className="text-lg font-bold text-holy-blue dark:text-holy-gold">£4.99</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Express Delivery</h3>
                    <p className="text-sm text-foreground/70 mb-2">1-2 business days</p>
                    <p className="text-lg font-bold text-holy-blue dark:text-holy-gold">£9.99</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">
                  Free standard shipping on orders over £100!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-holy-blue dark:text-holy-gold">🌍 Delivery Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">United Kingdom</h3>
                    <p className="text-foreground/70">We deliver to all UK addresses including Northern Ireland.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">International</h3>
                    <p className="text-foreground/70">We're working on expanding to Europe and beyond. Stay tuned!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-holy-blue dark:text-holy-gold">📦 Order Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Orders are processed within 1-2 business days</li>
                  <li>• You'll receive a tracking number via email once your order ships</li>
                  <li>• Orders placed after 2 PM will be processed the next business day</li>
                  <li>• Weekend orders are processed on Monday</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingInfo;
