import { categoryApi } from "./api/categoryApi";

export const categoryService = {
  async getCategories() {
    return categoryApi.getCategories();
  },
};