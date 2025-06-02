
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckoutForm } from "@/components/CheckoutForm";
import { OrderSummary } from "@/components/OrderSummary";
import { useCart } from "@/contexts/CartContext";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const { items } = useCart();

  // Redirect to shop if cart is empty
  if (items.length === 0) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-holy-blue dark:text-holy-gold mb-8 text-center">
            Checkout
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="order-2 lg:order-1">
              <CheckoutForm />
            </div>
            
            {/* Order Summary */}
            <div className="order-1 lg:order-2">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
