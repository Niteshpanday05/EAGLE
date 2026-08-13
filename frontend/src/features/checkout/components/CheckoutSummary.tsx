interface Props {
  subtotal: string;
  shipping: string;
  tax: string;
  total: string;
}

export default function CheckoutSummary({
  subtotal,
  shipping,
  tax,
  total,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Order Summary
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>

      </div>

    </div>
  );
}