import SectionHeader from "@/components/common/SectionHeader";

import ProductGrid from "./ProductGrid";
import ProductSkeleton from "./ProductSkeleton";
import ProductEmpty from "./ProductEmpty";

import { FEATURED_PRODUCTS } from "./featured.constants";
import type { FeaturedProductsProps } from "./featured.types";

export default function FeaturedProducts({
  products = [],
  loading = false,
  error = null,
  limit,
}: FeaturedProductsProps) {
  const displayedProducts = limit
    ? products.slice(0, limit)
    : products;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-20 lg:py-28">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-28 top-1/3 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 lg:mb-16">
          <SectionHeader
            title={FEATURED_PRODUCTS.title}
            subtitle={FEATURED_PRODUCTS.subtitle}
            center
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="animate-fade-in">
            <ProductSkeleton />
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-3xl border border-red-100 bg-red-50/50 p-6">
            <ProductEmpty
              title="Unable to load products"
              description={error}
            />
          </div>
        )}

        {/* Empty */}
        {!loading && !error && displayedProducts.length === 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <ProductEmpty
              title="No Products Found"
              description="Please check back later."
            />
          </div>
        )}

        {/* Products */}
        {!loading && !error && displayedProducts.length > 0 && (
          <ProductGrid products={displayedProducts} />
        )}
      </div>
    </section>
  );
}