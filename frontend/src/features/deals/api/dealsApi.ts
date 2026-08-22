import apiClient from "@/lib/axios";

import type {
  Deal,
  PaginatedDeals,
} from "../types/deal.types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

function normalizeImageUrl(
  image: string | null,
): string | null {
  if (!image) {
    return null;
  }

  // Already an absolute URL
  if (
    image.startsWith("http://") ||
    image.startsWith("https://")
  ) {
    return image;
  }

  // Convert Django relative media URL
  // into an absolute backend URL.
  if (API_BASE_URL) {
    return `${API_BASE_URL.replace(
      /\/api\/v1$/,
      "",
    )}${image.startsWith("/") ? image : `/${image}`}`;
  }

  return image;
}

function normalizeDeal(
  deal: Deal,
): Deal {
  return {
    ...deal,

    products: deal.products.map((product) => ({
      ...product,
      thumbnail: normalizeImageUrl(
        product.thumbnail,
      ),
    })),
  };
}

function normalizeDeals(
  response: PaginatedDeals,
): PaginatedDeals {
  return {
    ...response,

    results: response.results.map(
      normalizeDeal,
    ),
  };
}

export const dealsApi = {
  getDeals: async (): Promise<PaginatedDeals> => {
    const response =
      await apiClient.get<PaginatedDeals>(
        "/deals/",
      );

    return normalizeDeals(response.data);
  },

  getDeal: async (
    slug: string,
  ): Promise<Deal> => {
    const response =
      await apiClient.get<Deal>(
        `/deals/${slug}/`,
      );

    return normalizeDeal(response.data);
  },

  getFlashDeals:
    async (): Promise<PaginatedDeals> => {
      const response =
        await apiClient.get<PaginatedDeals>(
          "/deals/flash/",
        );

      return normalizeDeals(response.data);
    },

  getEndingSoonDeals:
    async (): Promise<PaginatedDeals> => {
      const response =
        await apiClient.get<PaginatedDeals>(
          "/deals/ending-soon/",
        );

      return normalizeDeals(response.data);
    },
};