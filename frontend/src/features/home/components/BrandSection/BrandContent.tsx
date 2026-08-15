"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BrandSlide } from "./brand.types";

interface BrandContentProps {
  slide: BrandSlide;
}

export default function BrandContent({
  slide,
}: BrandContentProps) {
  return (
    <div
      key={slide.id}
      className="max-w-2xl text-white"
    >
      {/* Eyebrow */}
      <div
        className="mb-5 flex items-center gap-3"
        style={{
          animation: "brandFadeUp 800ms ease-out both",
        }}
      >
        <span className="h-px w-8 bg-white/70" />

        <span className="text-xs font-medium tracking-[0.3em] text-white/80 sm:text-sm">
          {slide.eyebrow}
        </span>
      </div>

      {/* Title */}
      <h1
        className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
        style={{
          animation: "brandFadeUp 900ms 100ms ease-out both",
        }}
      >
        {slide.title}
      </h1>

      {/* Description */}
      <p
        className="mt-6 max-w-lg text-sm leading-6 text-white/75 sm:text-base"
        style={{
          animation: "brandFadeUp 900ms 250ms ease-out both",
        }}
      >
        {slide.description}
      </p>

      {/* CTA */}
      <div
        className="mt-8"
        style={{
          animation: "brandFadeUp 900ms 400ms ease-out both",
        }}
      >
        <Link
          href={slide.action.href}
          className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          {slide.action.label}

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight
              size={15}
              strokeWidth={2}
            />
          </span>
        </Link>
      </div>
    </div>
  );
}