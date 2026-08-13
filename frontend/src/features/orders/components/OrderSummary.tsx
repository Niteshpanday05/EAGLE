"use client";

import { Order } from "../types/order.types";

interface OrderSummaryProps {
  order: Order;
}

export default function OrderSummary({
  order,
}: OrderSummaryProps) {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>
            Rs. {order.subtotal}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>

          <span>
            Rs. {order.shipping}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>

          <span>
            Rs. {order.tax}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Discount</span>

          <span>
            - Rs. {order.discount}
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>

          <span>
            Rs. {order.total}
          </span>
        </div>
      </div>
    </section>
  );
}