"use client";

import { Trash2 } from "lucide-react";

interface CartHeaderProps {
  totalItems: number;
  onClearCart: () => void;
}

export default function CartHeader({
  totalItems,
  onClearCart,
}: CartHeaderProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center sm:justify-between">

      {/* Left */}
      <div className="flex items-end gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Your Cart
        </h1>

        <span className="pb-1 text-sm text-gray-400">
          ({totalItems} {totalItems === 1 ? "product" : "products"})
        </span>
      </div>

      {/* Right */}
      {/* <button
        type="button"
        onClick={onClearCart}
        className="flex items-center gap-2 self-start text-sm font-medium text-red-500 transition hover:text-red-600 sm:self-auto"
      >
        <Trash2 size={16} />
        <span>Clear cart</span>
      </button> */}

    </div>
  );
}