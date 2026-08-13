"use client";

import Link from "next/link";

import { PackageSearch } from "lucide-react";

export default function EmptyOrders() {
  return (
    <section className="rounded-2xl border border-dashed bg-white px-8 py-16 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <PackageSearch
          size={40}
          className="text-gray-500"
        />
      </div>

      <h2 className="mt-6 text-2xl font-semibold">
        No Orders Yet
      </h2>

      <p className="mx-auto mt-3 max-w-md text-gray-500">
        You haven't placed any orders yet.
        Browse our products and place your
        first order today.
      </p>

      <Link
        href="/products"
        className="mt-8 inline-flex rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-900"
      >
        Continue Shopping
      </Link>
    </section>
  );
}
