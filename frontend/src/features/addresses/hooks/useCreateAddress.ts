"use client";

import { useMutation } from "@tanstack/react-query";

import { queryClient } from "@/lib/query-client";
import AddressApi from "../api/address.api";
import { AddressFormData } from "@/features/addresses/types";

export function useCreateAddress() {
  const mutation = useMutation({
    mutationFn: (data: AddressFormData) =>
      AddressApi.createAddress(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["addresses"],
      });
    },
  });

  return {
    createAddress: mutation.mutateAsync,
    loading: mutation.isPending,
    error: mutation.error,
  };
}