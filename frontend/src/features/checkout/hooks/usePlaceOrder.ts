"use client";

import { useMutation } from "@tanstack/react-query";

import checkoutApi from "../api/checkout.api";

import {
  PlaceOrderPayload,
  PlaceOrderResponse,
} from "../types/checkout.types";


export function usePlaceOrder() {

  return useMutation<

    PlaceOrderResponse,

    Error,

    PlaceOrderPayload

  >({

    mutationFn:
      checkoutApi.placeOrder,

  });

}