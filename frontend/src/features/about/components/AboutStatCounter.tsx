"use client";

import { useEffect, useRef, useState } from "react";

interface AboutStatCounterProps {
  value: string;
  duration?: number;
}

export default function AboutStatCounter({
  value,
  duration = 1600,
}: AboutStatCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasStarted, setHasStarted] = useState(false);

  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    // Extract numeric part
    const match = value.match(/[\d.]+/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = Number(match[0]);

    if (Number.isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const suffix = value.replace(match[0], "");

    const decimalPlaces = match[0].includes(".")
      ? match[0].split(".")[1]?.length ?? 0
      : 0;

    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = target * easedProgress;

      setDisplayValue(
        `${currentValue.toFixed(decimalPlaces)}${suffix}`,
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, value, duration]);

  return (
    <p
      ref={ref}
      className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-[2.75rem]"
    >
      {displayValue}
    </p>
  );
}