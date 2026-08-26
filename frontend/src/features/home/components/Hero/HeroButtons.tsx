import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href="/products"
        className="
          group
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-white
          px-5
          py-3
          text-xs
          font-semibold
          text-neutral-950
          transition-all
          duration-300
          hover:bg-white/90
          focus:outline-none
          focus:ring-2
          focus:ring-white/50
          focus:ring-offset-2
          focus:ring-offset-neutral-950
        "
      >
        Shop Collection

        <ArrowUpRight
          aria-hidden="true"
          className="
            h-3.5
            w-3.5
            transition-transform
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      </Link>

      <Link
        href="/products"
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          px-5
          py-3
          text-xs
          font-medium
          text-white/70
          transition-all
          duration-300
          hover:border-white/20
          hover:bg-white/[0.04]
          hover:text-white
        "
      >
        Explore
      </Link>
    </div>
  );
}