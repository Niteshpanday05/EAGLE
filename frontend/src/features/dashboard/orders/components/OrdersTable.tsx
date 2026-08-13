"use client";

import { DashboardOrder } from "../types";

import OrderStatusBadge from "./OrderStatusBadge";

interface Props {
  orders: DashboardOrder[];
}

export default function OrdersTable({
  orders,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <table className="min-w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-6 py-4 text-left">
              Order
            </th>

            <th className="px-6 py-4 text-left">
              Customer
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-left">
              Payment
            </th>

            <th className="px-6 py-4 text-left">
              Total
            </th>

            <th className="px-6 py-4 text-left">
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-t"
            >

              <td className="px-6 py-4 font-medium">
                {order.order_number}
              </td>

              <td className="px-6 py-4">
                {order.customer}
              </td>

              <td className="px-6 py-4">
                <OrderStatusBadge
                  status={order.status}
                />
              </td>

              <td className="px-6 py-4">
                {order.payment_status}
              </td>

              <td className="px-6 py-4">
                ${order.total}
              </td>

              <td className="px-6 py-4">
                {new Date(
                  order.created_at
                ).toLocaleDateString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}