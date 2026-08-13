"use client";

import { useMemo, useState } from "react";

import { useOrders } from "../hooks/useOrders";

import OrdersHeader from "../components/OrdersHeader";
import OrderFilters from "../components/OrderFilters";
import OrderCard from "../components/OrderCard";
import OrderSkeleton from "../components/OrderSkeleton";
import EmptyOrders from "../components/EmptyOrders";

export default function OrdersPage() {
  const {
    orders,
    loading,
    error,
  } = useOrders();

  const [filter, setFilter] =
    useState("ALL");

  const filteredOrders = useMemo(() => {
    if (filter === "ALL") {
      return orders;
    }

    return orders.filter(
      (order) =>
        order.status.toUpperCase() === filter
    );
  }, [orders, filter]);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-10">

        <OrderSkeleton />

        <div className="mt-8 space-y-6">
          <OrderSkeleton />
          <OrderSkeleton />
          <OrderSkeleton />
        </div>

      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center px-4">

        <div className="rounded-3xl border bg-white p-10 text-center shadow-sm">

          <h2 className="text-3xl font-bold">
            Unable to load orders
          </h2>

          <p className="mt-3 text-gray-500">
            Something went wrong while loading
            your orders. Please try again later.
          </p>

        </div>

      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">

      <OrdersHeader
        totalOrders={orders.length}
      />

      {!orders.length ? (
        <EmptyOrders />
      ) : (
        <>

          <OrderFilters
            value={filter}
            onChange={setFilter}
          />

          {filteredOrders.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed bg-white py-20 text-center">

              <h2 className="text-2xl font-semibold">
                No Orders Found
              </h2>

              <p className="mt-3 text-gray-500">
                There are no{" "}
                {filter.toLowerCase()} orders.
              </p>

            </div>
          ) : (
            <div className="mt-8 space-y-6">

              {filteredOrders.map(
                (order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                  />
                )
              )}

            </div>
          )}

        </>
      )}

    </section>
  );
}