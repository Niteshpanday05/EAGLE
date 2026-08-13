"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useProductFilters } from "../hooks/useProductFilters";

interface ProductPaginationProps {
  count: number;
}

export default function ProductPagination({
  count,
}: ProductPaginationProps) {
  const { filters, setCurrentPage } =
    useProductFilters();

  const totalPages = Math.ceil(
    count / filters.page_size
  );

  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">

      <button
        disabled={filters.page === 1}
        onClick={() =>
          setCurrentPage(filters.page - 1)
        }
        className="rounded border p-2 disabled:opacity-40"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from(
        { length: totalPages },
        (_, i) => i + 1
      ).map((page) => (
        <button
          key={page}
          onClick={() =>
            setCurrentPage(page)
          }
          className={`h-10 w-10 rounded ${
            filters.page === page
              ? "bg-blue-600 text-white"
              : "border"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={filters.page === totalPages}
        onClick={() =>
          setCurrentPage(filters.page + 1)
        }
        className="rounded border p-2 disabled:opacity-40"
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
}