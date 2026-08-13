import ProductCard from "./ProductCard";
import { FeaturedProductsProps } from "./featured.types";

interface Props {
  products: FeaturedProductsProps["products"];
}

export default function ProductGrid({
  products,
}: Props) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        sm:grid-cols-2
        sm:gap-7

        lg:grid-cols-3
        lg:gap-8

        xl:grid-cols-4
      "
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="h-full"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}