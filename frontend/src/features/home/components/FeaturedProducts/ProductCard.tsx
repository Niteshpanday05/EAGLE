import Link from "next/link";

import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";
import ProductActions from "./ProductActions";

import type { Product } from "./featured.types";

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/70
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-slate-300
        hover:shadow-2xl
      "
    >
      {/* Clickable Product */}
      <Link
        href={`/products/${product.slug}`}
        className="flex flex-1 flex-col"
      >
        <ProductImage product={product} />

        <ProductContent product={product} />
      </Link>

      {/* Footer */}
      <div
        className="
          border-t
          border-slate-100
          bg-slate-50/60
          p-5
          backdrop-blur-sm
        "
      >
        <ProductActions product={product} />
      </div>
    </article>
  );
}