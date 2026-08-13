import { PaymentMethod } from "../types/payment";

export interface PaymentMethodOption {
  value: PaymentMethod;
  label: string;
  description: string;
  enabled: boolean;
}

export const PAYMENT_METHODS: PaymentMethodOption[] = [
  {
    value: "COD",
    label: "Cash on Delivery",
    description: "Pay when your order arrives.",
    enabled: true,
  },
  {
    value: "KHALTI",
    label: "Khalti",
    description: "Pay securely using Khalti.",
    enabled: true,
  },
  {
    value: "ESEWA",
    label: "eSewa",
    description: "Pay using your eSewa wallet.",
    enabled: true,
  },
  {
    value: "STRIPE",
    label: "Stripe",
    description: "Pay with debit or credit card.",
    enabled: true,
  },
];