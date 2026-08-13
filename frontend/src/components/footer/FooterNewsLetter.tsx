"use client";

import { ArrowRight } from "lucide-react";

export default function FooterNewsletter() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
      <div className="sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-600">
            Newsletter
          </p>

          <h3 className="mt-2 text-sm font-medium text-white sm:text-base">
            Get the latest from Sajilo Order.
          </h3>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex w-full overflow-hidden rounded-xl border border-white/10 bg-black/20 p-1"
      >
        <label
          htmlFor="footer-email"
          className="sr-only"
        >
          Email address
        </label>

        <input
          id="footer-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          className="min-w-0 flex-1 bg-transparent px-3 text-xs text-white outline-none placeholder:text-neutral-600 sm:px-4 sm:text-sm"
          required
        />

        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-neutral-950 transition-all duration-200 hover:bg-neutral-200 active:scale-95 sm:h-10 sm:w-10"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}