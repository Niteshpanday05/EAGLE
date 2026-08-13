import { RecentProduct } from "../types";

interface Props {
  products: RecentProduct[];
}

export default function RecentProductsTable({
  products,
}: Props) {
  return (
    <div className="rounded-xl border bg-white">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Recently Added Products
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

            <th className="px-5 py-3 text-left">
              Price
            </th>

            <th className="px-5 py-3 text-left">
              Stock
            </th>

            <th className="px-5 py-3 text-left">
              Rating
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

              <td className="px-5 py-4">
                ${product.price}
              </td>

              <td className="px-5 py-4">
                {product.stock}
              </td>

              <td className="px-5 py-4">
                ⭐ {product.rating}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}