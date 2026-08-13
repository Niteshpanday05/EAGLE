"use client";

import CheckoutForm from "@/features/checkout/components/CheckoutForm";
import { useCheckout } from "@/features/checkout/hooks/useCheckout";

export default function CheckoutPage() {
  const {
    checkout,
    loading,
  } = useCheckout();

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading checkout...
      </div>
    );
  }

  if (!checkout) {
    return (
      <div className="py-20 text-center">
        Unable to load checkout.
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">

    <div className="mb-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-6 text-center text-white shadow-xl">
  <h1 className="text-4xl font-bold tracking-tight">
    Secure Checkout
  </h1>

  <p className="mt-2 text-sm text-slate-300">
    Review your order and complete your purchase securely.
  </p>
</div>

      <CheckoutForm
        subtotal={checkout.subtotal}
        shipping={checkout.shipping}
        tax={checkout.tax}
        discount={checkout.discount}
        total={checkout.total}
      />

    </section>
  );
}