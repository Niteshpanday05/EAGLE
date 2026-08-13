"use client";

import { useDashboardInventory } from "../hooks";

import InventorySummary from "./InventorySummary";
import LowStockTable from "./LowStockTable";
import OutOfStockTable from "./OutOfStockTable";
import HighestStockTable from "./HighestStockTable";

export default function InventoryPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboardInventory();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Loading inventory...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-red-500">
        Failed to load inventory.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Inventory Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Monitor stock levels and inventory health.
        </p>
      </div>

      <InventorySummary summary={data.summary} />

      <div className="grid gap-6 xl:grid-cols-3">
        <LowStockTable products={data.low_stock_products} />

        <OutOfStockTable
          products={data.out_of_stock_products}
        />

        <HighestStockTable
          products={data.highest_stock_products}
        />
      </div>

    </div>
  );
}