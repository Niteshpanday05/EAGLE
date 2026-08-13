import { ProductFilters } from "../types/filter.types";

/**
 * Format price
 * Example: 1500 -> $1,500.00
 */
export const formatPrice = (
  price: number,
  currency = "NPR"
): string => {
  return new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Discount %
 */
export const getDiscountPercentage = (
  price: number,
  discountPrice?: number | null
): number => {
  if (!discountPrice) return 0;

  return Math.round(
    ((price - discountPrice) / price) * 100
  );
};

/**
 * Final price
 */
export const getFinalPrice = (
  price: number,
  discountPrice?: number | null
): number => {
  return discountPrice || price;
};

/**
 * Stock status
 */
export const isInStock = (
  stock: number
): boolean => {
  return stock > 0;
};

/**
 * Short text
 */
export const truncateText = (
  text: string,
  length = 100
): string => {
  if (text.length <= length) return text;

  return text.slice(0, length) + "...";
};

/**
 * Rating stars
 */
export const generateStars = (
  rating: number
): number[] => {
  return Array.from(
    { length: Math.round(rating) },
    (_, i) => i + 1
  );
};

/**
 * Build API params
 */
export const buildQueryParams = (
  filters: ProductFilters
) => {
  return Object.fromEntries(
    Object.entries(filters).filter(
      ([_, value]) =>
        value !== undefined &&
        value !== "" &&
        value !== null
    )
  );
};

/**
 * Rating text
 */
export const formatRating = (
  rating: number
): string => {
  return rating.toFixed(1);
};