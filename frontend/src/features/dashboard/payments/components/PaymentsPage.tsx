"use client";

import { useDashboardPayments } from "../hooks";

import PaymentsSummary from "./PaymentsSummary";
import PaymentMethodsTable from "./PaymentMethodsTable";
import RecentPaymentsTable from "./RecentPaymentsTable";

export default function PaymentsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboardPayments();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Loading payments...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-red-500">
        Failed to load payments.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Payments Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Monitor payment performance and revenue.
        </p>
      </div>

      <PaymentsSummary summary={data.summary} />

      <div className="grid gap-6 xl:grid-cols-2">
        <PaymentMethodsTable
          methods={data.payment_methods}
        />

        <RecentPaymentsTable
          payments={data.recent_payments}
        />
      </div>

    </div>
  );
}