
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReturnsExchanges = () => {
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
              Returns & Exchanges
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We want you to love your HOLYHUMOR purchase. If you're not completely satisfied, we're here to help.
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-holy-blue dark:text-holy-gold">🔄 Return Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold text-lg mb-2">30-Day Return Window</p>
                  <p className="text-foreground/70">
                    You have 30 days from the date of delivery to return your items for a full refund.
                  </p>
                </div>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Items must be unworn and in original condition</li>
                  <li>• All tags must be attached</li>
                  <li>• Items must be in original packaging</li>
                  <li>• Return shipping is free for UK customers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-holy-blue dark:text-holy-gold">↔️ Exchanges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-foreground/70">
                    Need a different size or color? We offer free exchanges within 30 days of purchase.
                  </p>
                  <div className="bg-holy-blue/10 dark:bg-holy-gold/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">How to Exchange:</h3>
                    <ol className="list-decimal list-inside space-y-1 text-foreground/70">
                      <li>Email us at info@holyhumor.com with your order number</li>
                      <li>Specify the item you want to exchange and your preferred replacement</li>
                      <li>We'll send you a prepaid return label</li>
                      <li>Ship your item back and we'll send your replacement</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-holy-blue dark:text-holy-gold">📧 Start a Return</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-foreground/70">
                    To initiate a return or exchange, please contact us:
                  </p>
                  <div className="bg-card border p-4 rounded-lg">
                    <p className="font-semibold mb-2">Email: info@holyhumor.com</p>
                    <p className="text-sm text-foreground/70">
                      Include your order number and reason for return. We'll respond within 24 hours with return instructions.
                    </p>
                  </div>
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

export default ReturnsExchanges;
