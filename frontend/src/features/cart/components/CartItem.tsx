"use client";

import Image from "next/image";

import { CartItem as CartItemType } from "../types/cart.types";
import QuantitySelector from "./QuantitySelector";
import RemoveCartButton from "./RemoveCartButton";

interface CartItemProps {
  item: CartItemType;
  updating?: boolean;
  removing?: boolean;
  onIncrease: (item: CartItemType) => void;
  onDecrease: (item: CartItemType) => void;
  onRemove: (item: CartItemType) => void;
}

export default function CartItem({
  item,
  updating = false,
  removing = false,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  const { product, quantity, unit_price, subtotal } = item;

  const imageUrl = product.thumbnail
    ? product.thumbnail.startsWith("http")
      ? product.thumbnail
      : `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.thumbnail}`
    : "/images/placeholder.png";

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-gray-200 hover:shadow-md">

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_170px_130px_50px] lg:items-center lg:gap-6">

        {/* Product */}
        <div className="flex items-center gap-5">

          <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div>

            <h3 className="text-lg font-semibold text-gray-900">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Rs. {unit_price.toFixed(2)}
            </p>

            <span
              className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                product.is_in_stock
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {product.is_in_stock ? "In Stock" : "Out of Stock"}
            </span>

          </div>

        </div>

        {/* Quantity */}
        <div className="flex justify-center">
          <QuantitySelector
            quantity={quantity}
            loading={updating}
            onIncrease={() => onIncrease(item)}
            onDecrease={() => onDecrease(item)}
          />
        </div>

        {/* Price */}
        <div className="text-right">

          <p className="text-xl font-bold text-gray-900">
            Rs. {subtotal.toFixed(2)}
          </p>

        </div>

        {/* Remove */}
        <div className="flex justify-end">
          <RemoveCartButton
            loading={removing}
            onRemove={() => onRemove(item)}
          />
        </div>

      </div>

      {/* Mobile */}
      <div className="space-y-5 lg:hidden">

        <div className="flex gap-4">

          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col">

            <h3 className="text-base font-semibold text-gray-900">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Rs. {unit_price.toFixed(2)}
            </p>

            <span
              className={`mt-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${
                product.is_in_stock
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {product.is_in_stock ? "In Stock" : "Out of Stock"}
            </span>

          </div>

        </div>

        <div className="flex items-center justify-between">

          <QuantitySelector
            quantity={quantity}
            loading={updating}
            onIncrease={() => onIncrease(item)}
            onDecrease={() => onDecrease(item)}
          />

          <span className="text-xl font-bold">
            Rs. {subtotal.toFixed(2)}
          </span>

          <RemoveCartButton
            loading={removing}
            onRemove={() => onRemove(item)}
          />

        </div>

      </div>

    </div>
  );
}