export interface Product {
  id: string;
  name: string;
  slug: string;

  thumbnail: string;

  brand: string;

  price: number;
  discount_price: number | null;

  rating: number;
  total_reviews: number;

  stock: number;
}