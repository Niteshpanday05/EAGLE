import api from "@/lib/axios";

import { DashboardActivity } from "./types";

export async function getDashboardActivity() {
  const response =
    await api.get<DashboardActivity>(
      "/dashboard/activity/"
    );

  return response.data;
}