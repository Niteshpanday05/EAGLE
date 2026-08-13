import Link from "next/link";

export default function HeroButtons() {
  return (
    <div
      className="
        mt-8
        flex
        flex-col
        gap-4

        sm:flex-row
        sm:items-center
      "
    >
      <Link
        href="/products"
        className="
          inline-flex
          w-full
          items-center
          justify-center
          rounded-full
          border
          border-white
          bg-white
          px-6
          py-3
          text-sm
          font-semibold
          text-black
          transition-all
          duration-300

          hover:bg-transparent
          hover:text-white

          sm:w-auto
          sm:px-8
          sm:py-3.5
          sm:text-base

          lg:px-10
          lg:py-3
        "
      >
        Shop Now
      </Link>

      <Link
        href="/categories"
        className="
          inline-flex
          w-full
          items-center
          justify-center
          rounded-full
          border
          border-white/60
          bg-transparent
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300

          hover:bg-white
          hover:text-black

          sm:w-auto
          sm:px-8
          sm:py-3.5
          sm:text-base

          lg:px-6
          lg:py-3
        "
      >
        Explore Categories
      </Link>
    </div>
  );
}