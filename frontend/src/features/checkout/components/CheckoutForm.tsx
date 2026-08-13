"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAddresses } from "../../addresses/hooks/useAddresses";
import { usePlaceOrder } from "../hooks/usePlaceOrder";

import ShippingAddress from "./ShippingAddress";
import PaymentMethod from "./PaymentMethod";
import OrderNotes from "./OrderNotes";
import OrderSummary from "./OrderSummary";
import PlaceOrderButton from "./PlaceOrderButton";

interface CheckoutFormProps {
  subtotal: string;
  shipping: string;
  tax: string;
  discount: string;
  total: string;
}

export default function CheckoutForm({
  subtotal,
  shipping,
  tax,
  discount,
  total,
}: CheckoutFormProps) {
  const router = useRouter();

  const { mutate, isPending } = usePlaceOrder();

  const { addresses, loading } = useAddresses();

  const [form, setForm] = useState({
    address_id: 0,
    payment_method: "COD",
    notes: "",
  });

  useEffect(() => {
    if (!addresses.length) return;

    const defaultAddress =
      addresses.find((address) => address.is_default) ?? addresses[0];

    setForm((prev) => ({
      ...prev,
      address_id: defaultAddress.id,
    }));
  }, [addresses]);

  function handlePlaceOrder() {
    if (!form.address_id) {
      alert("Please select a shipping address.");
      return;
    }

    mutate(form, {
      onSuccess(order) {
        router.push(`/orders/success?order=${order.order_number}`);
      },
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Left Section */}
      <div className="space-y-8 lg:col-span-2">
        <ShippingAddress
          addresses={addresses}
          loading={loading}
          selectedAddressId={form.address_id}
          onSelect={(id) =>
            setForm((prev) => ({
              ...prev,
              address_id: id,
            }))
          }
          onAddNewAddress={() => router.push("/addresses")}
        />

        <PaymentMethod
          value={form.payment_method}
          onChange={(value) =>
            setForm((prev) => ({
              ...prev,
              payment_method: value,
            }))
          }
        />

        <OrderNotes
          value={form.notes}
          onChange={(value) =>
            setForm((prev) => ({
              ...prev,
              notes: value,
            }))
          }
        />
      </div>

      {/* Right Section */}
     <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            discount={discount}
            total={total}
          />

          <div className="mt-6 border-t border-gray-200 pt-6">
            <PlaceOrderButton loading={isPending} onClick={handlePlaceOrder} />
          </div>
        </div>
      </aside>
    </div>
  );
}
