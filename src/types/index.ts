export interface Product {
  id: number;
  title: string;
  category: 'sneakers' | 'smartphones' | 'accessories';
  brand: 'nike' | 'jordan' | 'adidas' | 'apple' | 'samsung' | 'other';
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  description: string;
  features?: string[];
  inStock: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  clientSince?: string;
  title: string;
  text: string;
  orderNumber?: string;
  avatar?: string;
  verified?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  bannerImage: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
