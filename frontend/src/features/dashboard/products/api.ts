import api from "@/lib/axios";

import { DashboardProducts } from "./types";

export async function getDashboardProducts() {
  const response =
    await api.get<DashboardProducts>(
      "/dashboard/products/"
    );

  return response.data;
}