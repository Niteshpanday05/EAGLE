"use client";

import { useDeals } from "@/features/deals/hooks/useDeals";

import DealGrid from "@/features/deals/components/DealGrid";
import DealCarousel from "@/features/deals/components/DealCarousel";

export default function DealsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDeals();

  return (
    <main className="min-h-screen bg-[#f6f6f3]">
      <DealCarousel
        deals={data?.results ?? []}
        isLoading={isLoading}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
            Limited Time
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
            Today&apos;s Deals
          </h2>

          <p className="mt-1.5 text-sm text-neutral-500">
            Grab these offers before they expire.
          </p>
        </div>

        {isError && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-600">
            Unable to load deals. Please try again.
          </div>
        )}

        {data && (
          <DealGrid deals={data.results} />
        )}
      </section>
    </main>
  );
}