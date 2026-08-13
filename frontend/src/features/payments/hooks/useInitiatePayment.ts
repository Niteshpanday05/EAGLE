import { useMutation } from "@tanstack/react-query";

import paymentApi from "../api/paymentApi";


export function useInitiatePayment() {

  return useMutation({
    mutationFn: paymentApi.initiatePayment,
  });

}