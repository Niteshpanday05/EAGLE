import { useQuery } from "@tanstack/react-query";

import { getDashboardCustomers } from "./api";

export function useDashboardCustomers() {
  return useQuery({
    queryKey: ["dashboard-customers"],
    queryFn: getDashboardCustomers,
  });
}