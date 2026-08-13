import { RecentCustomer } from "../types";

interface Props {
  customers: RecentCustomer[];
}

export default function RecentCustomersTable({
  customers,
}: Props) {
  return (
    <div className="rounded-xl border bg-white">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Recent Customers
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-3 text-left">
              Name
            </th>

            <th className="px-5 py-3 text-left">
              Email
            </th>

            <th className="px-5 py-3 text-left">
              Joined
            </th>
          </tr>
        </thead>

        <tbody>

          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-t"
            >
              <td className="px-5 py-4">
                {customer.name}
              </td>

              <td className="px-5 py-4">
                {customer.email}
              </td>

              <td className="px-5 py-4">
                {new Date(
                  customer.joined_at
                ).toLocaleDateString()}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}