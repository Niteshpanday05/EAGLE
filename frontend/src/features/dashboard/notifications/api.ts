import api from "@/lib/axios";

import { DashboardNotifications } from "./types";

export async function getDashboardNotifications() {
  const response =
    await api.get<DashboardNotifications>(
      "/dashboard/notifications/"
    );

  return response.data;
}