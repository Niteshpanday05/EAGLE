import api from "@/lib/axios";

import { DashboardInventory } from "./types";

export async function getDashboardInventory() {
  const response =
    await api.get<DashboardInventory>(
      "/dashboard/inventory/"
    );

  return response.data;
}