interface ProductErrorProps {
  message?: string;
}

export default function ProductError({
  message = "Unable to load products.",
}: ProductErrorProps) {
  return (
    <div className="rounded-xl border border-red-300 bg-red-50 p-8 text-center">

      <h2 className="text-xl font-semibold text-red-600">
        Something went wrong
      </h2>

      <p className="mt-2 text-gray-700">
        {message}
      </p>

    </div>
  );
}