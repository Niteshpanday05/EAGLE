"use client";

import Link from "next/link";
import {
  Package,
  ChevronRight,
  Calendar,
  CreditCard,
  ShoppingBag,
} from "lucide-react";

import { Order } from "../types/order.types";
import OrderStatus from "./OrderStatus";

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({
  order,
}: OrderCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
            Order
          </span>

          <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
            {order.order_number}
          </h3>
        </div>

        <OrderStatus status={order.status} />
      </div>

      {/* Info */}
      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
          <Calendar
            size={16}
            className="mb-2 text-sky-600"
          />

          <p className="text-xs text-slate-500">
            Date
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            {new Date(order.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
          <ShoppingBag
            size={16}
            className="mb-2 text-violet-600"
          />

          <p className="text-xs text-slate-500">
            Items
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            {order.items.length}
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
          <CreditCard
            size={16}
            className="mb-2 text-amber-600"
          />

          <p className="text-xs text-slate-500">
            Payment
          </p>

          <p className="mt-1 text-sm font-semibold capitalize text-slate-900">
            {order.payment_method}
          </p>
        </div>

        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-3">
          <p className="text-xs text-emerald-600">
            Total
          </p>

          <p className="mt-2 text-xl font-bold text-emerald-700">
            Rs. {order.total}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
            <Package
              size={17}
              className="text-blue-600"
            />
          </div>

          <span>
            {order.items.length} Products
          </span>
        </div>

        <Link
          href={`/orders/${order.order_number}`}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-black"
        >
          View Details

          <ChevronRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}