"use client"

import { useCategories } from "../hooks/useCategories";

import CategoryGrid from "./CategoryGrid";
import CategoryEmpty from "./CategoryEmpty";
import CategorySkeleton from "./CategorySkeleton";
import SectionHeader from "@/components/common/SectionHeader";

export default function CategorySection() {
  const {
    categories,
    loading,
    error,
  } = useCategories();

  if (loading) {
    return <CategorySkeleton />;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        {error}
      </p>
    );
  }

  if (!categories.length) {
    return <CategoryEmpty />;
  }

  return (
    <section className="py-16">
  <div className="container mx-auto px-4">

    <SectionHeader
      title="Shop by Category"
      subtitle="Discover products across our most popular categories."
    />

    <CategoryGrid
      categories={categories}
    />

  </div>
</section>
  );
}