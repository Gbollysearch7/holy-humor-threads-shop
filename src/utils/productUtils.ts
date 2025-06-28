
import { DetailedProduct } from "@/types/product";
import { enhancedProducts } from "@/data/productData";

export const getProductById = (id: string): DetailedProduct | undefined => {
  return enhancedProducts.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string, limit: number = 3): DetailedProduct[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return enhancedProducts
    .filter(p => product.relatedProducts.includes(p.id))
    .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 6): DetailedProduct[] => {
  return enhancedProducts
    .filter(product => product.isFeatured)
    .slice(0, limit);
};

export const getNewArrivals = (limit: number = 4): DetailedProduct[] => {
  return enhancedProducts
    .filter(product => product.isNewArrival)
    .slice(0, limit);
};

export const getSaleProducts = (): DetailedProduct[] => {
  return enhancedProducts.filter(product => product.isOnSale);
};

export const getProductsByCategory = (category: string): DetailedProduct[] => {
  if (category === "all") return enhancedProducts;
  return enhancedProducts.filter(product => product.category === category);
};

export const searchProducts = (query: string): DetailedProduct[] => {
  const lowercaseQuery = query.toLowerCase();
  return enhancedProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};
