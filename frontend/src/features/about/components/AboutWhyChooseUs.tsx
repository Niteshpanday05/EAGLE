import {
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { ABOUT_REASONS } from "../about.constants";

const ICONS = [
  BadgeCheck,
  Truck,
  ShieldCheck,
  Headphones,
];

export default function AboutWhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neutral-300" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400">
              Why Choose Us
            </span>

            <span className="h-px w-8 bg-neutral-300" />
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Everything designed
            <span className="block text-neutral-400">
              around you.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
            From product quality to customer support, every detail is
            thoughtfully designed to make your shopping experience
            simpler, safer, and more enjoyable.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {ABOUT_REASONS.map((reason, index) => {
            const Icon = ICONS[index];

            return (
              <article
                key={reason.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-[#f7f6f3] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] sm:p-7"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="text-[9px] font-medium tracking-[0.22em] text-neutral-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition-all duration-500 group-hover:border-neutral-300 group-hover:shadow-sm">
                    <Icon
                      className="h-[17px] w-[17px] text-neutral-600 transition-transform duration-500 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-10 text-base font-semibold tracking-[-0.02em] text-neutral-950 sm:text-lg">
                  {reason.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-neutral-500 sm:text-sm">
                  {reason.description}
                </p>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between">
                  <div className="h-px w-0 bg-neutral-950 transition-all duration-500 group-hover:w-10" />

                  <span className="text-sm text-neutral-300 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-950">
                    ↗
                  </span>
                </div>

                {/* Subtle corner detail */}
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-24 w-24 rounded-full border border-neutral-200/60 transition-transform duration-700 group-hover:scale-150" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}