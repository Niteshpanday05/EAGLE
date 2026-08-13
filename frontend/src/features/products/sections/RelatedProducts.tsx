"use client";

import ProductGrid from "../components/ProductGrid";
import ProductSkeleton from "../components/ProductSkeleton";
import ProductEmpty from "../components/ProductEmpty";

import { useRelatedProducts } from "../hooks/useProduct";

interface RelatedProductsProps {
  slug: string;
}

export default function RelatedProducts({
  slug,
}: RelatedProductsProps) {
  const {
    data,
    isLoading,
    isError,
  } = useRelatedProducts(slug);

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <ProductEmpty message="Unable to load related products." />
    );
  }

  if (!data || data.length === 0) {
    return (
      <ProductEmpty message="No related products found." />
    );
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Related Products
      </h2>

      <ProductGrid products={data} />
    </section>
  );
}