export interface Category {
  id: number;
  name: string;
  slug: string;

  image?: string;

  product_count?: number;
}

export type CategoryResponse = Category[];