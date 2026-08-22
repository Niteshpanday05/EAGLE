"use client";

import { useDeals } from "@/features/deals/hooks/useDeals";

import DealGrid from "@/features/deals/components/DealGrid";

export default function DealsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDeals();

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500">
              Limited Time Offers
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
              Deals you don't want to miss.
            </h1>

            <p className="mt-5 text-base leading-7 text-neutral-600">
              Discover exclusive offers and save more on
              your favorite products.
            </p>
          </div>
        </div>
      </section>

      {/* Deals */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-950">
            Today's Deals
          </h2>

          <p className="mt-1 text-sm text-neutral-500">
            Grab these offers before they expire.
          </p>
        </div>

        {isLoading && (
          <div className="py-20 text-center text-sm text-neutral-500">
            Loading deals...
          </div>
        )}

        {isError && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-600">
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