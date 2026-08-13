"use client";

import { ClipboardList } from "lucide-react";

interface OrdersHeaderProps {
  totalOrders: number;
}

export default function OrdersHeader({
  totalOrders,
}: OrdersHeaderProps) {
  return (
    <header className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-black p-3 text-white">
          <ClipboardList size={30} />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            My Orders
          </h1>

          <p className="mt-1 text-gray-500">
            View, track and manage all of your orders.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border bg-white px-6 py-4 shadow-sm">
        <p className="text-sm text-gray-500">
          Total Orders
        </p>

        <p className="text-3xl font-bold">
          {totalOrders}
        </p>
      </div>
    </header>
  );
}