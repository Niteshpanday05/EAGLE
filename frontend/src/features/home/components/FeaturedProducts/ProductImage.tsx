import Image from "next/image";
import { Eye, Heart } from "lucide-react";

import { Product } from "./featured.types";

interface Props {
  product: Product;
}

export default function ProductImage({
  product,
}: Props) {
  const hasDiscount =
    !!product.discount_price &&
    product.discount_price < product.price;

  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discount_price!) /
          product.price) *
          100
      )
    : 0;

  return (
    <div
      className="
        group/image
        relative
        w-full
        aspect-square
        overflow-hidden

        bg-gradient-to-br
        from-slate-50
        via-white
        to-slate-100
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-64
            w-64
            rounded-full
            bg-sky-200/25
            blur-3xl

            transition-transform
            duration-700

            group-hover/image:scale-125
          "
        />
      </div>

      {/* Product Image */}

      <Image
        src={
          product.thumbnail ||
          "/images/product-placeholder.webp"
        }
        alt={product.name}
        fill
        unoptimized={
          process.env.NODE_ENV === "development"
        }
        sizes="
          (max-width:640px) 100vw,
          (max-width:1024px) 50vw,
          (max-width:1280px) 33vw,
          25vw
        "
        className="
          relative
          z-10

          object-cover
          object-center

          

          transition-transform
          duration-700
          ease-out

          group-hover/image:scale-110
        "
      />

      {/* Hover Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-black/5

          opacity-0
          transition-opacity
          duration-300

          group-hover/image:opacity-100
        "
      />

      {/* Discount Badge */}

      {hasDiscount && (
        <span
          className="
            absolute
            left-4
            top-4
            z-20

            rounded-full
            bg-red-500

            px-3
            py-1.5

            text-xs
            font-bold
            text-white

            shadow-lg
          "
        >
          {discountPercentage}% OFF
        </span>
      )}

      {/* Sold Out */}

      {!hasDiscount && product.stock === 0 && (
        <span
          className="
            absolute
            left-4
            top-4
            z-20

            rounded-full
            bg-slate-900

            px-3
            py-1.5

            text-xs
            font-semibold
            text-white
          "
        >
          Sold Out
        </span>
      )}

      {/* Wishlist */}

      <button
        type="button"
        aria-label="Add to wishlist"
        className="
          absolute
          right-4
          top-4
          z-20

          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          bg-white/90
          backdrop-blur

          shadow-lg

          transition-all
          duration-300

          hover:scale-110
          hover:bg-red-500
          hover:text-white
        "
      >
        <Heart className="h-5 w-5" />
      </button>

      {/* Quick View */}

      <button
        type="button"
        aria-label="Quick view"
        className="
          absolute
          bottom-5
          left-1/2
          z-20

          hidden
          -translate-x-1/2
          translate-y-4

          items-center
          gap-2

          rounded-full

          bg-slate-900

          px-5
          py-3

          text-sm
          font-semibold
          text-white

          opacity-0

          transition-all
          duration-300

          group-hover/image:translate-y-0
          group-hover/image:opacity-100

          hover:bg-primary

          lg:flex
        "
      >
        <Eye className="h-4 w-4" />
        Quick View
      </button>
    </div>
  );
}