import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="max-w-sm">
      {/* Brand */}
      <Link
        href="/"
        aria-label="Sajilo Order home"
        className="inline-flex items-center"
      >
        <span className="text-2xl font-semibold tracking-[-0.05em] text-neutral-950">
          Sajilo
        </span>

        <span className="text-2xl font-semibold tracking-[-0.05em] text-slate-">
          Order.com
        </span>
      </Link>

      {/* Description */}
      <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
        Shop your favorite products with ease. Quality products,
        simple shopping, and reliable delivery — all in one place.
      </p>

      {/* About */}
      <Link
        href="/about"
        className="
          group
          mt-6
          inline-flex
          min-h-10
          items-center
          gap-2
          text-xs
          font-semibold
          text-neutral-950
        "
      >
        <span className="border-b border-neutral-300 pb-1 transition-colors duration-300 group-hover:border-neutral-950">
          Discover our story
        </span>

        <ArrowUpRight
          className="
            h-3.5
            w-3.5
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </Link>
    </div>
  );
}