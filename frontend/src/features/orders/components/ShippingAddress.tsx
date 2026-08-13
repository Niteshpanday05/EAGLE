"use client";

import { MapPin } from "lucide-react";

import { ShippingAddress as Address } from "../types/order.types";

interface ShippingAddressProps {
  address: Address;
}

export default function ShippingAddress({
  address,
}: ShippingAddressProps) {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-2">
        <MapPin size={22} />

        <h2 className="text-xl font-semibold">
          Shipping Address
        </h2>
      </div>

      <div className="space-y-2 text-gray-700">
        <p className="font-semibold">
          {address.full_name}
        </p>

        <p>{address.email}</p>

        <p>{address.phone}</p>

        <p>
          {address.street_address}
        </p>

        <p>
          {address.city},{" "}
          {address.province}
        </p>

        <p>{address.country}</p>

        <p>{address.postal_code}</p>
      </div>
    </section>
  );
}