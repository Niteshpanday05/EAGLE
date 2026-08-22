import { useQuery } from "@tanstack/react-query";

import { dealsApi } from "../api/dealsApi";

export const dealKeys = {
  all: ["deals"] as const,

  lists: () => [...dealKeys.all, "list"] as const,

  list: () => [...dealKeys.lists(), "active"] as const,

  flash: () => [...dealKeys.all, "flash"] as const,

  endingSoon: () =>
    [...dealKeys.all, "ending-soon"] as const,

  detail: (slug: string) =>
    [...dealKeys.all, "detail", slug] as const,
};

export function useDeals() {
  return useQuery({
    queryKey: dealKeys.list(),

    queryFn: dealsApi.getDeals,

    staleTime: 60 * 1000,
  });
}

export function useFlashDeals() {
  return useQuery({
    queryKey: dealKeys.flash(),

    queryFn: dealsApi.getFlashDeals,

    staleTime: 60 * 1000,
  });
}

export function useEndingSoonDeals() {
  return useQuery({
    queryKey: dealKeys.endingSoon(),

    queryFn: dealsApi.getEndingSoonDeals,

    staleTime: 30 * 1000,
  });
}

export function useDeal(slug: string) {
  return useQuery({
    queryKey: dealKeys.detail(slug),

    queryFn: () => dealsApi.getDeal(slug),

    enabled: Boolean(slug),

    staleTime: 60 * 1000,
  });
}