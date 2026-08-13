"use client";

import Image from "next/image";
import Link from "next/link";

import { Category } from "../types/category.types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group block overflow-hidden rounded-xl border bg-white transition hover:shadow-lg"
    >
      <div className="relative aspect-square">

        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition group-hover:scale-105"
        />

      </div>

      <div className="p-4">

        <h3 className="font-semibold">
          {category.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {category.product_count} Products
        </p>

      </div>

    </Link>
  );
}