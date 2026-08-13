"use client";

import { ArrowUpDown } from "lucide-react";

import { ProductOrdering } from "../types/filter.types";
import { useProductFilters } from "../hooks/useProductFilters";

interface ProductToolbarProps {
  total: number;
}

export default function ProductToolbar({
  total,
}: ProductToolbarProps) {
  const { filters, setOrdering } = useProductFilters();

  return (
    <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

      {/* Product Count */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Products
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {total}
          </span>{" "}
          products
        </p>
      </div>

      {/* Sort */}
      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
          <ArrowUpDown
            size={18}
            className="text-gray-600"
          />
        </div>

        <select
          value={filters.ordering}
          onChange={(e) =>
            setOrdering(
              e.target.value as ProductOrdering
            )
          }
          className="h-10 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none transition focus:border-black focus:bg-white"
        >
          <option value="-created_at">
            Newest
          </option>

          <option value="created_at">
            Oldest
          </option>

          <option value="price">
            Price: Low → High
          </option>

          <option value="-price">
            Price: High → Low
          </option>

          <option value="-rating">
            Highest Rated
          </option>

          <option value="rating">
            Lowest Rated
          </option>
        </select>

      </div>

    </div>
  );
}