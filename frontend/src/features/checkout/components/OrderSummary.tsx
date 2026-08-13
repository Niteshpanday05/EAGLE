"use client";

interface OrderSummaryProps {
  subtotal: string;
  shipping: string;
  tax: string;
  discount: string;
  total: string;
}

export default function OrderSummary({
  subtotal,
  shipping,
  tax,
  discount,
  total,
}: OrderSummaryProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      
      <h2 className="mb-5 text-lg font-semibold text-slate-900">
        Order Summary
      </h2>


      <div className="space-y-3 text-sm">

        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span className="font-medium text-slate-900">
            Rs. {subtotal}
          </span>
        </div>


        <div className="flex justify-between text-slate-600">
          <span>Shipping</span>
          <span className="font-medium text-slate-900">
            Rs. {shipping}
          </span>
        </div>


        <div className="flex justify-between text-slate-600">
          <span>Tax</span>
          <span className="font-medium text-slate-900">
            Rs. {tax}
          </span>
        </div>


        <div className="flex justify-between text-slate-600">
          <span>Discount</span>
          <span className="font-medium text-green-600">
            - Rs. {discount}
          </span>
        </div>

      </div>


      <div className="my-4 border-t border-slate-100" />


      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-slate-900">
          Total
        </span>

        <span className="text-xl font-bold text-slate-900">
          Rs. {total}
        </span>
      </div>

    </section>
  );
}