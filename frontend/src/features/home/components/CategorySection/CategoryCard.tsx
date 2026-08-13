import Link from "next/link";
import Image from "next/image";

import { CategoryCardProps } from "./category.types";

interface Props extends CategoryCardProps {
  className?: string;
}

export default function CategoryCard({
  category,
  className = "",
}: Props) {
  return (
    <Link
      href={`/categories/${category.slug}`}
       className={`
    h-full
    group
    relative
    block
    overflow-hidden
    rounded-[28px]
    ${className}
  `}
    >
      <div className="relative h-full min-h-[320px]">
       <img
  src={category.image ?? "/images/category-placeholder.webp"}
  alt={category.name}
  className="
    h-full
    w-full
    object-cover
    transition-transform
    duration-700
    group-hover:scale-105
  "
/>

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/75
            via-black/20
            to-transparent
          "
        />

        <div className="absolute bottom-0 left-0 w-full p-8">
          <h3 className="text-2xl font-semibold text-white">
            {category.name}
          </h3>

          <p className="mt-2 text-sm text-white/80">
            {category.product_count} Products
          </p>
        </div>
      </div>
    </Link>
  );
}