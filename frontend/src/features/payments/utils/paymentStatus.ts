import { PaymentStatus } from "../types/payment";

export const getPaymentStatusColor = (
  status: PaymentStatus
): string => {
  switch (status) {
    case "SUCCESS":
      return "text-green-600";

    case "FAILED":
      return "text-red-600";

    case "PROCESSING":
      return "text-yellow-600";

    case "PENDING":
      return "text-blue-600";

    case "REFUNDED":
      return "text-purple-600";

    default:
      return "text-gray-600";
  }
};

export const isPaymentCompleted = (
  status: PaymentStatus
) => status === "SUCCESS";