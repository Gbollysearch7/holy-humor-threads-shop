
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const GiftCards = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");

  const presetAmounts = [10, 25, 50, 100];

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    // This would integrate with a real payment system
    alert("Gift card functionality will be available soon! Contact us at info@holyhumor.com for gift card purchases.");
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
              Gift Cards
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Share the joy of faith-inspired fashion with your loved ones
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-holy-blue dark:text-holy-gold">🎁 Purchase Gift Card</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePurchase} className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Choose Amount</Label>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      {presetAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={selectedAmount === amount ? "default" : "outline"}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                        >
                          £{amount}
                        </Button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Custom amount: £</span>
                      <Input
                        type="number"
                        placeholder="0"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(0);
                        }}
                        min="5"
                        max="500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="recipientEmail">Recipient Email (Optional)</Label>
                    <Input
                      id="recipientEmail"
                      type="email"
                      placeholder="recipient@email.com"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Personal Message (Optional)</Label>
                    <textarea
                      id="message"
                      className="w-full p-3 border border-border rounded-md resize-none h-24"
                      placeholder="Add a personal message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      maxLength={200}
                    />
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-lg">
                      Total: £{customAmount || selectedAmount}
                    </p>
                  </div>

                  <Button type="submit" className="w-full">
                    Purchase Gift Card
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-holy-blue dark:text-holy-gold">✨ Gift Card Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-foreground/70">
                    <li>• Never expires - use anytime</li>
                    <li>• Can be used on any HOLYHUMOR product</li>
                    <li>• Delivered instantly via email</li>
                    <li>• Perfect for birthdays, holidays, or just because</li>
                    <li>• Can be combined with other promotions</li>
                    <li>• Easy to redeem at checkout</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-holy-blue dark:text-holy-gold">🎯 Perfect For</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🎂</span>
                      <span>Birthdays & Special Occasions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⛪</span>
                      <span>Church Friends & Family</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🎄</span>
                      <span>Christmas & Easter Gifts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👥</span>
                      <span>Youth Group Members</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-holy-blue dark:text-holy-gold">❓ How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-foreground/70">
                    <li>Choose your gift card amount</li>
                    <li>Add recipient details and personal message</li>
                    <li>Complete your purchase</li>
                    <li>Gift card is emailed instantly</li>
                    <li>Recipient shops and enters code at checkout</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GiftCards;
