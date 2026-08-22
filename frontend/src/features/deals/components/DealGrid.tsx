"use client";

import DealCard from "./DealCard";
import type { Deal } from "../types/deal.types";

interface DealGridProps {
  deals: Deal[];
}

export default function DealGrid({
  deals,
}: DealGridProps) {
  if (!deals.length) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-300 py-16 text-center">
        <p className="text-sm text-neutral-500">
          No deals available right now.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {deals.flatMap((deal) =>
        deal.products.map((product) => (
          <DealCard
            key={`${deal.id}-${product.id}`}
            product={product}
            dealSlug={deal.slug}
            discountType={deal.discount_type}
            discountValue={deal.discount_value}
            endsAt={deal.ends_at}
          />
        )),
      )}
    </div>
  );
}