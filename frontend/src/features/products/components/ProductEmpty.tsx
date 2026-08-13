interface ProductEmptyProps {
  message?: string;
}

export default function ProductEmpty({
  message = "No products found.",
}: ProductEmptyProps) {
  return (
    <div className="rounded-xl border border-dashed py-20 text-center">

      <h2 className="text-2xl font-semibold">
        {message}
      </h2>

      <p className="mt-3 text-gray-500">
        Try another search or filter.
      </p>

    </div>
  );
}