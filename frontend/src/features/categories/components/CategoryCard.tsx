import Image from "next/image";
import Link from "next/link";

import { Category } from "../types";

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="
        group
        relative
        block
        h-72
        overflow-hidden
        rounded-2xl
        bg-slate-900
        shadow-sm
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Full Image */}
      <div className="absolute inset-0">
        <img
          src={category.image || "/images/category-placeholder.jpg"}
          alt={category.name}
          
          
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            (max-width: 1280px) 33vw,
            25vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.04]
          "
        />
      </div>

      {/* Dark bottom gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "
      />

      {/* Product Count */}
      <div
        className="
          absolute
          right-4
          top-4
          rounded-full
          bg-white/90
          px-3
          py-1
          text-[11px]
          font-medium
          text-slate-700
          shadow-sm
        "
      >
        {category.product_count} Products
      </div>

      {/* Content directly on image */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          p-5
          text-white
        "
      >
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              {category.name}
            </h3>

            <p className="mt-1 text-sm text-white/70">
              Explore collection
            </p>

            {/* Hover line */}
            <div
              className="
                mt-3
                h-px
                w-8
                bg-white/70
                transition-all
                duration-500
                group-hover:w-14
              "
            />
          </div>

          {/* Arrow */}
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-white/10
              text-white
              transition-all
              duration-500
              group-hover:border-white
              group-hover:bg-white
              group-hover:text-slate-900
            "
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="M4 10h11M10 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}