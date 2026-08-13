import { useQuery } from "@tanstack/react-query";

import { productApi } from "../api/product.api";
import { ProductFilters } from "../types/filter.types";

export const useProducts = (filters?: ProductFilters) => {
  return useQuery({
    queryKey: ["products", filters],

    queryFn: async () => {
      console.log("🚀 PRODUCTS REQUEST STARTED");

      try {
        const response = await productApi.getProducts(filters);

        console.log("✅ PRODUCTS REQUEST FINISHED");
        console.log("PRODUCTS DATA:", response);

        return response;
      } catch (error) {
        console.error("❌ PRODUCTS REQUEST FAILED:", error);
        throw error;
      }
    },

    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};