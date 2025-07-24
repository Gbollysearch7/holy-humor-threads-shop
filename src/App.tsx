
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import ShippingInfo from "./pages/ShippingInfo";
import ReturnsExchanges from "./pages/ReturnsExchanges";
import TrackOrder from "./pages/TrackOrder";
import FAQ from "./pages/FAQ";
import GiftCards from "./pages/GiftCards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:handle" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shipping-info" element={<ShippingInfo />} />
              <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/gift-cards" element={<GiftCards />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
