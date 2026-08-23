"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import type { Deal } from "../types/deal.types";

interface DealCarouselProps {
  deals: Deal[];
  isLoading?: boolean;
}

export default function DealCarousel({
  deals,
  isLoading = false,
}: DealCarouselProps) {
  const slides = deals.slice(0, 4);

  const [current, setCurrent] = useState(0);

  /* ---------------------------------------------------------
     AUTO SLIDE
  --------------------------------------------------------- */

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1,
      );
    }, 4500);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  /* ---------------------------------------------------------
     KEEP INDEX VALID
  --------------------------------------------------------- */

  useEffect(() => {
    if (current >= slides.length && slides.length > 0) {
      setCurrent(0);
    }
  }, [current, slides.length]);

  /* ---------------------------------------------------------
     NAVIGATION
  --------------------------------------------------------- */

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1,
    );
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1,
    );
  };

  /* ---------------------------------------------------------
     LOADING
  --------------------------------------------------------- */

  if (isLoading) {
    return (
      <section className="px-3 pt-4 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-neutral-950">
          <div className="grid min-h-[310px] animate-pulse lg:grid-cols-2">
            <div className="flex flex-col justify-center px-7 sm:px-10 lg:px-14">
              <div className="h-3 w-24 rounded-full bg-neutral-800" />

              <div className="mt-5 h-10 w-3/4 rounded-lg bg-neutral-800" />

              <div className="mt-4 h-4 w-1/2 rounded bg-neutral-800" />

              <div className="mt-6 h-9 w-32 rounded-xl bg-neutral-800" />
            </div>

            <div className="bg-neutral-900" />
          </div>
        </div>
      </section>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className="px-3 pt-4 sm:px-5 lg:px-6">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            CAROUSEL
        ===================================================== */}

        <div className="relative overflow-hidden rounded-[28px] bg-neutral-950 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition:
                  "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {slides.map((deal) => {
                const product = deal.products?.[0];

                if (!product) {
                  return (
                    <div
                      key={deal.id}
                      className="w-full min-w-full shrink-0"
                    >
                      <div className="flex min-h-[310px] items-center justify-center">
                        <span className="text-sm text-neutral-600">
                          No product available
                        </span>
                      </div>
                    </div>
                  );
                }

                const basePrice = Number(product.price);

                const finalPrice = product.discount_price
                  ? Number(product.discount_price)
                  : deal.discount_type === "percentage"
                    ? Math.max(
                        basePrice -
                          (basePrice *
                            Number(deal.discount_value)) /
                            100,
                        0,
                      )
                    : Math.max(
                        basePrice -
                          Number(deal.discount_value),
                        0,
                      );

                const discountValue = Number(
                  deal.discount_value,
                );

                return (
                  <article
                    key={deal.id}
                    className="w-full min-w-full shrink-0"
                  >
                    <div className="grid min-h-[310px] grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">

                      {/* =================================================
                          LEFT CONTENT
                      ================================================= */}

                      <div className="relative z-10 flex flex-col justify-center bg-neutral-950 px-7 py-9 sm:px-10 lg:px-12 xl:px-16">

                        {/* Small label */}
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />

                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                            Limited Offer
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="mt-4 max-w-[520px] text-[30px] font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-[36px] lg:text-[40px]">
                          {deal.name}
                        </h2>

                        {/* Description */}
                        {deal.description && (
                          <p className="mt-3 max-w-[420px] text-sm leading-6 text-neutral-400">
                            {deal.description}
                          </p>
                        )}

                        {/* Product */}
                        <p className="mt-3 text-xs font-medium text-neutral-500">
                          {product.name}
                        </p>

                        {/* Price */}
                        <div className="mt-4 flex flex-wrap items-center gap-2.5">

                          <span className="text-[23px] font-bold tracking-tight text-white">
                            Rs.{" "}
                            {finalPrice.toLocaleString()}
                          </span>

                          {basePrice > finalPrice && (
                            <span className="text-sm text-neutral-600 line-through">
                              Rs.{" "}
                              {basePrice.toLocaleString()}
                            </span>
                          )}

                          {discountValue > 0 && (
                            <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-neutral-950">
                              {deal.discount_type ===
                              "percentage"
                                ? `${discountValue}% OFF`
                                : `SAVE RS. ${discountValue.toLocaleString()}`}
                            </span>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="mt-5">
                          <Link
                            href={`/menu/${product.id}`}
                            className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-neutral-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-lg"
                          >
                            Shop now

                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>

                      {/* =================================================
                          RIGHT PRODUCT SHOWCASE
                      ================================================= */}

                      <div className="relative min-h-[270px] overflow-hidden bg-[#111111] lg:min-h-[310px]">

                        {/* Ambient spotlight */}
                        <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.055] blur-3xl sm:h-[340px] sm:w-[340px]" />

                        {/* Secondary glow */}
                        <div className="absolute right-[-80px] top-[-100px] h-[260px] w-[260px] rounded-full bg-white/[0.025] blur-3xl" />

                        {/* Product */}
                        {product.thumbnail ? (
                          <div className="absolute inset-0 flex items-center justify-center px-7 py-6 sm:px-10 lg:px-14">

                            <img
                              src={product.thumbnail}
                              alt={product.name}
                              className="relative z-10 h-full max-h-[285px] w-full max-w-[460px] object-contain drop-shadow-[0_28px_30px_rgba(0,0,0,0.75)] transition-transform duration-700 hover:scale-[1.04]"
                            />

                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm text-neutral-600">
                              No image available
                            </span>
                          </div>
                        )}

                        {/* Product floor shadow */}
                        <div className="absolute bottom-[11%] left-1/2 z-0 h-5 w-[48%] -translate-x-1/2 rounded-[50%] bg-black blur-xl" />

                        {/* Discount badge */}
                        {discountValue > 0 && (
                          <div className="absolute right-5 top-5 z-20 rounded-full bg-white px-3.5 py-2 text-[10px] font-bold tracking-wide text-neutral-950 shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
                            {deal.discount_type ===
                            "percentage"
                              ? `${discountValue}% OFF`
                              : `SAVE RS. ${discountValue.toLocaleString()}`}
                          </div>
                        )}

                        {/* Subtle bottom gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              CONTROLS
          ===================================================== */}

          {slides.length > 1 && (
            <>
              {/* Arrows */}
              <div className="absolute bottom-5 left-6 z-30 flex gap-2">

                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous deal"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white backdrop-blur-md transition hover:bg-white hover:text-black active:scale-95"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next deal"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white backdrop-blur-md transition hover:bg-white hover:text-black active:scale-95"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>

              </div>

              {/* Indicators */}
              <div className="absolute bottom-6 right-6 z-30 flex items-center gap-1.5">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrent(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      current === index
                        ? "w-7 bg-white"
                        : "w-1.5 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}