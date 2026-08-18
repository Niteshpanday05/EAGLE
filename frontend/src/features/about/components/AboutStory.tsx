import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-neutral-300" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400">
              Our Story
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Built around a simpler
            <span className="block text-neutral-400">
              way to shop.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
            We believe shopping should feel simple, intentional, and
            enjoyable. Our goal is to bring quality products together
            with a thoughtful experience that puts people first.
          </p>
        </div>

        {/* Story Layout */}
        <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Image */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-neutral-100">
              <div className="relative aspect-[5/5]">
                <Image
                  src="/images/about/Nitesh.png"
                  alt="Our story"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Small Floating Label */}
            <div className="absolute -bottom-5 left-5 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:left-7">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                Our philosophy
              </p>

              <p className="mt-1.5 text-xs font-semibold text-neutral-900">
                Less noise. More of what matters.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:max-w-xl lg:pl-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-neutral-300" />

              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-400">
                Why we started
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold leading-[1.1] tracking-[-0.035em] text-neutral-950 sm:text-3xl lg:text-4xl">
              Making everyday shopping
              <span className="block text-neutral-400">
                feel effortless.
              </span>
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
              <p>
                We started with a simple idea: online shopping should
                help people find what they need without unnecessary
                complexity.
              </p>

              <p>
                Every part of our store is designed with that principle
                in mind — from discovering products to making a purchase.
              </p>
            </div>

            {/* Principles */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-300">
                  01
                </span>

                <h4 className="mt-4 text-sm font-semibold text-neutral-950">
                  Thoughtfully selected
                </h4>

                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  Products chosen with quality and usefulness in mind.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-300">
                  02
                </span>

                <h4 className="mt-4 text-sm font-semibold text-neutral-950">
                  Designed for people
                </h4>

                <p className="mt-2 text-xs leading-5 text-neutral-500">
                  Every interaction is created to feel clear and natural.
                </p>
              </div>
            </div>

            {/* Link */}
            <a
              href="/products"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold text-neutral-950"
            >
              <span className="border-b border-neutral-300 pb-1 transition-colors duration-300 group-hover:border-neutral-950">
                Explore our collection
              </span>

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}