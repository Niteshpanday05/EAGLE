import { Product } from "./featured.types";


export function getProductPrice(
  product: Product
) {
  return product.discount_price ?? product.price;
}


export function hasDiscount(
  product: Product
) {
  return Boolean(
    product.discount_price &&
    product.discount_price < product.price
  );
}


export function calculateDiscount(
  price: number,
  discountPrice?: number | null
) {
  if (!discountPrice) return 0;

  return Math.round(
    ((price - discountPrice) / price) * 100
  );
}


export function isProductAvailable(
  product: Product
) {
  return product.stock > 0;
}