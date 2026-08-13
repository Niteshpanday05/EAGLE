"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { cartApi } from "../api/cart.api";

import {
  AddToCartRequest,
  UpdateCartItemRequest,
} from "../types/cart.types";

const CART_QUERY_KEY = ["cart"];

export function useCart() {
  return useQuery({
    queryKey: CART_QUERY_KEY,
    queryFn: cartApi.getCart,
  });
}

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AddToCartRequest) => cartApi.addToCart(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CART_QUERY_KEY,
      });
    },
  });
}

export function useUpdateCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      itemId,
      data,
    }: {
      itemId: number;
      data: UpdateCartItemRequest;
    }) => cartApi.updateCartItem(itemId, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CART_QUERY_KEY,
      });
    },
  });
}

export function useRemoveCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (itemId: number) => cartApi.removeCartItem(itemId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CART_QUERY_KEY,
      });
    },
  });
}

export function useClearCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cartApi.clearCart,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CART_QUERY_KEY,
      });
    },
  });
}