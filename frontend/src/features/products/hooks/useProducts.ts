import { useQuery } from "@tanstack/react-query";

import { productApi } from "../api/product.api";
import { ProductFilters } from "../types/filter.types";


export const useProducts = (
  filters?: ProductFilters
) => {
  return useQuery({
    queryKey: ["products", filters],

    queryFn: async () => {
      try {
        const response = await productApi.getProducts(filters);

        console.log("Products API Response:", response);

        return response;

      } catch (error) {
        console.error(
          "Products API Error:",
          error
        );

        throw error;
      }
    },

    staleTime: 1000 * 60 * 5,

    retry: false,
  });
};



export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],

    queryFn: async () => {
      try {
        const response = await productApi.getCategories();

        console.log(
          "Categories API Response:",
          response
        );

        return response;

      } catch (error) {
        console.error(
          "Categories API Error:",
          error
        );

        throw error;
      }
    },

    staleTime: 1000 * 60 * 30,

    retry: false,
  });
};