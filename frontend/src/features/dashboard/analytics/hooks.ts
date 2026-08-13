import { useQuery } from "@tanstack/react-query";

import { getDashboardAnalytics } from "./api";

export function useDashboardAnalytics() {
  return useQuery({
    queryKey: ["dashboard-analytics"],
    queryFn: getDashboardAnalytics,
  });
}