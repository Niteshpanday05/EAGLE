"use client";

import {
  BanknotesIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

interface PaymentMethodProps {
  value: string;
  onChange: (value: string) => void;
}

const methods = [
  {
    code: "COD",
    name: "Cash",
    description: "Pay on delivery",
    icon: BanknotesIcon,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    code: "ESEWA",
    name: "eSewa",
    description: "Online payment",
    icon: DevicePhoneMobileIcon,
    color: "bg-green-100 text-green-600",
  },
  {
    code: "KHALTI",
    name: "Khalti",
    description: "Wallet payment",
    icon: CreditCardIcon,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function PaymentMethod({
  value,
  onChange,
}: PaymentMethodProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Payment Method
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Select your preferred payment option.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {methods.map((method) => {
          const selected = value === method.code;
          const Icon = method.icon;

          return (
            <label
              key={method.code}
              className={`relative cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                selected
                  ? "border-blue-600 bg-blue-50 shadow-md ring-2 ring-blue-100"
                  : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm"
              }`}
            >
              <input
                type="radio"
                name="payment_method"
                checked={selected}
                onChange={() => onChange(method.code)}
                className="hidden"
              />

              {selected && (
                <div className="absolute right-3 top-3 h-3 w-3 rounded-full bg-blue-600" />
              )}

              <div
                className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${method.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-sm font-semibold text-gray-900">
                {method.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {method.description}
              </p>
            </label>
          );
        })}
      </div>
    </section>
  );
}