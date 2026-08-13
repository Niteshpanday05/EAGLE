"use client"
import { useEffect, useState } from "react";

import { categoryService } from "../services";
import { Category } from "../types";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await categoryService.getCategories();
        setCategories(response.results);
      } catch {
        setError("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  return {
    categories,

    loading,
    error,
  };
}