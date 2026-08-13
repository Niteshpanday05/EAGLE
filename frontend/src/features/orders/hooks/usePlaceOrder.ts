"use client";

import {
  useMutation
} from "@tanstack/react-query";


import checkoutApi from "@/features/checkout/api/checkout.api";


export function usePlaceOrder(){

  return useMutation({

    mutationFn:
      checkoutApi.placeOrder,

  });

}