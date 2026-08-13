export interface CustomerSummary {
  total_customers: number;
  new_today: number;
  new_this_month: number;
}

export interface RecentCustomer {
  id: number;
  email: string;
  name: string;
  joined_at: string;
}

export interface CustomerGrowth {
  date: string;
  total: number;
}

export interface DashboardCustomers {
  summary: CustomerSummary;
  recent_customers: RecentCustomer[];
  growth: CustomerGrowth[];
}