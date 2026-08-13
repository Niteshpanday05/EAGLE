import { useQuery } from "@tanstack/react-query";

import { getDashboardNotifications } from "./api";

export function useDashboardNotifications() {
  return useQuery({
    queryKey: ["dashboard-notifications"],
    queryFn: getDashboardNotifications,
  });
}