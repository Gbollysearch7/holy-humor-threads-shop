
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CreditCard, Smartphone, DollarSign, Shield } from "lucide-react";
import { useState } from "react";

const paymentSchema = z.object({
  paymentMethod: z.string(),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
  cardName: z.string().optional(),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

interface PaymentFormProps {
  shippingData: any;
  onComplete: (data: PaymentFormData) => void;
}

export const PaymentForm = ({ shippingData, onComplete }: PaymentFormProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      paymentMethod: "card",
    },
  });

  const watchPaymentMethod = form.watch("paymentMethod");

  const onSubmit = async (data: PaymentFormData) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    onComplete(data);
  };

  const paymentMethods = [
    {
      id: "card",
      name: "Credit Card",
      description: "Visa, Mastercard, American Express",
      icon: CreditCard,
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Pay with your PayPal account",
      icon: DollarSign,
    },
    {
      id: "apple",
      name: "Apple Pay",
      description: "Touch ID or Face ID",
      icon: Smartphone,
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Payment Method Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-holy-blue dark:text-holy-gold" />
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="space-y-3"
                    >
                      {paymentMethods.map((method) => {
                        const Icon = method.icon;
                        return (
                          <div key={method.id} className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value={method.id} id={method.id} />
                            <Icon className="h-5 w-5 text-holy-blue dark:text-holy-gold" />
                            <div className="flex-1">
                              <Label htmlFor={method.id} className="font-medium cursor-pointer">
                                {method.name}
                              </Label>
                              <p className="text-sm text-foreground/60">{method.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Credit Card Form */}
        {watchPaymentMethod === "card" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Card Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="cardName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name on Card</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Number</FormLabel>
                    <FormControl>
                      <Input placeholder="1234 5678 9012 3456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiry Date</FormLabel>
                      <FormControl>
                        <Input placeholder="MM/YY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV</FormLabel>
                      <FormControl>
                        <Input placeholder="123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Alternative Payment Methods */}
        {watchPaymentMethod === "paypal" && (
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <p className="text-lg font-medium mb-2">PayPal Payment</p>
              <p className="text-sm text-foreground/60">
                You will be redirected to PayPal to complete your payment securely.
              </p>
            </CardContent>
          </Card>
        )}

        {watchPaymentMethod === "apple" && (
          <Card>
            <CardContent className="p-6 text-center">
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-gray-900 dark:text-white" />
              <p className="text-lg font-medium mb-2">Apple Pay</p>
              <p className="text-sm text-foreground/60">
                Use Touch ID or Face ID to complete your payment.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Security Notice */}
        <div className="bg-muted p-4 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="font-medium">Your payment is secured</span>
          </div>
          <p className="text-xs text-foreground/60 mt-1">
            All payment information is encrypted and processed securely.
          </p>
        </div>

        <Button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
          size="lg"
        >
          {isProcessing ? "Processing Payment..." : "Complete Order"}
        </Button>
      </form>
    </Form>
  );
};
