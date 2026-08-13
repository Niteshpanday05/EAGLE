export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string | null;
  product_count: number;
}

export interface CategoryListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
}