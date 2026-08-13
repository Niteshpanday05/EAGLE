import { useMutation } from "@tanstack/react-query";

import { queryClient } from "@/lib/query-client";

import { AddressAPI } from "../api/address.api";

export function useCreateAddress() {
  return useMutation({
    mutationFn: AddressAPI.create,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["addresses"],
      });
    },
  });
}