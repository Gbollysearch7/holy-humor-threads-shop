
import { Category } from "@/types/product";
import { enhancedProducts } from "@/data/productData";

export const categories: Category[] = [
  { id: "all", name: "All Products", count: enhancedProducts.length },
  { id: "faith", name: "Faith", count: enhancedProducts.filter(p => p.category === "faith").length },
  { id: "humor", name: "Humor", count: enhancedProducts.filter(p => p.category === "humor").length },
  { id: "lifestyle", name: "Lifestyle", count: enhancedProducts.filter(p => p.category === "lifestyle").length }
];

export const subcategories = [
  "inspirational", "identity", "prayer", "hope", "coffee", "food", "tech", 
  "motivational", "sunday", "gratitude", "kindness", "scripture"
];
