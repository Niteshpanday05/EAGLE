import api from "@/lib/axios";

import { DashboardPayments } from "./types";

export async function getDashboardPayments() {
  const response =
    await api.get<DashboardPayments>(
      "/dashboard/payments/"
    );

  return response.data;
}