interface EmptyProps {
  title?: string;
  description?: string;
}

export default function Empty({
  title = "No data found",
  description = "There is nothing to display.",
}: EmptyProps) {
  return (
    <div className="rounded-xl border border-dashed p-12 text-center">

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>

    </div>
  );
}