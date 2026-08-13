"use client";

import { useParams } from "next/navigation";

import {
  Package,
  Calendar,
} from "lucide-react";

import { useOrder } from "../hooks/useOrder";

import OrderItem from "../components/OrderItem";
import OrderSummary from "../components/OrderSummary";
import ShippingAddress from "../components/ShippingAddress";
import PaymentInformation from "../components/PaymentInformation";
import OrderStatus from "../components/OrderStatus";

export default function OrderDetailsPage() {
  const params = useParams();

  const orderNumber =
    params.orderNumber as string;

  const {
    order,
    loading,
    error,
  } = useOrder(orderNumber);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="animate-pulse space-y-6">
          <div className="h-10 w-72 rounded bg-gray-200" />

          <div className="h-48 rounded-xl bg-gray-200" />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="h-80 rounded-xl bg-gray-200 lg:col-span-2" />

            <div className="h-80 rounded-xl bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">
          Order not found
        </h2>

        <p className="mt-2 text-gray-500">
          The requested order does not exist.
        </p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* Header */}

      <div className="mb-10 flex flex-col justify-between gap-6 rounded-2xl border bg-white p-8 shadow-sm lg:flex-row lg:items-center">
        <div>
          <p className="text-sm text-gray-500">
            Order Number
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            {order.order_number}
          </h1>

          <div className="mt-5 flex flex-wrap gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={18} />

              {new Date(
                order.created_at
              ).toLocaleDateString()}
            </div>

            <div className="flex items-center gap-2">
              <Package size={18} />

              {order.items.length} Items
            </div>
          </div>
        </div>

        <OrderStatus
          status={order.status}
        />
      </div>

      {/* Body */}

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left */}

        <div className="space-y-8 lg:col-span-2">
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">
              Ordered Products
            </h2>

            <div className="space-y-5">
              {order.items.map((item) => (
                <OrderItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </section>

          <ShippingAddress
            address={
              order.shipping_address
            }
          />
        </div>

        {/* Right */}

        <aside className="space-y-8">
          <PaymentInformation
            paymentMethod={
              order.payment_method
            }
            paymentStatus={
              order.payment_status
            }
          />

          <OrderSummary
            order={order}
          />
        </aside>
      </div>
    </section>
  );
}