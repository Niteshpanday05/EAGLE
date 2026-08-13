"use client";

import { useEffect, useState } from "react";

import HeroService from "../services/hero.service";
import { Hero } from "../types/hero.types";

export function useHero() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const data = await HeroService.getHeroes();
        setHeroes(data);
      } finally {
        setLoading(false);
      }
    }

    fetchHeroes();
  }, []);

  return {
    heroes,
    loading,
  };
}