import Image from "next/image";
import Link from "next/link";

import { Category } from "../types";

interface Props {
  category: Category;
}

export default function CategoryCard({
  category,
}: Props) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="
        rounded-xl
        border
        bg-white
        overflow-hidden
        hover:shadow-lg
        transition
      "
    >
      <div className="relative h-48">

        <img
  src={category.image || "/images/category-placeholder.jpg"}
  alt={category.name}
  className="h-full w-full object-cover"
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