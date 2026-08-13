"use client";

import { useCategories } from "@/features/categories/hooks/useCategories";

import Navbar from "./Navbar";

export default function NavbarContainer() {
  const {
    categories,
    loading: categoriesLoading,
  } = useCategories();

  return (
    <Navbar
      categories={categories}
      categoriesLoading={categoriesLoading}
    />
  );
}