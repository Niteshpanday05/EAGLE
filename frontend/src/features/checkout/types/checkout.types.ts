export interface CheckoutItem {

  id: number;

  product_id: number;

  product_name: string;

  thumbnail: string;

  price: string;

  quantity: number;

  subtotal: string;

}



export interface CheckoutPaymentMethod {

  code: string;

  name: string;

}



export interface CheckoutAddress {

  id: number;

  full_name: string;

  phone_number: string;

  country: string;

  state: string;

  city: string;

  postal_code: string;

  address_line_1: string;

  address_line_2: string;

  landmark: string;

  is_default: boolean;

}



export interface CheckoutResponse {

  items: CheckoutItem[];

  addresses: CheckoutAddress[];

  default_address: CheckoutAddress | null;


  subtotal: string;

  shipping: string;

  tax: string;

  discount: string;

  total: string;


  payment_methods: CheckoutPaymentMethod[];

}




export interface PlaceOrderPayload {

  address_id: number;


  payment_method:
    | "COD"
    | "KHALTI"
    | "ESEWA"
    | "STRIPE";


  notes?: string;

}




export interface PlaceOrderResponse {

  id: number;

  order_number: string;

  status: string;

  payment_status: string;

  total: string;

  created_at: string;


  payment: {

    reference: string;


    method:
      | "COD"
      | "KHALTI"
      | "ESEWA"
      | "STRIPE";


    status: string;

  };

}