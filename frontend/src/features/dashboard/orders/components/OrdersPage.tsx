"use client";

import OrdersTable from "./OrdersTable";

import { useDashboardOrders } from "../hooks";

export default function OrdersPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboardOrders();

  if (isLoading) {
    return <div>Loading orders...</div>;
  }

  if (isError || !data) {
    return (
      <div>
        Failed to load orders.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Orders
        </h1>

        <p className="text-gray-500">
          Manage customer orders.
        </p>

      </div>

      <OrdersTable
        orders={data}
      />

    </div>
  );
}