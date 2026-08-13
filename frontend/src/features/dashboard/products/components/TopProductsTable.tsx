import { TopProduct } from "../types";

interface Props {
  products: TopProduct[];
}

export default function TopProductsTable({
  products,
}: Props) {
  return (
    <div className="rounded-xl border bg-white">

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
              Sold
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product.product__id}
              className="border-t"
            >

              <td className="px-5 py-4">
                {product.product__name}
              </td>

              <td className="px-5 py-4">
                {product.total_sold}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}