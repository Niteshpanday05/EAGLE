import { DailySales } from "../types";

interface Props {
  sales: DailySales[];
}

export default function DailySalesTable({
  sales,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Daily Sales
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-3 text-left">
              Date
            </th>

            <th className="px-5 py-3 text-left">
              Revenue
            </th>
          </tr>
        </thead>

        <tbody>

          {sales.length === 0 ? (
            <tr>
              <td
                colSpan={2}
                className="py-8 text-center text-gray-500"
              >
                No sales data available.
              </td>
            </tr>
          ) : (
            sales.map((sale) => (
              <tr
                key={sale.day}
                className="border-t"
              >
                <td className="px-5 py-4">
                  {sale.day}
                </td>

                <td className="px-5 py-4">
                  ${sale.revenue}
                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}