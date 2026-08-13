"use client";

import { useQuery } from "@tanstack/react-query";

import orderApi from "../api/order.api";

export function useOrder(
  id: number | string
) {
  const query = useQuery({
    queryKey: ["order", id],
    queryFn: () => orderApi.getOrder(id),
    enabled: !!id,
  });

  return {
    order: query.data,
    loading: query.isPending,
    error: query.error,
    refetch: query.refetch,
  };
}