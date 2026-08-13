import { ArrowUpRight, Target } from "lucide-react";

export default function AboutMission() {
  return (
    <section className="bg-[#f7f6f3] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Top Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-neutral-300" />

          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400">
            Our Mission
          </span>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end lg:gap-20">
          {/* Left */}
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <Target className="h-5 w-5 text-neutral-700" />
            </div>

            <p className="mt-6 max-w-xs text-xs leading-6 text-neutral-500">
              Creating a shopping experience that feels considered,
              effortless, and genuinely useful.
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl xl:text-6xl">
              We make everyday shopping
              <span className="block text-neutral-400">
                simpler, more thoughtful,
              </span>
              <span className="block">
                and more enjoyable.
              </span>
            </h2>
          </div>
        </div>

        {/* Description + CTA */}
        <div className="mt-14 grid gap-10 border-t border-neutral-200 pt-10 sm:mt-16 sm:grid-cols-[1fr_auto] sm:items-end">
          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
              Our mission is simple: connect people with products they can
              feel good about choosing. We focus on thoughtful discovery,
              clear information, and a seamless experience from the first
              click to the final delivery.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/products"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-3 text-xs font-semibold text-neutral-900 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
          >
            Discover our collection

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-950 text-white">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        {/* Principles */}
        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-neutral-200 pt-8 sm:mt-16 sm:grid-cols-4">
          <div>
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-300">
              01
            </span>

            <p className="mt-2 text-xs font-semibold text-neutral-800">
              Quality first
            </p>
          </div>

          <div>
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-300">
              02
            </span>

            <p className="mt-2 text-xs font-semibold text-neutral-800">
              Simple experiences
            </p>
          </div>

          <div>
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-300">
              03
            </span>

            <p className="mt-2 text-xs font-semibold text-neutral-800">
              Customer focused
            </p>
          </div>

          <div>
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-300">
              04
            </span>

            <p className="mt-2 text-xs font-semibold text-neutral-800">
              Always improving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}