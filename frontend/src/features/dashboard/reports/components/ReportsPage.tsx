"use client";

import { useDashboardReports } from "../hooks";

import SalesReportCard from "./SalesReportCard";
import OrdersReportCard from "./OrdersReportCard";
import CustomersReportCard from "./CustomersReportCard";
import RevenueByPaymentTable from "./RevenueByPaymentTable";

export default function ReportsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboardReports();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Loading reports...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-red-500">
        Failed to load reports.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Reports Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Sales, customer and order reports.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <SalesReportCard
          report={data.sales}
        />

        <OrdersReportCard
          report={data.orders}
        />

        <CustomersReportCard
          report={data.customers}
        />
      </div>

      <RevenueByPaymentTable
        payments={data.revenue_by_payment}
      />

    </div>
  );
}