"use client";

import { useQuery } from "@tanstack/react-query";

import orderApi from "../api/order.api";

export function useOrders() {
  const query = useQuery({
    queryKey: ["orders"],
    queryFn: () => orderApi.getOrders(),
  });

  return {
    orders: query.data ?? [],
    loading: query.isPending,
    error: query.error,
    refetch: query.refetch,
  };
}