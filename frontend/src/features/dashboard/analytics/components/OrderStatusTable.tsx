import { OrderStatus } from "../types";

interface Props {
  statuses: OrderStatus[];
}

export default function OrderStatusTable({
  statuses,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Orders by Status
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-5 py-3 text-left">
              Status
            </th>

            <th className="px-5 py-3 text-left">
              Orders
            </th>

          </tr>

        </thead>

        <tbody>

          {statuses.length === 0 ? (
            <tr>
              <td
                colSpan={2}
                className="py-8 text-center text-gray-500"
              >
                No order status data available.
              </td>
            </tr>
          ) : (
            statuses.map((status) => (
              <tr
                key={status.status}
                className="border-t"
              >
                <td className="px-5 py-4">
                  {status.status}
                </td>

                <td className="px-5 py-4">
                  {status.total}
                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}