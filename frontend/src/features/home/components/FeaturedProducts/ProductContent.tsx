import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";

import { Product } from "./featured.types";

interface Props {
  product: Product;
}

export default function ProductContent({
  product,
}: Props) {
  return (
    <div className="flex flex-1 flex-col px-5 py-4">
      {/* Brand & Rating */}
      <div className="mb-2 flex items-center justify-between">
        {product.brand && (
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-wide
              text-slate-500
            "
          >
            {product.brand}
          </span>
        )}

        <ProductRating
          rating={product.rating}
          // reviews={product.total_reviews}
        />
      </div>

      {/* Product Name */}
      <h3
        className="
          line-clamp-2
          min-h-[2.8rem]

          text-lg
          font-semibold
          leading-6
          tracking-tight

          text-slate-900
          transition-colors
          duration-300

          group-hover:text-primary
        "
      >
        {product.name}
      </h3>

      {/* Price */}
      <div className="mt-1">
        <ProductPrice
          price={product.price}
          discountPrice={product.discount_price}
        />
      </div>
    </div>
  );
}