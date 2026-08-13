"use client";

import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import PromoBanner from "./components/PromoBanner";

import { useCategories } from "@/features/categories/hooks/useCategories";
import { useProducts } from "@/features/products/hooks/useProducts";
import WhyChooseUs from "./components/WhyChooseUs";

export default function HomePage() {
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  const {
    data: productsResponse,
    isLoading: productsLoading,
    isError: productsIsError,
    error: productsError,
  } = useProducts();

  return (
    <main>
      <Hero />

      <CategorySection
        categories={categories}
        isLoading={categoriesLoading}
      />

      <FeaturedProducts
        products={productsResponse?.results ?? []}
        loading={productsLoading}
        error={
          productsIsError
            ? productsError?.message ?? "Failed to load products."
            : null
        }
      />

      <PromoBanner /> 
      {/* <WhyChooseUs /> */}
      
    </main>
  );
}