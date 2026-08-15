"use client";

import { BrandSlide } from "./brand.types";
import { BRAND_SLIDE_DURATION } from "./BrandSection";

interface BrandIndicatorsProps {
  slides: BrandSlide[];
  currentIndex: number;
  isPlaying: boolean;
  onSelect: (index: number) => void;
}

export default function BrandIndicators({
  slides,
  currentIndex,
  isPlaying,
  onSelect,
}: BrandIndicatorsProps) {
  return (
    <div
      className="flex items-center gap-3"
      role="tablist"
      aria-label="Hero slides"
    >
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => onSelect(index)}
            className="group relative h-8 w-14 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            {/* Track */}
            <span
              className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 transition-colors duration-300 ${
                isActive
                  ? "bg-white/30"
                  : "bg-white/20 group-hover:bg-white/40"
              }`}
            />

            {/* Active Progress */}
            {isActive && (
              <span
                className={`absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-white ${
                  isPlaying ? "animate-[brandProgress_7s_linear]" : "w-0"
                }`}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}