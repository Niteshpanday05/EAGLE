interface Props {
  name: string;
  productCount: number;
}

export default function CategoryContent({
  name,
  productCount,
}: Props) {
  return (
    <div className="space-y-1 p-5">

      <h3
        className="
          line-clamp-1
          text-lg
          font-semibold
          text-gray-900
        "
      >
        {name}
      </h3>

      <p
        className="
          text-sm
          text-gray-500
        "
      >
        {productCount} Products
      </p>

    </div>
  );
}