"use client";

import { PaymentStatus as Status } from "../types/payment";
import { getPaymentStatusColor } from "../utils/paymentStatus";

interface PaymentStatusProps {
  status: Status;
}

export default function PaymentStatus({
  status,
}: PaymentStatusProps) {
  return (
    <div
      className={`rounded-lg px-3 py-2 font-medium ${getPaymentStatusColor(
        status
      )}`}
    >
      Payment Status: {status}
    </div>
  );
}