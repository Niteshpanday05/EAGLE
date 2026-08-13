"use client";

import ProductsSummary from "./ProductsSummary";
import RecentProductsTable from "./RecentProductsTable";
import TopProductsTable from "./TopProductsTable";

import { useDashboardProducts } from "../hooks";

export default function ProductsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboardProducts();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Loading products...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-red-500">
        Failed to load products.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Products Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Product inventory and performance overview.
        </p>
      </div>

      <ProductsSummary summary={data.summary} />

      <div className="grid gap-6 xl:grid-cols-2">
        <TopProductsTable
          products={data.top_products}
        />

        <RecentProductsTable
          products={data.recent_products}
        />
      </div>

    </div>
  );
}