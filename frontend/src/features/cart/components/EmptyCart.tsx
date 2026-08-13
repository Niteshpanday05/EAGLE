"use client";

import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h2 className="mb-3 text-3xl font-bold">
        Your cart is empty
      </h2>

      <p className="mb-8 text-gray-500">
        Looks like you haven't added anything yet.
      </p>

      <Link
        href="/products"
        className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
      >
        Continue Shopping
      </Link>
    </div>
  );
}