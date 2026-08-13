import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div
      className="
        max-w-2xl
        space-y-6

        sm:space-y-8
        lg:space-y-13
      "
    >
      {/* Badge */}
      <div
        className="
          inline-flex
          max-w-max
          items-center
          gap-2
          rounded-full
          border
          border-white/20
          bg-white/10
          px-4
          py-2
          backdrop-blur-md

          sm:px-5
        "
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />

       <span
  className="
    new-collection-badge
    text-[10px]
    font-medium
    uppercase
    tracking-[0.15em]
    text-white/90
    sm:text-xs
    lg:text-sm
  "
>
  New Collection
</span>
      </div>

      {/* Heading */}
      <div className="space-y-3 sm:space-y-5">
        <h1
    className="
      text-3xl
      font-extrabold
      leading-tight
      tracking-tight
      text-white
      sm:text-4xl
      md:text-5xl
      lg:text-6xl
    "
  >
    <span className="hero-premium-line  mb-1 hero-premium-line-1 block  font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-300 sm:text-4xl lg:text-6xl">
      Elevate Your
    </span>

    <span className="font-semibold text-neutral-300">
              Everyday lifestyle..
            </span>
  </h1>

        <p
          className="
            max-w-xl
            text-sm
            leading-7
            text-white/80

            sm:text-base
            md:text-lg
          "
        >
          Discover products that blend modern design,
          premium quality, and exceptional value—all in one
          seamless shopping experience.
        </p>
      </div>

      {/* Buttons */}
      <HeroButtons />
    </div>
  );
}