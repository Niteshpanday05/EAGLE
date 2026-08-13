import { PROMO_BANNER } from "./promoBanner.constants";

export default function PromoBannerContent() {
  return (
    <>
      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-white/20
          bg-white/10
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-white/90
        "
      >
        {PROMO_BANNER.badge}
      </span>

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          leading-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        {PROMO_BANNER.title}
      </h2>

      <p
        className="
          mt-6
          max-w-xl
          text-base
          leading-8
          text-slate-300
          sm:text-lg
        "
      >
        {PROMO_BANNER.subtitle}
      </p>
    </>
  );
}