import { useQuery } from "@tanstack/react-query";

import { getDashboardOrders } from "./api";

export function useDashboardOrders() {
  return useQuery({
    queryKey: ["dashboard-orders"],

    queryFn: getDashboardOrders,
  });
}