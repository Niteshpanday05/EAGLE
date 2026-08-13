"use client";

import { PAYMENT_METHODS } from "../constants/paymentMethods";
import { getPaymentIcon } from "../utils/paymentIcons";
import { PaymentMethod } from "../types/payment";

interface PaymentMethodSelectorProps {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
}

export default function PaymentMethodSelector({
  value,
  onChange,
}: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-3">
      {PAYMENT_METHODS.map((method) => {
        const Icon = getPaymentIcon(method.value);

        return (
          <label
            key={method.value}
            className={`flex items-center justify-between rounded-xl border p-4 cursor-pointer transition ${
              value === method.value
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-300"
            }`}
          >
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5" />

              <div>
                <p className="font-medium">{method.label}</p>

                <p className="text-sm text-gray-500">
                  {method.description}
                </p>
              </div>
            </div>

            <input
              type="radio"
              checked={value === method.value}
              onChange={() => onChange(method.value)}
            />
          </label>
        );
      })}
    </div>
  );
}