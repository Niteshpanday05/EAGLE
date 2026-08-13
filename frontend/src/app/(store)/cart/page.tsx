"use client";

import CartSkeleton from "@/features/cart/components/CartSkeleton";
import EmptyCart from "@/features/cart/components/EmptyCart";
import CartHeader from "@/features/cart/components/CartHeader";

import { useCart } from "@/features/cart/hooks/useCart";

import CartItems from "@/features/cart/sections/CartItems";
import CartSidebar from "@/features/cart/sections/CartSidebar";

export default function CartPage() {
  const {
    data: cart,
    isLoading,
    isError,
    error,
  } = useCart();

  if (isLoading) {
    return (
      <main className="bg-[#FCFCFC] py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <CartSkeleton />
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="bg-[#FCFCFC] py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-xl font-semibold text-red-600">
              Failed to load cart
            </h2>

            <p className="mt-2 text-gray-600">
              {(error as Error).message}
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <main className="bg-[#FCFCFC] py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <EmptyCart />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#FCFCFC] py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-12">

          {/* Left Side */}
          <section className="lg:col-span-8">

            <div className="rounded-3xl border border-gray-100 bg-white p-8">

              <CartHeader
                totalItems={cart.total_items}
                onClearCart={() => {
                  // we'll connect this in Phase 2
                }}
              />

              <div className="mt-8 hidden grid-cols-[1fr_170px_130px_50px] border-b border-gray-100 pb-4 text-sm font-medium text-gray-500 lg:grid">
                <span>Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Price</span>
                <span></span>
              </div>

              <div className="mt-6">
                <CartItems cart={cart} />
              </div>

            </div>

          </section>

          {/* Right Side */}
          <aside className="lg:col-span-4">
            <CartSidebar cart={cart} />
          </aside>

        </div>

      </div>
    </main>
  );
}