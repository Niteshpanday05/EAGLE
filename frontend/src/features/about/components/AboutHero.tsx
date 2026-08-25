import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-neutral-950 text-white lg:min-h-[calc(100vh-72px)]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[-30%] h-[600px] w-[600px] rounded-full bg-white/[0.035] blur-[120px]" />

        <div className="absolute bottom-[-40%] right-[5%] h-[600px] w-[500px] rounded-full bg-white/[0.025] blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 sm:px-8 lg:px-12">
        <div className="flex flex-1 items-center py-12 sm:py-14 lg:py-16">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* LEFT */}
            <div className="relative z-10 max-w-xl">
              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-white/30" />

                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                  Our Story
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[4.2rem] xl:text-[4.8rem]">
                Shopping,
                <span className="block text-white/35">
                  thoughtfully
                </span>
                <span className="block">
                  reimagined.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-md text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                We believe great ecommerce should feel effortless.
                Thoughtfully selected products, a refined experience,
                and a commitment to making every purchase feel right.
              </p>

              {/* Actions */}
              <div className="mt-7 flex items-center gap-3">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-neutral-950 transition-all duration-300 hover:bg-white/90"
                >
                  Explore Collection

                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/10 px-5 py-3 text-xs font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">
              <div className="relative ml-auto max-w-2xl">
                {/* Main image */}
                <div className="relative overflow-hidden rounded-[1.75rem] p-1">
                  <div className="relative aspect-[16/14] overflow-hidden rounded-[1.45rem]">
                    <Image
                      src="/images/about/222.png"
                      alt="Our ecommerce collection"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />

                    {/* Image gradient */}
                    {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/[0.08]" /> */}
                  </div>
                </div>

                {/* Floating top card */}
                {/* <div className="absolute -left-4 top-5 hidden rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-left-8">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-white/60" />

                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/45">
                      Curated
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-medium text-white/80">
                    Made for everyday living
                  </p>
                </div> */}

                {/* Floating bottom card */}
                {/* <div className="absolute -bottom-5 right-5 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 shadow-2xl backdrop-blur-xl lg:-right-6">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Our philosophy
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/85">
                    Quality over quantity.
                  </p>
                </div> */}

                {/* Decorative number */}
                <div className="absolute -bottom-10 left-2 hidden text-[5rem] font-bold leading-none tracking-[-0.08em] text-white/[0.025] lg:block">
                  01
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/[0.07]">
          <div className="flex h-12 items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/25">
            <span>Designed with intention</span>

            <span>Since 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}