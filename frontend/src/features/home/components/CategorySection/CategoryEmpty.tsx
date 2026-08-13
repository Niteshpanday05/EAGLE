interface Props {
  title: string;
  description: string;
}

export default function CategoryEmpty({
  title,
  description,
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-gray-300
        py-20
        text-center
      "
    >
      <div className="mb-5 text-6xl">
        📦
      </div>

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-gray-500">
        {description}
      </p>
    </div>
  );
}