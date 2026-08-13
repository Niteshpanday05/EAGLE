// Product information inside a cart item
export interface CartProduct {
  id: string;
  name: string;
  slug: string;
  thumbnail: string | null;
  brand: number | string;
  price: number;
  discount_price: number | null;
  final_price: number;
  discount_percentage: number;
  stock: number;
  is_in_stock: boolean;
}

// Single cart item
export interface CartItem {
  id: number;
  product: CartProduct;
  quantity: number;
  unit_price: number;
  subtotal: number;
}

// Complete cart response
export interface Cart {
  id: number;
  items: CartItem[];
  total_items: number;
  total_quantity: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

// Request body for adding a product
export interface AddToCartRequest {
  product_id: string;
  quantity: number;
}

// Request body for updating quantity
export interface UpdateCartItemRequest {
  quantity: number;
}