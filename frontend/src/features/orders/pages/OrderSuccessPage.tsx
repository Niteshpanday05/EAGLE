"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Package,
  Truck,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();

  const orderNumber = searchParams.get("order");

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-4 py-8">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 text-center shadow-lg shadow-slate-200/60">

        {/* Success Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2
            size={38}
            className="text-green-600"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-5 text-3xl font-bold text-slate-900">
          Order Confirmed 🎉
        </h1>

        <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
          Your order has been placed successfully.
          We'll start preparing your items soon.
        </p>

        {/* Order Number */}
        {orderNumber && (
          <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-5 py-3">
            <p className="text-xs font-medium text-green-700">
              Order Number
            </p>

            <p className="mt-1 text-lg font-bold tracking-wide text-slate-900">
              {orderNumber}
            </p>
          </div>
        )}

        {/* Status Cards */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-slate-50 p-3">
            <Package
              size={20}
              className="mx-auto text-green-600"
            />

            <p className="mt-2 text-xs font-medium text-slate-700">
              Preparing
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <Truck
              size={20}
              className="mx-auto text-blue-600"
            />

            <p className="mt-2 text-xs font-medium text-slate-700">
              Shipping
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <CheckCircle2
              size={20}
              className="mx-auto text-purple-600"
            />

            <p className="mt-2 text-xs font-medium text-slate-700">
              Tracking
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <Link
            href="/orders"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            My Orders

            <ArrowRight size={16} />
          </Link>

          <Link
            href="/products"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ShoppingBag size={16} />

            Shop More
          </Link>

        </div>

      </div>
    </section>
  );
}