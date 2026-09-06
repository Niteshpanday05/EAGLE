
export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[35%] top-[-300px] h-[700px] w-[700px] rounded-full bg-white/[0.035] blur-[160px]" />

        <div className="absolute bottom-[-300px] right-[-180px] h-[550px] w-[550px] rounded-full bg-white/[0.025] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      {/* Main container */}
      <div className="relative mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-12">
        {/* Hero content */}
        <div className="flex flex-1 items-center py-14 sm:py-16 lg:py-20">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
            {/* Left */}
            <div>
              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-3 sm:mb-10">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />

                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/35">
                  About us
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.07em]">
                <span className="block">Discover</span>

                <span className="block text-white/25">better.</span>

                <span className="block">Choose</span>

                <span className="block text-white/25">confidently.</span>
              </h1>
            </div>

            {/* Right */}
            <div className="relative lg:pt-24">
              {/* Vertical accent */}
              <div className="absolute -left-6 top-24 hidden h-24 w-px bg-white/15 lg:block" />

              <div className="max-w-sm">
                <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.28em] text-white/25">
                  What we believe
                </p>

                <p className="text-lg leading-8 tracking-[-0.02em] text-white/65 sm:text-xl sm:leading-9">
                  Shopping should feel less overwhelming and more
                  intentional. We make it easier to discover products worth
                  choosing.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-px w-12 bg-white/20" />

                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                    Simple by design
                  </span>
                </div>
              </div>

              {/* Small detail */}
              <div className="mt-16 flex items-end justify-between border-t border-white/[0.08] pt-5 lg:mt-24">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                    Our approach
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    Less noise. Better choices.
                  </p>
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">
                  01
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <footer className="flex items-center justify-between border-t border-white/[0.08] py-5">
          <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/20">
            Made with intention
          </span>

          <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/20">
            Est. 2026
          </span>
        </footer>
      </div>
    </section>
  );
}

