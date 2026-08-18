"use client";

import { useRouter } from "next/navigation";
import {
  Building2,
  CheckCircle2,
  Home,
  Plus,
  Phone,
} from "lucide-react";

import { Address } from "@/features/addresses/types";

interface Props {
  addresses: Address[];
  selected: number;
  onChange: (id: number) => void;
}

export default function AddressSelector({
  addresses,
  selected,
  onChange,
}: Props) {
  const router = useRouter();
   console.log("addresses:", addresses);
  console.log("isArray:", Array.isArray(addresses));


  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {addresses.map((address, index) => {
        const isSelected = selected === address.id;
        const isHome = index % 2 === 0;

        return (
          <label
            key={address.id}
            className={`group relative flex min-h-[115px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border bg-white p-4 transition-all duration-300 ${
              isSelected
                ? "border-blue-500 bg-blue-50 shadow-lg ring-2 ring-blue-100"
                : "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            }`}
          >
            <input
              type="radio"
              checked={isSelected}
              onChange={() => onChange(address.id)}
              className="hidden"
            />

            {isSelected && (
              <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-blue-600" />
            )}

            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  isHome
                    ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
                    : "bg-gradient-to-br from-orange-400 to-pink-500 text-white"
                }`}
              >
                {isHome ? (
                  <Home className="h-5 w-5" />
                ) : (
                  <Building2 className="h-5 w-5" />
                )}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {isHome ? "Home" : "Office"}
                </h3>

                {address.is_default && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                    Default
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3">
              <p className="truncate text-sm font-semibold text-slate-900">
                {address.full_name}
              </p>

              <p className="mt-1 truncate text-xs text-slate-500">
                {address.city}, {address.state}
              </p>

              <div className="mt-2 flex items-center gap-1 text-xs text-slate-600">
                <Phone className="h-3.5 w-3.5" />
                {address.phone_number}
              </div>
            </div>
          </label>
        );
      })}

      {/* Add Address */}
      <button
        type="button"
        onClick={() => router.push("/addresses")}
        className="group flex min-h-[115px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 via-white to-indigo-50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white transition-transform duration-300 group-hover:scale-110">
          <Plus className="h-5 w-5" />
        </div>

        <h3 className="mt-3 text-sm font-semibold text-slate-900">
          Add Address
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          New delivery location
        </p>
      </button>
    </div>
  );
}