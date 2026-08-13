"use client";

interface PaymentSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export default function PaymentSummary({
  subtotal,
  shipping,
  tax,
  total,
}: PaymentSummaryProps) {
  return (
    <div className="rounded-xl border p-5 space-y-3">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>

      <div className="flex justify-between">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}