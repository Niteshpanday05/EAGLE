import { CustomerGrowth } from "../types";

interface Props {
  growth: CustomerGrowth[];
}

export default function CustomerGrowthTable({
  growth,
}: Props) {
  return (
    <div className="rounded-xl border bg-white">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Customer Growth
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-3 text-left">
              Date
            </th>

            <th className="px-5 py-3 text-left">
              New Customers
            </th>
          </tr>
        </thead>

        <tbody>

          {growth.map((item) => (
            <tr
              key={item.date}
              className="border-t"
            >
              <td className="px-5 py-4">
                {item.date}
              </td>

              <td className="px-5 py-4">
                {item.total}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}