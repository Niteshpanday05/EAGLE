"use client";

import { Search } from "lucide-react";
import { ChangeEvent } from "react";

import { useProductFilters } from "../hooks/useProductFilters";

export default function ProductSearch() {
  const { filters, setSearch } = useProductFilters();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
return (
  <div className="flex justify-center px-4 sm:px-6">
    <div className="relative w-full max-w-xl lg:max-w-2xl">

      <Search
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={filters.search}
        onChange={handleChange}
        placeholder="Search products..."
        className="
          h-12
          w-full
          rounded-full
          border
          border-gray-200
          bg-white
          py-3
          pl-12
          pr-4
          text-sm
          text-gray-900
          shadow-sm
          transition-all
          duration-300
          outline-none
          placeholder:text-gray-400
          hover:border-gray-300
          hover:shadow-md
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>
  </div>
);
}