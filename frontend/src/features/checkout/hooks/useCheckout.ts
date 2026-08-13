import { useQuery } from "@tanstack/react-query";

import checkoutApi from "../api/checkout.api";

export function useCheckout() {
  const query = useQuery({
    queryKey: ["checkout"],
    queryFn: () => checkoutApi.getCheckout(),
  });

  return {
    checkout: query.data,
    loading: query.isPending,
    error: query.error,
    refetch: query.refetch,
  };
}