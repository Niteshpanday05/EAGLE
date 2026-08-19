"use client";

import NewsletterForm from "./NewsletterForm";

interface NewsletterBenefitProps {
  number: string;
  title: string;
  description: string;
}

function NewsletterBenefit({
  number,
  title,
  description,
}: NewsletterBenefitProps) {
  return (
    <div className="group flex items-start gap-4">
      {/* Number */}
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c8c2b6] text-[10px] font-medium tracking-wide text-[#8b877d] transition-colors duration-300 group-hover:border-[#66735b] group-hover:text-[#66735b]">
        {number}
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#292a26]">
          {title}
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-[#77736a]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function NewsletterSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f2ea] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      {/* Decorative Background Text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none text-[9rem] font-semibold uppercase leading-none tracking-[-0.08em] text-[#292a26]/[0.035] lg:block xl:text-[12rem]"
      >
        Connect
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Left Content */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#8b877d]">
              Newsletter
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#292a26] sm:text-5xl lg:text-6xl">
              Get what&apos;s new.
              <br />
              <span className="text-[#66735b]">
                Before everyone else.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#77736a] sm:text-base">
              Stay ahead of the latest arrivals, discover exclusive
              offers, and get early access to selected releases.
            </p>

            <div className="mt-9">
              <NewsletterForm />
            </div>
          </div>

          {/* Right Benefits */}
          <div className="relative lg:pl-8">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#8b877d]">
              Stay Connected
            </p>

            <div className="space-y-8">
              <NewsletterBenefit
                number="01"
                title="New Arrivals"
                description="Be the first to discover our latest products and collections."
              />

              <NewsletterBenefit
                number="02"
                title="Exclusive Offers"
                description="Receive special offers and promotions reserved for subscribers."
              />

              <NewsletterBenefit
                number="03"
                title="Early Access"
                description="Shop selected releases before they become available to everyone."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}