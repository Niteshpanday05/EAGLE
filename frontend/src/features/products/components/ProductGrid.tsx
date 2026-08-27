"use client";

import ProductCard from "./ProductCard";
import { Product } from "../types/product.types";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products?.length) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-sm text-slate-400">No products found.</p>
      </div>
    );
  }

  return (
    <div
      className="
      p-8
        grid
        grid-cols-2
        gap-x-4
        gap-y-10
        sm:grid-cols-3
        sm:gap-x-5
        sm:gap-y-12
        lg:grid-cols-4
        lg:gap-x-6
        lg:gap-y-14
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}