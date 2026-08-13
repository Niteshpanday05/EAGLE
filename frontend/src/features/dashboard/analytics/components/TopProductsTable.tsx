import { TopProduct } from "../types";

interface Props {
  products: TopProduct[];
}

export default function TopProductsTable({
  products,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Top Selling Products
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-5 py-3 text-left">
              Product
            </th>

            <th className="px-5 py-3 text-left">
              Quantity Sold
            </th>
          </tr>
        </thead>

        <tbody>

          {products.length === 0 ? (
            <tr>
              <td
                colSpan={2}
                className="py-8 text-center text-gray-500"
              >
                No products found.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr
                key={product.product__name}
                className="border-t"
              >
                <td className="px-5 py-4">
                  {product.product__name}
                </td>

                <td className="px-5 py-4">
                  {product.quantity}
                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}