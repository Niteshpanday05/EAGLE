import api from "@/lib/axios";

import { DashboardAnalytics } from "./types";

export async function getDashboardAnalytics() {
  const response =
    await api.get<DashboardAnalytics>(
      "/dashboard/analytics/"
    );

  return response.data;
}