"use client";

// import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
// import CartBanner from "./CartBanner";

import { Cart } from "../types/cart.types";

interface CartPageProps {
  cart: Cart;
  updatingItemId?: number;
  removingItemId?: number;
  onIncrease: (item: any) => void;
  onDecrease: (item: any) => void;
  onRemove: (item: any) => void;
  onClearCart: () => void;
}

export default function CartPage({
  cart,
  updatingItemId,
  removingItemId,
  onIncrease,
  onDecrease,
  onRemove,
  onClearCart,
}: CartPageProps) {
  return (
    <section className="bg-[#FCFCFC] py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-12">

          {/* LEFT */}
          <div className="space-y-6 lg:col-span-8">

            <div className="rounded-3xl border border-gray-200 bg-white p-8">

              {/* <CartHeader
                totalItems={cart.total_items}
                onClearCart={onClearCart}
              /> */}

              {/* Desktop Table Header */}
              <div className="mb-6 mt-8 hidden grid-cols-[1fr_160px_120px_40px] text-sm font-medium text-gray-500 lg:grid">
                <span>Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Price</span>
                <span></span>
              </div>

              <div className="space-y-5">
                {cart.items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    updating={updatingItemId === item.id}
                    removing={removingItemId === item.id}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onRemove={onRemove}
                  />
                ))}
              </div>
            </div>

            {/* <CartBanner /> */}

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4">
            <CartSummary
              subtotal={cart.subtotal}
              shipping={cart.shipping}
              tax={cart.tax}
              total={cart.total}
            />
          </div>

        </div>
      </div>
    </section>
  );
}