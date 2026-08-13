import axios from "@/lib/axios";

import {
  CheckoutResponse,
  PlaceOrderPayload,
  OrderResponse,
} from "../types/checkout.types";

class CheckoutApi {
  async getCheckout(): Promise<CheckoutResponse> {
    const response = await axios.get("/checkout/");

    return response.data;
  }

  async placeOrder(
    data: PlaceOrderPayload
  ): Promise<OrderResponse> {
    const response = await axios.post(
      "/orders/place/",
      data
    );

    return response.data;
  }
}

export default new CheckoutApi();