"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { Product } from "../types/product.types";
import { formatPrice } from "../utils/product.utils";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.thumbnail.startsWith("http")
    ? product.thumbnail
    : `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.thumbnail}`;

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-lg
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-slate-50">
        <Link
          href={`/products/${product.slug}`}
          className="block h-full w-full"
        >
          <img
            src={imageUrl}
            alt={product.name}
            
            sizes="
              (max-width: 640px) 50vw,
              (max-width: 768px) 33vw,
              (max-width: 1024px) 25vw,
              25vw
            "
            className="
              object-contain
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.04]
            "
          />
        </Link>

        {/* Discount */}
        {product.discount_percentage > 0 && (
          <span
            className="
              absolute
              left-3
              top-3
              rounded-full
              bg-red-500
              px-2.5
              py-1
              text-[10px]
              font-semibold
              leading-none
              text-white
            "
          >
            -{product.discount_percentage}%
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="
            absolute
            right-3
            top-3
            z-10
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/95
            text-slate-600
            shadow-sm
            backdrop-blur-sm
            transition-all
            duration-300
            hover:scale-105
            hover:text-red-500
            hover:shadow-md
          "
        >
          <Heart
            size={18}
            strokeWidth={1.8}
          />
        </button>

        {/* Out of Stock */}
        {!product.is_in_stock && (
          <span
            className="
              absolute
              bottom-3
              left-3
              rounded-full
              bg-slate-900/85
              px-2.5
              py-1
              text-[10px]
              font-medium
              leading-none
              text-white
              backdrop-blur-sm
            "
          >
            Out of Stock
          </span>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col px-3.5 py-3">
        {/* Brand */}
        {product.brand && (
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-slate-400
            "
          >
            {product.brand}
          </p>
        )}

        {/* Product Name */}
        <Link href={`/products/${product.slug}`}>
          <h3
            className="
              mt-1
              line-clamp-2
              min-h-[36px]
              text-[14px]
              font-semibold
              leading-[18px]
              tracking-tight
              text-slate-900
              transition-colors
              duration-200
              group-hover:text-blue-600
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-base font-bold leading-none text-slate-900">
            {formatPrice(product.final_price)}
          </span>

          {product.discount_price && (
            <span className="text-[11px] leading-none text-slate-400 line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-amber-500">
              ★
            </span>

            <span className="text-[11px] font-medium text-slate-700">
              {product.rating}
            </span>
          </div>

          <span className="text-[10px] text-slate-400">
            {product.total_reviews} Reviews
          </span>
        </div>

        {/* Add To Cart */}
        <div className="mt-2.5">
          <AddToCartButton
            productId={product.id}
            disabled={!product.is_in_stock}
          />
        </div>
      </div>
    </article>
  );
}