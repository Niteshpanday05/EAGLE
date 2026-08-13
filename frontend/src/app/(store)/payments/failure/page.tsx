"use client";

import Link from "next/link";


export default function PaymentFailurePage() {

  return (
    <div className="flex min-h-screen items-center justify-center">

      <div className="text-center space-y-5">

        <div className="text-5xl">
          ❌
        </div>


        <h1 className="text-3xl font-bold">
          Payment Failed
        </h1>


        <p className="text-gray-500">
          Something went wrong with your payment.
        </p>


        <Link
          href="/checkout"
          className="inline-block rounded-lg bg-black px-6 py-3 text-white"
        >
          Try Again
        </Link>


      </div>

    </div>
  );
}