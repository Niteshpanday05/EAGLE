"use client";

import {
  ListFilter,
  Clock3,
  LoaderCircle,
  Truck,
  CheckCircle2,
  XCircle,
} from "lucide-react";

interface OrderFiltersProps {
  value: string;
  onChange: (status: string) => void;
}

const filters = [
  {
    value: "ALL",
    label: "All Orders",
    icon: ListFilter,
  },
  {
    value: "PENDING",
    label: "Pending",
    icon: Clock3,
  },
  {
    value: "PROCESSING",
    label: "Processing",
    icon: LoaderCircle,
  },
  {
    value: "SHIPPED",
    label: "Shipped",
    icon: Truck,
  },
  {
    value: "DELIVERED",
    label: "Delivered",
    icon: CheckCircle2,
  },
  {
    value: "CANCELLED",
    label: "Cancelled",
    icon: XCircle,
  },
];

export default function OrderFilters({
  value,
  onChange,
}: OrderFiltersProps) {
  return (
    <section className="mb-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-1 flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Filter Orders
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Quickly find orders by their current status.
          </p>
        </div>

      </div>

      <div className="flex gap-4 overflow-x-auto pt-2 pb-1 scrollbar-hide">

        {filters.map((filter) => {
          const Icon = filter.icon;

          const active =
            value === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() =>
                onChange(filter.value)
              }
              className={`
                flex items-center gap-2
                whitespace-nowrap
                rounded-full
                border
                px-3
                py-2
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  active
                    ? "border-black bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg"
                    : "border-gray-200 bg-gray-50 text-gray-700 hover:-translate-y-0.5 hover:border-black hover:bg-white hover:shadow-md"
                }
              `}
            >
              <Icon size={18} />

              {filter.label}
            </button>
          );
        })}

      </div>

    </section>
  );
}