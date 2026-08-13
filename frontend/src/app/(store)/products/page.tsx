"use client";

import {
  ProductEmpty,
  ProductError,
  ProductFilters,
  ProductGrid,
  ProductPagination,
  ProductSearch,
  ProductSkeleton,
  ProductToolbar,
} from "@/features/products/components";

import { useProductFilters } from "@/features/products/hooks/useProductFilters";
import { useProducts } from "@/features/products/hooks/useProducts";

export default function ProductsPage() {
  const { filters } = useProductFilters();

  const { data, isLoading, isError } = useProducts(filters);

  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto py-10">
        <ProductError message="Unable to load products." />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-center text-3xl font-bold">All Products</h1>

      <ProductSearch />

      <div className="mt-8 grid grid-cols-12 gap-8">
        {/* <aside className="col-span-12 lg:col-span-3">

          <ProductFilters />

        </aside> */}

        <main className="col-span-12 lg:col-span-12 space-y-6">
          <ProductToolbar total={data?.count ?? 0} />

          {data?.results && data.results.length > 0 ? (
            <>
              <ProductGrid products={data.results} />

              <ProductPagination count={data.count} />
            </>
          ) : (
            <ProductEmpty />
          )}
        </main>
      </div>
    </div>
  );
}
