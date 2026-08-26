import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh overflow-hidden bg-neutral-950 text-white lg:min-h-[calc(100vh-72px)]">
      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top-left glow */}
        <div className="absolute left-[10%] top-[-30%] h-[500px] w-[500px] rounded-full bg-white/[0.035] blur-[120px] sm:h-[600px] sm:w-[600px]" />

        {/* Bottom-right glow */}
        <div className="absolute bottom-[-40%] right-[5%] h-[500px] w-[400px] rounded-full bg-white/[0.025] blur-[120px] sm:h-[600px] sm:w-[500px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 sm:px-8 lg:px-12">
        {/* Hero Content */}
        <div className="flex flex-1 items-center py-10 sm:py-14 lg:py-16">
          <div className="grid w-full items-center gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <HeroContent />

            <HeroVisual />
          </div>
        </div>

        {/* Bottom Information */}
        <div className="border-t border-white/[0.07]">
          <div className="flex min-h-12 items-center justify-between gap-4 py-3 text-[9px] uppercase tracking-[0.2em] text-white/25">
            <span>Designed with intention</span>

            <span>Since 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}