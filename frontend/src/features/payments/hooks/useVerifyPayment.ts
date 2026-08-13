import { useMutation } from "@tanstack/react-query";

import paymentApi from "../api/paymentApi";


export function useVerifyPayment() {

  return useMutation({
    mutationFn: paymentApi.verifyPayment,
  });

}