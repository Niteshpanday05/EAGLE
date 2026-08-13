import { HighestStockProduct } from "../types";

interface Props {
  products: HighestStockProduct[];
}

export default function HighestStockTable({
  products,
}: Props) {
  return (
    <div className="rounded-xl border bg-white">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Highest Stock
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-3 text-left">
              Product
            </th>

            <th className="px-5 py-3 text-left">
              Stock
            </th>
          </tr>
        </thead>

        <tbody>

          {products.map((product) => (
            <tr
              key={product.id}
              className="border-t"
            >
              <td className="px-5 py-4">
                {product.name}
              </td>

              <td className="px-5 py-4 font-semibold text-green-600">
                {product.stock}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}