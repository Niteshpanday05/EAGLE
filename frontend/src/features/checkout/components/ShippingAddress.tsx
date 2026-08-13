"use client";

import { Home } from "lucide-react";

import AddressSelector from "./AddressSelector";
import { Address } from "@/features/addresses/types";

interface ShippingAddressProps {
  addresses: Address[];
  loading: boolean;
  selectedAddressId: number;
  onSelect: (id: number) => void;
}

export default function ShippingAddress({
  addresses,
  loading,
  selectedAddressId,
  onSelect,
}: ShippingAddressProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md">
          <Home className="h-6 w-6" />
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Shipping Address
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Choose where you want your order delivered
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {loading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-28 animate-pulse rounded-2xl bg-slate-100"
              />
            ))}
          </div>
        ) : (
          <AddressSelector
            addresses={addresses}
            selected={selectedAddressId}
            onChange={onSelect}
          />
        )}
      </div>
    </section>
  );
}