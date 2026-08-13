export interface PaymentSummary {
  total_payments: number;
  successful_payments: number;
  pending_payments: number;
  failed_payments: number;
  refunded_payments: number;
  revenue: string;
}

export interface PaymentMethod {
  payment_method: string;
  count: number;
  revenue: string;
}

export interface RecentPayment {
  reference: string;
  order: string;
  method: string;
  status: string;
  amount: string;
  currency: string;
  created_at: string;
}

export interface DashboardPayments {
  summary: PaymentSummary;
  payment_methods: PaymentMethod[];
  recent_payments: RecentPayment[];
}