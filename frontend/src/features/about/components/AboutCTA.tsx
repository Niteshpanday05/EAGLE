import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-[#f7f6f3] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-neutral-200/80" />

          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-neutral-200/60" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full border border-neutral-200/60" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            {/* Label */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-neutral-300" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-400">
                Start Shopping
              </span>

              <span className="h-px w-8 bg-neutral-300" />
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-neutral-950 sm:text-4xl lg:text-5xl xl:text-6xl">
              Find something
              <span className="block text-neutral-400">
                worth bringing home.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
              Explore our collection of thoughtfully selected products and
              discover a shopping experience designed around simplicity,
              quality, and you.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg"
              >
                Explore Collection

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-xs font-semibold text-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-neutral-50"
              >
                Talk to us

                <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Bottom detail */}
          <div className="relative z-10 mt-12 flex flex-col items-center gap-3 border-t border-neutral-200 pt-7 sm:mt-14 sm:flex-row sm:justify-between">
            <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-neutral-300">
              Thoughtfully selected
            </p>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />

              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-neutral-400">
                Made for everyday life
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}