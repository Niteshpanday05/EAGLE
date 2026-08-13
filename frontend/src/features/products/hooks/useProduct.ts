import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/product.api";

export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => productApi.getProduct(slug),
    enabled: !!slug,
  });
};

export const useRelatedProducts = (slug: string) => {
  return useQuery({
    queryKey: ["related-products", slug],
    queryFn: () => productApi.getRelatedProducts(slug),
    enabled: !!slug,
  });
};