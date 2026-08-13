interface Props {
  price: number;
  discountPrice?: number | null;
}

export default function ProductPrice({
  price,
  discountPrice,
}: Props) {
  const finalPrice = discountPrice ?? price;

  return (
    <div className="flex items-end gap-3">

      <span
        className="
          text-2xl
          font-bold
          tracking-tight
          text-neutral-900
        "
      >
        ${finalPrice}
      </span>

      {discountPrice && (
        <span
          className="
            pb-0.5
            text-base
            text-neutral-400
            line-through
          "
        >
          ${price}
        </span>
      )}

    </div>
  );
}