"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
// import BackgroundPattern from "./BackgroundPattern";
import { useHero } from "../hooks/useHero";

export default function Hero() {
  const { heroes, loading } = useHero();

  if (loading) {
    return (
      <section className="py-32 text-center">
        Loading...
      </section>
    );
  }

  const hero = heroes[0];

  if (!hero) {
    return (
      <section className="py-20 text-center">
        No hero data found
      </section>
    );
  }

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">

      {/* Image */}
      <HeroImage hero={hero} />

      {/* Soft gradient for readability */}
      <div className="absolute inset-0 " />

      {/* <BackgroundPattern /> */}

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 lg:px-8">

        <div className="max-w-3xl">

          <HeroContent hero={hero} />

        </div>

      </div>

    </section>
  );
}