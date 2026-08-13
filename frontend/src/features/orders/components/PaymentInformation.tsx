"use client";

import { CreditCard } from "lucide-react";

import PaymentStatus from "./PaymentStatus";

interface PaymentInformationProps {
  paymentMethod: string;
  paymentStatus: string;
}

export default function PaymentInformation({
  paymentMethod,
  paymentStatus,
}: PaymentInformationProps) {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-2">
        <CreditCard size={22} />

        <h2 className="text-xl font-semibold">Payment</h2>
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-sm text-gray-500">Payment Method</p>

          <p className="mt-1 font-medium">{paymentMethod}</p>
        </div>

        <div>
          <p className="mb-2 text-sm text-gray-500">Payment Status</p>

          <PaymentStatus status={paymentStatus} />
        </div>
      </div>
    </section>
  );
}
