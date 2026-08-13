export interface ShippingAddress {
  full_name: string;
  email: string;
  phone: string;
  country: string;
  province: string;
  city: string;
  street_address: string;
  postal_code: string;
}


export interface OrderItem {
  id: number;
  product: number;
  product_name: string;
  thumbnail: string;
  quantity: number;
  unit_price: string;
  subtotal: string;
}


export interface Order {
  id: number;
  order_number: string;

  status: string;

  payment_method: string;

  payment_status: string;

  subtotal: string;
  shipping: string;
  tax: string;
  discount: string;
  total: string;

  notes: string;

  items: OrderItem[];

  shipping_address: ShippingAddress;

  created_at: string;
}


// ===============================
// Checkout / Place Order Types
// ===============================

export interface PlaceOrderPayload {

  address_id: number;

  payment_method:
    | "COD"
    | "KHALTI"
    | "ESEWA"
    | "STRIPE";

  notes?: string;

}



export interface PaymentResponse {

  reference: string;

  method:
    | "COD"
    | "KHALTI"
    | "ESEWA"
    | "STRIPE";

  status: string;

}



export interface PlaceOrderResponse extends Order {

  payment: PaymentResponse;

}