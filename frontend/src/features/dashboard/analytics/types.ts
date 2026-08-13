export interface Summary {
  total_revenue: string;
  total_orders: number;
  total_customers: number;
  average_order_value: string;
}

export interface DailySales {
  day: string;
  revenue: string;
}

export interface TopProduct {
  product__name: string;
  quantity: number;
}

export interface OrderStatus {
  status: string;
  total: number;
}

export interface DashboardAnalytics {
  summary: Summary;
  daily_sales: DailySales[];
  top_products: TopProduct[];
  order_status: OrderStatus[];
}