import apiClient from "@/lib/axios";

import { CategoryListResponse } from "../types";

export const categoryApi = {
  async getCategories() {
    const response = await apiClient.get<CategoryListResponse>(
      "/categories/"
    );

    return response.data;
  },
};