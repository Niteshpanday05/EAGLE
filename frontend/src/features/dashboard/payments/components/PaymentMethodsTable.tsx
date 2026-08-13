import { PaymentMethod } from "../types";

interface Props {
  methods: PaymentMethod[];
}

export default function PaymentMethodsTable({
  methods,
}: Props) {
  return (
    <div className="rounded-xl border bg-white">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Payment Methods
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-3 text-left">
              Method
            </th>

            <th className="px-5 py-3 text-left">
              Payments
            </th>

            <th className="px-5 py-3 text-left">
              Revenue
            </th>
          </tr>
        </thead>

        <tbody>

          {methods.map((method) => (
            <tr
              key={method.payment_method}
              className="border-t"
            >
              <td className="px-5 py-4">
                {method.payment_method}
              </td>

              <td className="px-5 py-4">
                {method.count}
              </td>

              <td className="px-5 py-4">
                ${method.revenue}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}