"use client";

import Link from "next/link";

import { Product } from "../types/product.types";
import { formatPrice } from "../utils/product.utils";
import AddToCartButton from "./AddToCartButton";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.thumbnail.startsWith("http")
    ? product.thumbnail
    : `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.thumbnail}`;
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {product.discount_percentage > 0 && (
            <span className="absolute left-4 top-4 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white shadow-md">
              -{product.discount_percentage}%
            </span>
          )}

          {!product.is_in_stock && (
            <span className="absolute right-4 top-4 rounded-full bg-black/80 px-2 py-1 text-xs font-medium text-white backdrop-blur">
              Out of Stock
            </span>
          )}
        </div>
      </Link>

      <div className="space-y-1 p-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            {product.brand}
          </p>

          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-end gap-3">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(product.final_price)}
          </span>

          {product.discount_price && (
            <span className="pb-1 text-sm text-gray-400 line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-sm">
          <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1">
            <span>⭐</span>
            <span className="font-medium">{product.rating}</span>
          </div>

          <span className="text-gray-500">{product.total_reviews} Reviews</span>
        </div>

        <AddToCartButton
          productId={product.id}
          disabled={!product.is_in_stock}
        />
      </div>
    </div>
  );
}
