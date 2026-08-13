import apiClient from "@/lib/axios";


import {
  AddToCartRequest,
  Cart,
  UpdateCartItemRequest,
} from "../types/cart.types";

class CartApi {
  async getCart(): Promise<Cart> {
    const response = await apiClient.get<Cart>("/cart/");
    return response.data;
  }

  async addToCart(data: AddToCartRequest): Promise<Cart> {
    const response = await apiClient.post<Cart>("/cart/add/", data);
    return response.data;
  }

  async updateCartItem(
    itemId: number,
    data: UpdateCartItemRequest
  ): Promise<Cart> {
    const response = await apiClient.patch<Cart>(
      `/cart/items/${itemId}/`,
      data
    );

    return response.data;
  }

  async removeCartItem(itemId: number): Promise<Cart> {
    const response = await apiClient.delete<Cart>(
      `/cart/items/${itemId}/delete/`
    );

    return response.data;
  }

  async clearCart(): Promise<Cart> {
    const response = await apiClient.delete<Cart>("/cart/clear/");

    return response.data;
  }
}

export const cartApi = new CartApi();