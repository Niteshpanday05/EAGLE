"use client";

import Link from "next/link";

interface CartActionsProps {
  onClearCart: () => void;
  loading?: boolean;
}

export default function CartActions({
  onClearCart,
  loading = false,
}: CartActionsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">

      <Link
        href="/products"
        className="rounded-lg border px-5 py-3 font-medium transition hover:bg-gray-100"
      >
        Continue Shopping
      </Link>

      <button
        onClick={onClearCart}
        disabled={loading}
        className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
      >
        Clear Cart
      </button>

    </div>
  );
}