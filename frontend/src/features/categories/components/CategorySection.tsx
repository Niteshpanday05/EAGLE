"use client";

import { useCategories } from "../hooks/useCategories";

import CategoryGrid from "./CategoryGrid";
import CategoryEmpty from "./CategoryEmpty";
import CategorySkeleton from "./CategorySkeleton";
import SectionHeader from "@/components/common/SectionHeader";

export default function CategorySection() {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return <CategorySkeleton />;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!categories.length) {
    return <CategoryEmpty />;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 ">
        <SectionHeader
          title="Shop by Category"
          // subtitle="Discover products across our most popular categories. you fall in love with this."
          center
        />

        {/* line section */}
        <div className="mx-auto mt-4 flex w-3/4 max-w-3xl items-center">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-slate-900" />

          <span className="mx-3 h-1.5 w-1.5 rounded-full bg-slate-800" />

          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-700 to-slate-900" />
        </div>

        <CategoryGrid categories={categories} />
      </div>
    </section>
  );
}
