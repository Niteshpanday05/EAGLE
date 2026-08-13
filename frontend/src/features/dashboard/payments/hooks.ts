import { useQuery } from "@tanstack/react-query";

import { getDashboardPayments } from "./api";

export function useDashboardPayments() {
  return useQuery({
    queryKey: ["dashboard-payments"],
    queryFn: getDashboardPayments,
  });
}