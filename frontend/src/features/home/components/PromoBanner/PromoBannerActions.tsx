import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { PROMO_BANNER } from "./promoBanner.constants";

export default function PromoBannerActions() {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        sm:flex-row
      "
    >
      <Link
        href="/products"
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-full
          bg-white
          px-8
          py-4
          text-sm
          font-semibold
          text-slate-900
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {PROMO_BANNER.primaryButton}

        <ArrowRight size={18} />
      </Link>

      <Link
        href="/categories"
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          px-8
          py-4
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-white/10
        "
      >
        {PROMO_BANNER.secondaryButton}
      </Link>
    </div>
  );
}