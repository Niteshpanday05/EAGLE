import api from "@/lib/axios";

import { DashboardCustomers } from "./types";

export async function getDashboardCustomers() {
  const response =
    await api.get<DashboardCustomers>(
      "/dashboard/customers/"
    );

  return response.data;
}