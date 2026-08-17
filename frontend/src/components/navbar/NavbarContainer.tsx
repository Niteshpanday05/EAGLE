"use client";

import { useCategories } from "@/features/categories/hooks/useCategories";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

import Navbar from "./Navbar";

export default function NavbarContainer() {
  const {
    categories,
    loading: categoriesLoading,
  } = useCategories();

  const { data: user } = useCurrentUser();

  return (
    <Navbar
      categories={categories}
      categoriesLoading={categoriesLoading}
      user={user ?? null}
      isAuthenticated={!!user}
    />
  );
}