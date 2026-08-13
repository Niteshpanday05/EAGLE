"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "../types/product.types";
import { formatPrice } from "../utils/product.utils";
import AddToCartButton from "../components/AddToCartButton";
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white transition hover:shadow-lg">

      <Link href={`/products/${product.slug}`}>

        <div className="relative aspect-square overflow-hidden bg-gray-100">

          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />

          {product.discount_percentage > 0 && (
            <span className="absolute left-3 top-3 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
              -{product.discount_percentage}%
            </span>
          )}

          {!product.is_in_stock && (
            <span className="absolute right-3 top-3 rounded bg-black px-2 py-1 text-xs text-white">
              Out of Stock
            </span>
          )}

        </div>

      </Link>

      <div className="space-y-3 p-4">

        <div>

          <p className="text-xs uppercase text-gray-500">
            {product.brand}
          </p>

          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-1 line-clamp-2 font-semibold hover:text-blue-600">
              {product.name}
            </h3>
          </Link>

        </div>

        <div className="flex items-center gap-2">

          <span className="text-xl font-bold text-blue-600">
            {formatPrice(product.final_price)}
          </span>

          {product.discount_price && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.price)}
            </span>
          )}

        </div>

        <div className="flex items-center justify-between text-sm">

          <span>
            ⭐ {product.rating}
          </span>

          <span className="text-gray-500">
            {product.total_reviews} Reviews
          </span>

        </div>

        <AddToCartButton
          productId={product.id}
          disabled={!product.is_in_stock}
        />

      </div>

    </div>
  );
}