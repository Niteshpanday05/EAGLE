"use client";

import Link from "next/link";


export default function PaymentCancelledPage() {

  return (
    <div className="flex min-h-screen items-center justify-center">

      <div className="text-center space-y-5">

        <div className="text-5xl">
          ⚠️
        </div>


        <h1 className="text-3xl font-bold">
          Payment Cancelled
        </h1>


        <p className="text-gray-500">
          You cancelled the payment process.
        </p>


        <Link
          href="/checkout"
          className="inline-block rounded-lg bg-black px-6 py-3 text-white"
        >
          Return Checkout
        </Link>

      </div>

    </div>
  );
}