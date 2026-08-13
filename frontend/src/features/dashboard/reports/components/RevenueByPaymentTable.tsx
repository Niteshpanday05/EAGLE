import { RevenuePayment } from "../types";

interface Props {
  payments: RevenuePayment[];
}

export default function RevenueByPaymentTable({
  payments,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Revenue by Payment Method
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-5 py-3 text-left">
              Payment Method
            </th>

            <th className="px-5 py-3 text-left">
              Transactions
            </th>

            <th className="px-5 py-3 text-left">
              Revenue
            </th>

          </tr>

        </thead>

        <tbody>

          {payments.length === 0 ? (
            <tr>
              <td
                colSpan={3}
                className="py-8 text-center text-gray-500"
              >
                No payment data available.
              </td>
            </tr>
          ) : (
            payments.map((payment) => (
              <tr
                key={payment.payment_method}
                className="border-t"
              >
                <td className="px-5 py-4 font-medium">
                  {payment.payment_method}
                </td>

                <td className="px-5 py-4">
                  {payment.count}
                </td>

                <td className="px-5 py-4">
                  ${payment.revenue}
                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}