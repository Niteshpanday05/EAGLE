import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-xl">
      {/* Eyebrow */}
      <div className="mb-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-px w-8 bg-white/30"
        />

        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
          Curated for you
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
        Everything
        <span className="block text-white/35">
          you need,
        </span>

        <span className="block">
          beautifully chosen.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-md text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
        Discover thoughtfully selected products designed to make
        everyday living simpler, better, and more enjoyable.
      </p>

      {/* Actions */}
      <div className="mt-7 flex flex-wrap items-center gap-3">
        {/* Primary Button */}
        <Link
          href="/products"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-neutral-950 transition-all duration-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-neutral-950"
        >
          Shop Collection

          <ArrowUpRight
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        {/* Secondary Button */}
        <Link
          href="/products"
          className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-xs font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-neutral-950"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}