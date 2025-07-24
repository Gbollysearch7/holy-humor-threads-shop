
export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  compareAtPrice?: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
  quantityAvailable: number;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
  color?: string;
  colorCode?: string;
  image?: string;
  inStock?: boolean;
  stockCount?: number;
}

export interface DetailedProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  image: string;
  description: string;
  sizes: string[];
  gallery: string[];
  variants?: ProductVariant[];
  detailedDescription: string;
  careInstructions: string;
  materials: string;
  fit: string;
  reviews: Review[];
  relatedProducts: string[];
  tags: string[];
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isNewArrival: boolean;
  isOnSale: boolean;
  handle?: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}
