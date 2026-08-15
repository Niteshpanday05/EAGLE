"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { brandSlides } from "./brand-slides";
import BrandContent from "./BrandContent";

const SLIDE_DURATION = 7000;
const SWIPE_THRESHOLD = 50;

export default function BrandSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const currentSlide = brandSlides[currentIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) =>
      current === brandSlides.length - 1 ? 0 : current + 1,
    );
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((current) =>
      current === 0 ? brandSlides.length - 1 : current - 1,
    );
  }, []);

  // Reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const handleChange = () => {
      setReducedMotion(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Browser visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, []);

  // Automatic slides
  useEffect(() => {
    if (
      reducedMotion ||
      !isVisible ||
      brandSlides.length <= 1
    ) {
      return;
    }

    const timer = window.setInterval(
      nextSlide,
      SLIDE_DURATION,
    );

    return () => {
      window.clearInterval(timer);
    };
  }, [
    nextSlide,
    reducedMotion,
    isVisible,
  ]);

  // Video playback
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentIndex) {
        video.currentTime = 0;

        if (!reducedMotion && isVisible) {
          video.play().catch(() => {});
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [
    currentIndex,
    reducedMotion,
    isVisible,
  ]);

  // Pause videos when tab is hidden
  useEffect(() => {
    if (isVisible) return;

    videoRefs.current.forEach((video) => {
      video?.pause();
    });
  }, [isVisible]);

  // Keyboard navigation
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextSlide();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousSlide();
    }
  };

  // Swipe
  const handleTouchStart = (
    event: React.TouchEvent<HTMLElement>,
  ) => {
    touchStartX.current =
      event.touches[0]?.clientX ?? null;

    touchStartY.current =
      event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLElement>,
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const endX =
      event.changedTouches[0]?.clientX ?? 0;

    const endY =
      event.changedTouches[0]?.clientY ?? 0;

    const deltaX =
      endX - touchStartX.current;

    const deltaY =
      endY - touchStartY.current;

    if (Math.abs(deltaX) <= Math.abs(deltaY)) {
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }

    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      aria-label="Featured collection"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: "pan-y" }}
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-black outline-none"
    >
      {/* Full-screen videos */}
      <div className="absolute inset-0">
        {brandSlides.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <video
              key={slide.id}
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              src={slide.video}
              muted
              loop
              playsInline
              preload={index === 0 ? "auto" : "metadata"}
              aria-hidden={!isActive}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out motion-reduce:transition-none ${
                isActive
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          );
        })}
      </div>

      {/* Subtle readability gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

      {/* Left content
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
          <BrandContent slide={currentSlide} />
        </div>
      </div> */}

      {/* Minimal slide indicator */}
      <div className="absolute bottom-8 left-6 z-20 sm:left-10 lg:left-16 xl:left-24">
        <div className="flex items-center gap-3">
          {brandSlides.map((slide, index) => (
            <span
              key={slide.id}
              className={`h-px transition-all duration-500 ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}