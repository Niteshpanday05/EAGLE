export default function EmptyAddress() {
  return (
    <div className="rounded-lg border border-dashed p-10 text-center">
      <h2 className="text-lg font-semibold">
        No addresses found
      </h2>

      <p className="mt-2 text-gray-500">
        Add your first shipping address.
      </p>
    </div>
  );
}