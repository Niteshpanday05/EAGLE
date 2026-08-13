import api from "@/lib/axios";

import { DashboardReports } from "./types";

export async function getDashboardReports() {
  const response =
    await api.get<DashboardReports>(
      "/dashboard/reports/"
    );

  return response.data;
}