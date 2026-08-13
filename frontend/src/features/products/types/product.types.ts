export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}


export interface Product {
  id: string;

  name: string;

  slug: string;

  thumbnail: string;

  price: string;

  discount_price: string | null;

  final_price: number;

  discount_percentage: number;

  rating: string;

  total_reviews: number;

  stock: number;

  is_in_stock: boolean;

  brand: string;

  category: Category;

  description?: string;

  sku?: string;

  images?: ProductImage[];

  is_active?: boolean;

  created_at?: string;

  updated_at?: string;
}


export interface ProductImage {
  id: number;
  image: string;
  alt_text?: string;
  is_primary: boolean;
}


export interface ProductListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}


export interface ProductDetailResponse extends Product {}