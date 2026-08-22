"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Heart,
  ShoppingCart,
} from "lucide-react";

import type { DealProduct } from "../types/deal.types";

interface DealCardProps {
  product: DealProduct;
  dealSlug: string;
  discountType: "percentage" | "fixed";
  discountValue: string;
  endsAt: string;
}

export default function DealCard({
  product,
  dealSlug,
  discountType,
  discountValue,
  endsAt,
}: DealCardProps) {
  const discountLabel =
    discountType === "percentage"
      ? `${Number(discountValue)}% OFF`
      : `Rs. ${Number(discountValue).toLocaleString()} OFF`;

  const basePrice = Number(product.price);

  const dealDiscount =
    discountType === "percentage"
      ? (basePrice * Number(discountValue)) / 100
      : Number(discountValue);

  const finalPrice = Math.max(
    basePrice - dealDiscount,
    0,
  );

  

  return (
    
    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg">
      {/* Discount */}
      <div className="absolute left-3 top-3 z-10 rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white">
        {discountLabel}
      </div>

      {/* Wishlist */}
      <button
        type="button"
        aria-label={`Add ${product.name} to wishlist`}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-neutral-100"
      >
        <Heart className="h-4 w-4" />
      </button>

      {/* Product Image */}
      <Link
        href={`/menu/${product.id}`}
        className="block"
      >
        <div className="relative aspect-square overflow-hidden bg-neutral-100">
          {product.thumbnail ? (
           <Image
  src={product.thumbnail}
  alt={product.name}
  fill
  unoptimized
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  className="object-cover transition-transform duration-500 group-hover:scale-105"
/>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-neutral-400">
              No image
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link
          href={`/menu/${product.id}`}
          className="line-clamp-2 text-sm font-semibold text-neutral-900 transition hover:text-neutral-600"
        >
          {product.name}
        </Link>

        {/* Price */}
        <div className="mt-3 flex items-end gap-2">
          <span className="text-lg font-bold text-neutral-900">
            Rs. {finalPrice.toLocaleString()}
          </span>

          <span className="text-sm text-neutral-400 line-through">
            Rs. {basePrice.toLocaleString()}
          </span>
        </div>

        {/* Savings */}
        <p className="mt-1 text-xs font-medium text-neutral-500">
          Save Rs.{" "}
          {dealDiscount.toLocaleString()}
        </p>

        {/* Deal expiry */}
        <div className="mt-4 flex items-center gap-1.5 text-xs text-neutral-500">
          <Clock3 className="h-3.5 w-3.5" />
          <span>
            Ends{" "}
            {new Date(endsAt).toLocaleDateString()}
          </span>
        </div>

        {/* Cart */}
        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}