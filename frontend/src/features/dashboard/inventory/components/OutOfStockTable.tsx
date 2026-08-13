import { OutOfStockProduct } from "../types";

interface Props {
  products: OutOfStockProduct[];
}

export default function OutOfStockTable({
  products,
}: Props) {
  return (
    <div className="rounded-xl border bg-white">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Out of Stock
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-3 text-left">
              Product
            </th>

            <th className="px-5 py-3 text-left">
              Brand
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

              <td className="px-5 py-4">
                {product.brand}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}