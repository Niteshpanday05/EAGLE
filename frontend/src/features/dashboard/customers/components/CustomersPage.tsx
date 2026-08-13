"use client";

import { useDashboardCustomers } from "../hooks";

import CustomersSummary from "./CustomersSummary";
import RecentCustomersTable from "./RecentCustomersTable";
import CustomerGrowthTable from "./CustomerGrowthTable";

export default function CustomersPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboardCustomers();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Loading customers...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-red-500">
        Failed to load customers.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Customers Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Customer statistics and growth overview.
        </p>
      </div>

      <CustomersSummary
        summary={data.summary}
      />

      <div className="grid gap-6 xl:grid-cols-2">

        <RecentCustomersTable
          customers={data.recent_customers}
        />

        <CustomerGrowthTable
          growth={data.growth}
        />

      </div>

    </div>
  );
}