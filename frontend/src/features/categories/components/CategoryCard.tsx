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
        h-48
        overflow-hidden
        rounded-xl
        bg-slate-900
        shadow-sm
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={category.image || "/images/category-placeholder.jpg"}
          alt={category.name}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-105
          "
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/25
          to-transparent
        "
      />

      {/* Product Count */}
      {/* <div
        className="
          absolute
          right-2.5
          top-2.5
          rounded-full
          bg-white/90
          px-2
          py-1
          text-[9px]
          font-medium
          text-slate-700
          shadow-sm
          backdrop-blur-sm
        "
      >
        {category.product_count} Products
      </div> */}

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="flex items-end justify-between gap-2">
          {/* Category Info */}
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-base
                font-semibold
                leading-tight
                tracking-tight
                text-white
              "
            >
              {category.name}
            </h3>

            {/* <p className="mt-1 text-[10px] text-white/65">
              Explore collection
            </p> */}

            {/* Animated Line */}
            <div
              className="
                mt-2
                h-px
                w-6
                bg-white/70
                transition-all
                duration-500
                group-hover:w-10
              "
            />
          </div>

          {/* Arrow */}
          <div
            className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-white/10
              text-white
              backdrop-blur-sm
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
              className="h-3.5 w-3.5"
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