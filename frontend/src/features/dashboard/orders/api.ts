import api from "@/lib/axios";

import { DashboardOrder } from "./types";

export async function getDashboardOrders() {
  const response =
    await api.get<DashboardOrder[]>(
      "/dashboard/orders/"
    );

  return response.data;
}