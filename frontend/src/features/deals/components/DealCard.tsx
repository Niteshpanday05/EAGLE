"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
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

  const finalPrice = Math.max(basePrice - dealDiscount, 0);

  const formattedExpiry = new Date(endsAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-neutral-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-neutral-100">
        {/* Discount Badge */}
        <div className="absolute left-4 top-4 z-20">
          <span className="inline-flex items-center rounded-full bg-black px-3.5 py-2 text-[11px] font-bold tracking-wide text-white shadow-lg">
            {discountLabel}
          </span>
        </div>

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-neutral-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
        >
          <Heart className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-105" />
        </button>

        {/* Product Link */}
        <Link href={`/menu/${product.id}`} className="block">
          <div className="relative aspect-[1/1.02] overflow-hidden">
            {product.thumbnail ? (
              <Image
                src={product.thumbnail}
                alt={product.name}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                No image
              </div>
            )}

            {/* Bottom Image Gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Product Name */}
        <div className="flex items-start justify-between gap-3">
          <Link
            href={`/menu/${product.id}`}
            className="line-clamp-2 text-[15px] font-semibold leading-6 tracking-[-0.01em] text-neutral-900 transition-colors duration-200 hover:text-neutral-600"
          >
            {product.name}
          </Link>

          <Link
            href={`/menu/${product.id}`}
            aria-label={`View ${product.name}`}
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 hover:border-neutral-300 hover:bg-neutral-50 hover:text-black"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Pricing */}
        <div className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <span className="text-[21px] font-bold tracking-[-0.02em] text-neutral-950">
            Rs. {finalPrice.toLocaleString()}
          </span>

          <span className="text-sm font-medium text-neutral-400 line-through">
            Rs. {basePrice.toLocaleString()}
          </span>
        </div>

        {/* Savings */}
        <div className="mt-1.5">
          <span className="text-xs font-semibold text-neutral-500">
            You save Rs. {dealDiscount.toLocaleString()}
          </span>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-neutral-100" />

        {/* Expiry */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-neutral-500">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100">
              <Clock3 className="h-3.5 w-3.5" />
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Offer ends
              </span>

              <span className="text-xs font-semibold text-neutral-700">
                {formattedExpiry}
              </span>
            </div>
          </div>

          {/* Deal Status */}
          <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-600">
            Limited
          </span>
        </div>

        {/* Cart Button */}
        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-[14px] bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg active:translate-y-0"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </article>
  );
}