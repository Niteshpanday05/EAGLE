"use client";

import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-5">

        <div className="text-5xl">
          ✅
        </div>

        <h1 className="text-3xl font-bold">
          Payment Successful
        </h1>

        <p className="text-gray-500">
          Your payment has been completed successfully.
        </p>


        <Link
          href="/orders"
          className="inline-block rounded-lg bg-black px-6 py-3 text-white"
        >
          View Orders
        </Link>

      </div>
    </div>
  );
}