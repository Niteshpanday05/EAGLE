import axios from "@/lib/axios";

import {
  InitiatePaymentRequest,
  InitiatePaymentResponse,
  VerifyPaymentRequest,
  VerifyPaymentResponse,
  Payment,
} from "../types/payment";


class PaymentApi {

  async initiatePayment(
    data: InitiatePaymentRequest
  ): Promise<InitiatePaymentResponse> {

    const response = await axios.post(
      "/payments/initiate/",
      data
    );

    return response.data;
  }


  async verifyPayment(
    data: VerifyPaymentRequest
  ): Promise<VerifyPaymentResponse> {

    const response = await axios.post(
      "/payments/verify/",
      data
    );

    return response.data;
  }


  async getPaymentDetail(
    reference: string
  ): Promise<Payment> {

    const response = await axios.get(
      `/payments/detail/?reference=${reference}`
    );

    return response.data;
  }

}


export default new PaymentApi();

export function redirectToPaymentGateway(
  paymentUrl?: string
) {

  if(!paymentUrl){
    throw new Error(
      "Payment URL missing"
    );
  }


  window.location.href =
    paymentUrl;

}