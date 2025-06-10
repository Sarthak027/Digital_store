export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'template' | 'boilerplate' | 'component' | 'landing-page' | 'saas';
  image: string;
  tags: string[];
  rating: number;
  downloads: number;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}