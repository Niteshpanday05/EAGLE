import { PaymentMethod } from "../types/payment";

export function isOnlinePayment(
  method: PaymentMethod
): boolean {
  return method !== "COD";
}

export function shouldRedirect(
  method: PaymentMethod
): boolean {
  return method !== "COD";
}

export function formatPaymentMethod(
  method: PaymentMethod
): string {
  switch (method) {
    case "COD":
      return "Cash on Delivery";

    case "KHALTI":
      return "Khalti";

    case "ESEWA":
      return "eSewa";

    case "STRIPE":
      return "Stripe";

    default:
      return method;
  }
}