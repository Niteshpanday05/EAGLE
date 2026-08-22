export type DealStatus =
  | "inactive"
  | "upcoming"
  | "active"
  | "expired"
  | "sold_out";

export type DealDiscountType =
  | "percentage"
  | "fixed";

export interface DealProduct {
  id: string;
  name: string;
  slug: string;
  price: string;
  discount_price: string | null;
  thumbnail: string | null;
}

export interface Deal {
  id: string;
  name: string;
  slug: string;
  description: string;
  discount_type: DealDiscountType;
  discount_value: string;
  discount_percentage: string | null;
  starts_at: string;
  ends_at: string;
  status: DealStatus;
  remaining_uses: number | null;
  products: DealProduct[];
  priority: number;
}

export interface PaginatedDeals {
  count: number;
  next: string | null;
  previous: string | null;
  results: Deal[];
}