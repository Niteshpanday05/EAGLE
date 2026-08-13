import { useQuery } from "@tanstack/react-query";

import paymentApi from "../api/paymentApi";


export function usePayment(reference: string) {

  return useQuery({

    queryKey: [
      "payment",
      reference
    ],

    queryFn: () =>
      paymentApi.getPaymentDetail(reference),

    enabled: Boolean(reference),

  });

}