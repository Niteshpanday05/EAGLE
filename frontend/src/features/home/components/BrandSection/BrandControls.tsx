"use client";

import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

interface BrandControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function BrandControls({
  isPlaying,
  onTogglePlay,
  onPrevious,
  onNext,
}: BrandControlsProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Play / Pause */}
      <button
        type="button"
        onClick={onTogglePlay}
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        aria-pressed={isPlaying}
        className="group mr-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
      >
        {isPlaying ? (
          <Pause
            size={16}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <Play
            size={16}
            strokeWidth={1.8}
            className="ml-0.5 transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </button>

      {/* Previous */}
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous slide"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
      >
        <ChevronLeft
          size={19}
          strokeWidth={1.6}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next slide"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
      >
        <ChevronRight
          size={19}
          strokeWidth={1.6}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </button>
    </div>
  );
}