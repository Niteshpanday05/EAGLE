interface Props {
  title: string;
  description: string;
}

export default function ProductEmpty({
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
        rounded-3xl
        bg-gray-50
        px-6
        py-16
        text-center
      "
    >
      <h3
        className="
          text-2xl
          font-semibold
          text-gray-900
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          max-w-md
          text-gray-600
        "
      >
        {description}
      </p>
    </div>
  );
}