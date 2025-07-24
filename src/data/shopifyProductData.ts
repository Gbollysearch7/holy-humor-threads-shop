import { useShopifyProducts } from '@/hooks/useShopifyProducts';

// This file will replace the static product data with Shopify data
// The actual data is now fetched from Shopify via the useShopifyProducts hook

export const useEnhancedProducts = () => {
  return useShopifyProducts();
};

// Fallback for components that still expect static imports
// These will be replaced by the Shopify data when available
export const enhancedProducts: any[] = [];
export const categories = [
  { id: "all", name: "All Products", count: 0 },
  { id: "t-shirts", name: "T-Shirts", count: 0 },
  { id: "hoodies", name: "Hoodies", count: 0 },
  { id: "accessories", name: "Accessories", count: 0 },
  { id: "new-arrivals", name: "New Arrivals", count: 0 }
];