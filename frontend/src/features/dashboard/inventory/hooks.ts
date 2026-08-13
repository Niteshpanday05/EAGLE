import { useQuery } from "@tanstack/react-query";

import { getDashboardInventory } from "./api";

export function useDashboardInventory() {
  return useQuery({
    queryKey: ["dashboard-inventory"],
    queryFn: getDashboardInventory,
  });
}