export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string | null;
  product_count: number;
}

export interface CategorySectionProps {
  categories: Category[];
}

export interface CategoryCardProps {
  category: Category;
}