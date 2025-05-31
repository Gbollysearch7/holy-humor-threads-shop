
export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface DetailedProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
  gallery: string[];
  detailedDescription: string;
  careInstructions: string;
  materials: string;
  reviews: Review[];
  relatedProducts: string[];
  tags: string[];
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
}

export const enhancedProducts: DetailedProduct[] = [
  {
    id: "1",
    name: "Blessed & Caffeinated",
    price: 24.99,
    category: "humor",
    image: "☕",
    description: "Perfect for coffee-loving Christians who need their daily dose of both caffeine and blessings.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    gallery: ["☕", "☕", "☕"],
    detailedDescription: "Start your day with this perfectly balanced blend of faith and caffeine! Our 'Blessed & Caffeinated' design speaks to every believer who knows that mornings require both prayer and that first cup of coffee. Made with premium cotton for ultimate comfort during your morning devotions or coffee runs.",
    careInstructions: "Machine wash cold with like colors. Tumble dry low. Do not iron directly on design.",
    materials: "100% Premium Cotton",
    reviews: [
      {
        id: "r1",
        customerName: "Sarah M.",
        rating: 5,
        comment: "Love this shirt! Perfect for my morning coffee routine and gets lots of compliments at church.",
        date: "2024-05-15",
        verified: true
      },
      {
        id: "r2",
        customerName: "Mike D.",
        rating: 4,
        comment: "Great quality and the message is perfect. Fits true to size.",
        date: "2024-05-10",
        verified: true
      }
    ],
    relatedProducts: ["2", "5"],
    tags: ["coffee", "morning", "humor", "blessed"],
    inStock: true,
    stockCount: 25,
    rating: 4.5,
    reviewCount: 12
  },
  {
    id: "2",
    name: "Faith Over Fear",
    price: 26.99,
    category: "inspirational",
    image: "✝️",
    description: "A powerful reminder that with God, we can overcome any challenge life throws our way.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    gallery: ["✝️", "✝️", "✝️"],
    detailedDescription: "When anxiety tries to take hold, remember that faith is bigger than fear. This inspiring design serves as a daily reminder of God's power in your life. Perfect for anyone facing challenges or wanting to encourage others in their faith journey.",
    careInstructions: "Machine wash cold with like colors. Tumble dry low. Do not iron directly on design.",
    materials: "100% Premium Cotton",
    reviews: [
      {
        id: "r3",
        customerName: "Jennifer L.",
        rating: 5,
        comment: "This shirt has been such an encouragement to me. The quality is excellent too!",
        date: "2024-05-18",
        verified: true
      }
    ],
    relatedProducts: ["4", "6"],
    tags: ["faith", "inspirational", "courage", "cross"],
    inStock: true,
    stockCount: 18,
    rating: 4.8,
    reviewCount: 8
  },
  {
    id: "3",
    name: "Holy Guacamole",
    price: 23.99,
    category: "humor",
    image: "🥑",
    description: "A holy twist on everyone's favorite exclamation. Perfect for foodie Christians!",
    sizes: ["S", "M", "L", "XL", "XXL"],
    gallery: ["🥑", "🥑", "🥑"],
    detailedDescription: "Add some holy humor to your wardrobe with this avocado-inspired design! Perfect for Christian foodies who love a good pun. Great conversation starter at church potlucks, family gatherings, or anywhere you want to spread some joy.",
    careInstructions: "Machine wash cold with like colors. Tumble dry low. Do not iron directly on design.",
    materials: "100% Premium Cotton",
    reviews: [
      {
        id: "r4",
        customerName: "David R.",
        rating: 4,
        comment: "Hilarious design! My kids love it and it's become a family favorite.",
        date: "2024-05-12",
        verified: true
      }
    ],
    relatedProducts: ["1", "5"],
    tags: ["humor", "food", "pun", "family"],
    inStock: true,
    stockCount: 30,
    rating: 4.3,
    reviewCount: 15
  },
  {
    id: "4",
    name: "Chosen & Loved",
    price: 25.99,
    category: "inspirational",
    image: "💕",
    description: "A beautiful reminder of our identity in Christ and His unconditional love for us.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    gallery: ["💕", "💕", "💕"],
    detailedDescription: "Sometimes we need a gentle reminder of who we are in Christ. This beautiful design celebrates our identity as God's chosen and beloved children. Perfect for anyone who needs encouragement about their worth and value in God's eyes.",
    careInstructions: "Machine wash cold with like colors. Tumble dry low. Do not iron directly on design.",
    materials: "100% Premium Cotton",
    reviews: [
      {
        id: "r5",
        customerName: "Rachel K.",
        rating: 5,
        comment: "This shirt speaks to my heart. Beautiful message and great quality!",
        date: "2024-05-20",
        verified: true
      }
    ],
    relatedProducts: ["2", "6"],
    tags: ["love", "identity", "chosen", "heart"],
    inStock: true,
    stockCount: 22,
    rating: 4.9,
    reviewCount: 6
  },
  {
    id: "5",
    name: "Jesus Saves... Files",
    price: 24.99,
    category: "humor",
    image: "💾",
    description: "For the tech-savvy believers who know Jesus saves more than just files!",
    sizes: ["S", "M", "L", "XL", "XXL"],
    gallery: ["💾", "💾", "💾"],
    detailedDescription: "Perfect for Christian programmers, IT professionals, or anyone who appreciates tech humor with a spiritual twist. This clever design plays on the computer command while celebrating our ultimate Savior. Great for work, church tech teams, or casual wear.",
    careInstructions: "Machine wash cold with like colors. Tumble dry low. Do not iron directly on design.",
    materials: "100% Premium Cotton",
    reviews: [
      {
        id: "r6",
        customerName: "Mark T.",
        rating: 5,
        comment: "As a software developer and Christian, this is perfect! Great quality and clever design.",
        date: "2024-05-14",
        verified: true
      }
    ],
    relatedProducts: ["1", "3"],
    tags: ["tech", "humor", "salvation", "programmer"],
    inStock: true,
    stockCount: 15,
    rating: 4.6,
    reviewCount: 9
  },
  {
    id: "6",
    name: "Pray More Worry Less",
    price: 26.99,
    category: "inspirational",
    image: "🙏",
    description: "A gentle reminder to turn our anxieties into prayers and trust God's plan.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    gallery: ["🙏", "🙏", "🙏"],
    detailedDescription: "In a world full of worries, this design reminds us where to turn our concerns. Based on Philippians 4:6-7, this shirt encourages us to bring everything to God in prayer instead of carrying the weight alone. Perfect for anyone seeking peace in anxious times.",
    careInstructions: "Machine wash cold with like colors. Tumble dry low. Do not iron directly on design.",
    materials: "100% Premium Cotton",
    reviews: [
      {
        id: "r7",
        customerName: "Lisa P.",
        rating: 5,
        comment: "This message is exactly what I needed to see every day. Love the reminder!",
        date: "2024-05-16",
        verified: true
      }
    ],
    relatedProducts: ["2", "4"],
    tags: ["prayer", "peace", "anxiety", "trust"],
    inStock: true,
    stockCount: 20,
    rating: 4.7,
    reviewCount: 11
  }
];

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
