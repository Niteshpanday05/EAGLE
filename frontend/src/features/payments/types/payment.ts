// Payment Methods
export type PaymentMethod =
  | "COD"
  | "KHALTI"
  | "ESEWA"
  | "STRIPE";


// Payment Status
export type PaymentStatus =
  | "PENDING"
  | "PROCESSING"
  | "SUCCESS"
  | "FAILED"
  | "CANCELLED"
  | "REFUNDED";


// Initiate Payment
export interface InitiatePaymentRequest {
  reference: string;
}


export interface InitiatePaymentResponse {
  payment_method: PaymentMethod;
  redirect_url?: string;
  reference: string;
  message: string;
}


// Verify Payment
export interface VerifyPaymentRequest {
  reference: string;
  transaction_id?: string;
}


export interface VerifyPaymentResponse {
  payment_status: PaymentStatus;
  transaction_id?: string;
  message: string;
}


// Payment Detail
export interface Payment {
  id: number;
  order_number: string;
  payment_method: PaymentMethod;
  payment_status: PaymentStatus;
  transaction_id: string | null;
  amount: number;
  created_at: string;
  updated_at: string;
}