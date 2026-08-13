"use client";

import { useDashboardAnalytics } from "../hooks";

import AnalyticsSummary from "./AnalyticsSummary";
import DailySalesTable from "./DailySalesTable";
import TopProductsTable from "./TopProductsTable";
import OrderStatusTable from "./OrderStatusTable";

export default function AnalyticsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboardAnalytics();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Loading analytics...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-red-500">
        Failed to load analytics.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Sales, customer and order analytics.
        </p>
      </div>

      <AnalyticsSummary
        summary={data.summary}
      />

      <div className="grid gap-6 xl:grid-cols-2">

        <DailySalesTable
          sales={data.daily_sales}
        />

        <TopProductsTable
          products={data.top_products}
        />

      </div>

      <OrderStatusTable
        statuses={data.order_status}
      />

    </div>
  );
}