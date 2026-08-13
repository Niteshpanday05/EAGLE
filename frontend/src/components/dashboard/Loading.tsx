interface LoadingProps {
  message?: string;
}

export default function Loading({
  message = "Loading...",
}: LoadingProps) {
  return (
    <div className="flex h-[60vh] items-center justify-center">

      <div className="text-center">

        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />

        <p className="mt-4 text-gray-500">
          {message}
        </p>

      </div>

    </div>
  );
}