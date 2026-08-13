import { useQuery } from "@tanstack/react-query";

import { getDashboardReports } from "./api";

export function useDashboardReports() {
  return useQuery({
    queryKey: ["dashboard-reports"],
    queryFn: getDashboardReports,
  });
}