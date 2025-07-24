
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ShippingForm } from "@/components/ShippingForm";
import { PaymentForm } from "@/components/PaymentForm";
import { OrderConfirmation } from "@/components/OrderConfirmation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

type CheckoutStep = 'shipping' | 'payment' | 'confirmation';

export const CheckoutForm = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [shippingData, setShippingData] = useState<any>(null);
  const [paymentData, setPaymentData] = useState<any>(null);
  const { getCheckoutUrl } = useCart();

  const steps = [
    { id: 'shipping', title: 'Shipping Information', number: 1 },
    { id: 'payment', title: 'Payment', number: 2 },
    { id: 'confirmation', title: 'Confirmation', number: 3 },
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleShippingComplete = (data: any) => {
    setShippingData(data);
    setCurrentStep('payment');
  };

  const handlePaymentComplete = (data: any) => {
    setPaymentData(data);
    setCurrentStep('confirmation');
  };

  const handleShopifyCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  const handleBack = () => {
    if (currentStep === 'payment') {
      setCurrentStep('shipping');
    } else if (currentStep === 'confirmation') {
      setCurrentStep('payment');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-holy-blue dark:text-holy-gold">
          Complete Your Order
        </CardTitle>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-foreground/60">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center space-x-1 ${
                  step.id === currentStep
                    ? 'text-holy-blue dark:text-holy-gold font-medium'
                    : currentStepIndex > step.number - 1
                    ? 'text-green-600'
                    : 'text-foreground/40'
                }`}
              >
                <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs">
                  {currentStepIndex > step.number - 1 ? '✓' : step.number}
                </span>
                <span className="hidden sm:inline">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Step Content */}
        {currentStep === 'shipping' && (
          <ShippingForm onComplete={handleShippingComplete} />
        )}

        {currentStep === 'payment' && (
          <PaymentForm 
            shippingData={shippingData}
            onComplete={handlePaymentComplete}
          />
        )}

        {currentStep === 'confirmation' && (
          <OrderConfirmation 
            shippingData={shippingData}
            paymentData={paymentData}
          />
        )}

        {/* Shopify Checkout Button */}
        <div className="pt-4 space-y-4">
          <Button
            onClick={handleShopifyCheckout}
            className="w-full bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900"
            size="lg"
          >
            Complete Purchase with Shopify
          </Button>
          <p className="text-xs text-center text-foreground/60">
            You'll be redirected to Shopify's secure checkout
          </p>
        </div>

        {/* Navigation Buttons */}
        {currentStep !== 'confirmation' && (
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 'shipping'}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
            
            <div className="text-sm text-foreground/60">
              Step {currentStepIndex + 1} of {steps.length}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
