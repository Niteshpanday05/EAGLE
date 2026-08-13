"use client";

import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { Product } from "@/features/home/components/FeaturedProducts/featured.types";
import FeaturedProducts from "./components/FeaturedProducts";
// import ProductSection from "./components/ProductSection";
// import CollectionSection from "./components/CollectionSection";
// import PromoBanner from "./components/PromoBanner";
// import BrandSection from "./components/BrandSection";
// import WhyChooseUs from "./components/WhyChooseUs";
// import TestimonialSection from "./components/TestimonialSection";
// import Newsletter from "./components/Newsletter";

import { useProducts } from "@/features/products/hooks/useProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import PromoBanner from "./components/PromoBanner";

export default function HomePage() {
  const {
    data: productsResponse,
    isLoading: productLoading,
    error: productError,
  } = useProducts();
  const products = productsResponse?.results ?? [];

  const { categories, loading, error } = useCategories();

  return (
    <main>
      <Hero />

      <CategorySection
        categories={categories}
        loading={loading}
        error={error}
      />
      <PromoBanner />
      <FeaturedProducts
        products={products}
        loading={productLoading}
        error={productError?.message}
      />

      <WhyChooseUs />
      

      {/* 
      <ProductSection />

      <CollectionSection />

      <PromoBanner />

      <BrandSection />

      <WhyChooseUs />

      <TestimonialSection />

      <Newsletter />
      */}
    </main>
  );
}
