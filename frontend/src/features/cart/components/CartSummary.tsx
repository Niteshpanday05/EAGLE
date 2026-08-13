"use client";

import { useRouter } from "next/navigation";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export default function CartSummary({
  subtotal,
  shipping,
  tax,
  total,
}: CartSummaryProps) {

   const router = useRouter();
  return (
    <div className="sticky top-24 rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-sm">

      {/* Heading */}
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Order Summary
      </h2>

      {/* Promo Code */}
      <div className="mb-8">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Promo Code
        </label>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter code..."
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
          />

          <button className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            Apply
          </button>
        </div>
      </div>

      {/* Price Details */}
      <div className="space-y-4">

        <div className="flex items-center justify-between text-gray-600">
          <span>Subtotal</span>
          <span>Rs. {subtotal.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-gray-600">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? (
              <span className="font-medium text-green-600">Free</span>
            ) : (
              `Rs. ${shipping.toFixed(2)}`
            )}
          </span>
        </div>

        <div className="flex items-center justify-between text-gray-600">
          <span>Tax</span>
          <span>Rs. {tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-dashed pt-5">

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">
              Total
            </span>

            <span className="text-2xl font-bold text-gray-900">
              Rs. {total.toFixed(2)}
            </span>
          </div>

        </div>

      </div>

      {/* Checkout Button */}
      <button
      onClick={() => router.push("/checkout")}
      className="mt-8 w-full rounded-2xl bg-black py-4  cursor-pointer text-base font-semibold text-white transition duration-300 hover:bg-gray-900"
    >
      Proceed to Checkout
    </button>

    </div>
  );
}