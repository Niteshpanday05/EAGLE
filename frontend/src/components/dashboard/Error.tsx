interface ErrorProps {
  message?: string;
}

export default function Error({
  message = "Something went wrong.",
}: ErrorProps) {
  return (
    <div className="flex h-[60vh] items-center justify-center">

      <div className="text-center">

        <h2 className="text-xl font-semibold text-red-600">
          Error
        </h2>

        <p className="mt-2 text-gray-500">
          {message}
        </p>

      </div>

    </div>
  );
}