import { useQuery } from "@tanstack/react-query";

import { getDashboardProducts } from "./api";

export function useDashboardProducts() {
  return useQuery({
    queryKey: ["dashboard-products"],

    queryFn: getDashboardProducts,
  });
}