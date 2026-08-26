import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-xl">

      {/* New Collection */}
      <div
        className={`${styles.heroItem} ${styles.item1} mb-6 flex items-center gap-3`}
      >
        <span
          aria-hidden="true"
          className="h-px w-8 bg-white/30"
        />

        <span
          className={`
            ${styles.newCollection}
            text-[10px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-white/60
            sm:text-xs
          `}
        >
          New Collection
        </span>
      </div>

      {/* Heading */}
      <h1
        className="
          text-[2.7rem]
          font-semibold
          leading-[0.98]
          tracking-[-0.04em]
          sm:text-5xl
          lg:text-[4rem]
          xl:text-[4.5rem]
        "
      >
        <span
          className={`${styles.heroItem} ${styles.item2} block`}
        >
          Everything
        </span>

        <span
          className={`${styles.heroItem} ${styles.item3} block text-white/35`}
        >
          you need,
        </span>

        <span
          className={`${styles.heroItem} ${styles.item4} block`}
        >
          beautifully chosen.
        </span>
      </h1>

      {/* Description */}
      <p
        className={`
          ${styles.heroItem}
          ${styles.item5}
          mt-6
          max-w-md
          text-sm
          leading-6
          text-white/50
          sm:text-base
          sm:leading-7
        `}
      >
        Discover thoughtfully selected products designed to
        make everyday living simpler, better, and more
        enjoyable.
      </p>

      {/* Buttons */}
      <div
        className={`
          ${styles.heroItem}
          ${styles.item6}
          mt-7
          flex
          flex-wrap
          items-center
          gap-3
        `}
      >
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
            duration-500
            hover:bg-white/90
            hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]
          "
        >
          Shop Collection

          <ArrowUpRight
            aria-hidden="true"
            className="
              h-3.5
              w-3.5
              transition-transform
              duration-500
              ease-out
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
            duration-500
            hover:border-white/20
            hover:bg-white/[0.04]
            hover:text-white
          "
        >
          Explore
        </Link>
      </div>
    </div>
  );
}