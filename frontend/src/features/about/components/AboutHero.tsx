export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-280px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

        <div className="absolute bottom-[-320px] right-[-180px] h-[520px] w-[520px] rounded-full bg-white/[0.02] blur-[130px]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <header className="flex items-center justify-between border-b border-white/[0.08] py-5">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-white/70"
            />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/45">
              About us
            </span>
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/25">
            Est. 2026
          </span>
        </header>

        {/* Main */}
        <div className="flex flex-1 items-center py-16 sm:py-20 lg:py-24">
          <div className="w-full">

            {/* Intro */}
            <div className="mb-10 max-w-md sm:mb-12">
              <p className="text-xs leading-6 text-white/40 sm:text-sm sm:leading-7">
                We are building a better way to discover the things
                you need, want, and love.
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.065em]">
              <span className="block">
                Discover
              </span>

              <span className="block text-white/30">
                better.
              </span>

              <span className="block">
                Choose
              </span>

              <span className="block text-white/30">
                confidently.
              </span>
            </h1>

            {/* Supporting content */}
            {/* <div className="mt-14 grid gap-10 border-t border-white/[0.08] pt-8 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[1fr_1fr_0.7fr]">

              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/25">
                  Our philosophy
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
                  Great shopping is not about having more choices.
                  It is about making the right choices easier.
                </p>
              </div>

              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/25">
                  What matters
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
                  Thoughtful products, transparent value, and an
                  experience designed to stay simple from beginning
                  to end.
                </p>
              </div>

              <div className="lg:justify-self-end">
                <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/25">
                  The idea
                </p>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  Less noise.
                  <br />
                  Better products.
                  <br />
                  Easier decisions.
                </p>
              </div>

            </div> */}
          </div>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-white/[0.08] py-5">
          <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/20">
            Made with intention
          </span>

          <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/20">
            01
          </span>
        </footer>

      </div>
    </section>
  );
}