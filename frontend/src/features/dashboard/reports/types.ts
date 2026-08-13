export interface SalesReport {
  total_revenue: string;
  total_transactions: number;
}

export interface OrderReport {
  total_orders: number;
  completed_orders: number;
  cancelled_orders: number;
}

export interface CustomerReport {
  total_customers: number;
  registered_this_year: number;
}

export interface RevenuePayment {
  payment_method: string;
  revenue: string;
  count: number;
}

export interface DashboardReports {
  sales: SalesReport;
  orders: OrderReport;
  customers: CustomerReport;
  revenue_by_payment: RevenuePayment[];
}