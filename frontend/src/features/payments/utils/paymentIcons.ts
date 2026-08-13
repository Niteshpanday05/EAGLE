import {
  CreditCard,
  Wallet,
  Banknote,
} from "lucide-react";

import { PaymentMethod } from "../types/payment";

export function getPaymentIcon(
  method: PaymentMethod
) {
  switch (method) {
    case "COD":
      return Banknote;

    case "KHALTI":
      return Wallet;

    case "ESEWA":
      return Wallet;

    case "STRIPE":
      return CreditCard;

    default:
      return CreditCard;
  }
}