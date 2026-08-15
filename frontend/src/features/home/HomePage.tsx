"use client";

import Hero from "./components/Hero";
import CategorySection from "../categories/components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import PromoBanner from "./components/PromoBanner";

import { useProducts } from "@/features/products/hooks/useProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import { AboutWhyChooseUs } from "../about";
import BrandSection from "./components/BrandSection/BrandSection";

export default function HomePage() {
  const {
    data: productsResponse,
    isLoading: productsLoading,
    isError: productsIsError,
    error: productsError,
  } = useProducts();

  return (
    <main>
      <Hero />

      <CategorySection />

      <FeaturedProducts
        products={productsResponse?.results ?? []}
        loading={productsLoading}
        error={
          productsIsError
            ? (productsError?.message ?? "Failed to load products.")
            : null
        }
        limit={8}
      />
      <BrandSection/>
      <PromoBanner />
      {/* <WhyChooseUs /> */}
      <AboutWhyChooseUs />
    </main>
  );
}
