import { PaymentMethod } from "../types/payment";

export function redirectToPayment(
  method: PaymentMethod,
  redirectUrl?: string
) {
  switch (method) {
    case "COD":
      return;

    case "KHALTI":
    case "ESEWA":
    case "STRIPE":
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
      return;

    default:
      console.error("Unsupported payment method.");
  }
}