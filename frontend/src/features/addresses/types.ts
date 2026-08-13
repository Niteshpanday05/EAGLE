export interface Address {
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
  created_at: string;
  updated_at: string;
}

export interface AddressFormData {
  full_name: string;
  phone_number: string;
  country: string;
  state: string;
  city: string;
  postal_code: string;
  address_line_1: string;
  address_line_2: string;
  landmark: string;
}