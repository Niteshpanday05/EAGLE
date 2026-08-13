"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "./featured.types";

interface Props {
  product: Product;
}

export default function ProductActions({
  product,
}: Props) {
  const outOfStock = product.stock <= 0;

  const handleAddToCart = () => {
    // TODO:
    // dispatch(addToCart(product.id))
    console.log("Add to cart:", product.id);
  };

  return (
    <button
      type="button"
      disabled={outOfStock}
      onClick={handleAddToCart}
      className="
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-2xl
       bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900
        px-4
        py-3
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-neutral-800
        disabled:cursor-not-allowed
        disabled:bg-neutral-300
      "
    >
      <ShoppingCart size={18} />

      {outOfStock
        ? "Out of Stock"
        : "Add to Cart"}
    </button>
  );
}