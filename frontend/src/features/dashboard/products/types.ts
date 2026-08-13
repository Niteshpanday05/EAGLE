export interface ProductSummary {
  total_products: number;
  active_products: number;
  inactive_products: number;
  out_of_stock: number;
  low_stock: number;
  average_rating: string;
}

export interface TopProduct {
  product__id: string;
  product__name: string;
  total_sold: number;
}

export interface RecentProduct {
  id: string;
  name: string;
  brand: string;
  price: string;
  stock: number;
  rating: string;
  created_at: string;
}

export interface DashboardProducts {
  summary: ProductSummary;
  top_products: TopProduct[];
  recent_products: RecentProduct[];
}