"use client";

import { Filter, RotateCcw } from "lucide-react";

import { useCategories } from "@/features/categories/hooks/useCategories";
import { useProductFilters } from "../hooks/useProductFilters";

export default function ProductFilters() {
  const { data } = useCategories();

  const {
    filters,
    setCategory,
    setBrand,
    setMinPrice,
    setMaxPrice,
    clearFilters,
  } = useProductFilters();

  return (
    <aside className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
            <Filter
              size={18}
              className="text-gray-700"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Filters
            </h2>

            <p className="text-xs text-gray-500">
              Narrow your search
            </p>
          </div>
        </div>

        <button
          onClick={clearFilters}
          className="text-sm font-medium text-gray-500 transition hover:text-black"
        >
          Reset
        </button>

      </div>

      <div className="space-y-6">

        {/* Category */}

        <div>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category
          </label>

          <select
            value={filters.category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-black focus:bg-white"
          >
            <option value="">
              All Categories
            </option>

            {data?.map((category) => (
              <option
                key={category.id}
                value={category.slug}
              >
                {category.name}
              </option>
            ))}
          </select>

        </div>

        {/* Brand */}

        <div>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Brand
          </label>

          <input
            type="text"
            placeholder="Search brand..."
            value={filters.brand}
            onChange={(e) =>
              setBrand(e.target.value)
            }
            className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-black focus:bg-white"
          />

        </div>

        {/* Price */}

        <div>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Price Range
          </label>

          <div className="grid grid-cols-2 gap-3">

            <input
              type="number"
              placeholder="Min"
              value={filters.min_price ?? ""}
              onChange={(e) =>
                setMinPrice(
                  e.target.value
                    ? Number(e.target.value)
                    : undefined
                )
              }
              className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-black focus:bg-white"
            />

            <input
              type="number"
              placeholder="Max"
              value={filters.max_price ?? ""}
              onChange={(e) =>
                setMaxPrice(
                  e.target.value
                    ? Number(e.target.value)
                    : undefined
                )
              }
              className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-black focus:bg-white"
            />

          </div>

        </div>

      </div>

      {/* Footer */}

      <button
        onClick={clearFilters}
        className="mt-8 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gray-900 text-sm font-medium text-white transition hover:bg-black"
      >
        <RotateCcw size={16} />

        Clear Filters
      </button>

    </aside>
  );
}