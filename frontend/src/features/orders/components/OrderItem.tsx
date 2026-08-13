"use client";

import Image from "next/image";

import { OrderItem as OrderItemType } from "../types/order.types";

interface OrderItemProps {
  item: OrderItemType;
}

export default function OrderItem({
  item,
}: OrderItemProps) {
 const imageUrl = item.thumbnail.startsWith("http")
  ? item.thumbnail
  : `http://127.0.0.1:8000${item.thumbnail}`;

console.log(imageUrl);

  return (
    <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-200 hover:shadow-md">
      {/* Product Image */}
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
       <img
  src={imageUrl}
  alt={item.product_name}
  className="h-full w-full object-cover"
/>
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-base font-semibold text-slate-900">
          {item.product_name}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            Qty: {item.quantity}
          </span>

          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
            Rs. {item.unit_price} each
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Total
        </p>

        <p className="mt-1 text-lg font-bold text-slate-900">
          Rs. {item.subtotal}
        </p>
      </div>
    </article>
  );
}