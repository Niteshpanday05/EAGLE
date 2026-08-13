import axios from "@/lib/axios";

import {
  Order,
  PlaceOrderPayload,
  PlaceOrderResponse,
} from "../types/order.types";


class OrderApi {


  async getOrders(): Promise<Order[]> {

    const response = await axios.get(
      "/orders/"
    );

    return response.data;
  }



  async getOrder(
    orderNumber: string
  ): Promise<Order> {

    const response = await axios.get(
      `/orders/${orderNumber}/`
    );

    return response.data;
  }




  async placeOrder(
    data: PlaceOrderPayload
  ): Promise<PlaceOrderResponse> {


    const response = await axios.post(

      "/orders/place/",

      data

    );


    return response.data;
  }


}


export default new OrderApi();