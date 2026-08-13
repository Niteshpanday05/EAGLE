"use client";

import Link from "next/link";
import { ChevronDown, Loader2 } from "lucide-react";
import { useState } from "react";

import type { NavbarCategory } from "./navbar.types";

interface NavbarCategoriesProps {
  categories: NavbarCategory[];
  loading?: boolean;
}

export default function NavbarCategories({
  categories,
  loading = false,
}: NavbarCategoriesProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        className="
          flex
          items-center
          gap-1.5
          rounded-full
          px-3
          py-2
          text-sm
          font-medium
          text-slate-600
          transition
          hover:bg-slate-50
          hover:text-slate-950
        "
      >
        Categories

        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 pt-3">
          <div
            className="
              w-64
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-2
              shadow-xl
              shadow-slate-900/10
            "
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2 px-3 py-6 text-sm text-slate-400">
                <Loader2 className="h-4 w-4 animate-spin" />

                Loading categories...
              </div>
            ) : categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-2.5
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:bg-slate-50
                    hover:text-slate-950
                  "
                >
                  <span>{category.name}</span>

                  {category.children &&
                    category.children.length > 0 && (
                      <ChevronDown className="h-3.5 w-3.5 -rotate-90 text-slate-400" />
                    )}
                </Link>
              ))
            ) : (
              <div className="px-3 py-4 text-center text-sm text-slate-400">
                No categories available
              </div>
            )}

            <div className="mt-1 border-t border-slate-100 pt-1">
              <Link
                href="/categories"
                className="
                  block
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-semibold
                  text-blue-600
                  transition
                  hover:bg-blue-50
                "
              >
                View all categories
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}