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
    <article className="group min-w-0">
      {/* IMAGE */}
     <div className="relative h-[340px] w-full overflow-hidden bg-[#f6f6f6]">
  <Link
    href={`/products/${product.slug}`}
    className="block h-full w-full"
  >
    <img
      src={imageUrl}
      alt={product.name}
      className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-[1.03]
      "
    />
  </Link>


        {/* DISCOUNT */}
        {product.discount_percentage > 0 && (
          <span
            className="
              absolute
              left-3
              top-3
              text-[10px]
              font-medium
              text-slate-900
              sm:left-4
              sm:top-4
              sm:text-[11px]
            "
          >
            -{product.discount_percentage}%
          </span>
        )}

        {/* WISHLIST */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="
            absolute
            right-3
            top-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-white
            text-slate-900
            opacity-0
            shadow-sm
            transition-all
            duration-300
            hover:bg-slate-100
            group-hover:opacity-100
            sm:right-4
            sm:top-4
            sm:h-9
            sm:w-9
          "
        >
          <Heart
            size={16}
            strokeWidth={1.7}
          />
        </button>

        {/* OUT OF STOCK */}
        {!product.is_in_stock && (
          <span
            className="
              absolute
              bottom-3
              left-3
              bg-white
              px-2.5
              py-1.5
              text-[9px]
              font-medium
              uppercase
              tracking-wide
              text-slate-900
              sm:bottom-4
              sm:left-4
              sm:px-3
            "
          >
            Out of Stock
          </span>
        )}
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="pt-3 sm:pt-4">
        {/* BRAND */}
        {product.brand && (
          <p
            className="
              text-[10px]
              font-medium
              text-slate-500
              sm:text-[11px]
            "
          >
            {product.brand}
          </p>
        )}

        {/* PRODUCT NAME */}
        <Link href={`/products/${product.slug}`}>
          <h3
            className="
              mt-1
              line-clamp-2
              min-h-[38px]
              text-[13px]
              font-medium
              leading-[18px]
              tracking-tight
              text-slate-950
              sm:text-[15px]
              sm:leading-5
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* RATING */}
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-[10px] text-slate-900 sm:text-[11px]">
            ★ {product.rating}
          </span>

          <span className="text-[10px] text-slate-400 sm:text-[11px]">
            ({product.total_reviews})
          </span>
        </div>

        {/* PRICE */}
        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          <span
            className="
              text-[14px]
              font-semibold
              tracking-tight
              text-slate-950
              sm:text-[16px]
            "
          >
            {formatPrice(product.final_price)}
          </span>

          {product.discount_price && (
            <span
              className="
                text-[10px]
                text-slate-400
                line-through
                sm:text-[12px]
              "
            >
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* CART */}
        <div
          className="
            mt-3
            opacity-100
            transition-opacity
            duration-300
            sm:opacity-0
            sm:group-hover:opacity-100
          "
        >
          <AddToCartButton
            productId={product.id}
            disabled={!product.is_in_stock}
          />
        </div>
      </div>
    </article>
  );
}