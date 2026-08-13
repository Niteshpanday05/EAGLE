import { RecentPayment } from "../types";

import PaymentStatusBadge from "./PaymentStatusBadge";

interface Props {
  payments: RecentPayment[];
}

export default function RecentPaymentsTable({
  payments,
}: Props) {
  return (
    <div className="rounded-xl border bg-white">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Recent Payments
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-3 text-left">
              Reference
            </th>

            <th className="px-5 py-3 text-left">
              Order
            </th>

            <th className="px-5 py-3 text-left">
              Method
            </th>

            <th className="px-5 py-3 text-left">
              Status
            </th>

            <th className="px-5 py-3 text-left">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>

          {payments.map((payment) => (
            <tr
              key={payment.reference}
              className="border-t"
            >
              <td className="px-5 py-4">
                {payment.reference}
              </td>

              <td className="px-5 py-4">
                {payment.order}
              </td>

              <td className="px-5 py-4">
                {payment.method}
              </td>

              <td className="px-5 py-4">
                <PaymentStatusBadge
                  status={payment.status}
                />
              </td>

              <td className="px-5 py-4">
                {payment.amount} {payment.currency}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}