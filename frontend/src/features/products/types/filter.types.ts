export type ProductOrdering =
  | "price"
  | "-price"
  | "rating"
  | "-rating"
  | "created_at"
  | "-created_at";

export interface ProductFilters {
  search: string;

  category: string;

  brand: string;

  min_price?: number;

  max_price?: number;

  ordering: ProductOrdering;

  page: number;

  page_size: number;
}