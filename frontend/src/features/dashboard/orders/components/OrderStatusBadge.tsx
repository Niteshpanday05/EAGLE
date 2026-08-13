interface Props {
  status: string;
}

const colors: Record<string, string> = {
  pending:
    "bg-yellow-100 text-yellow-700",

  processing:
    "bg-blue-100 text-blue-700",

  shipped:
    "bg-indigo-100 text-indigo-700",

  delivered:
    "bg-green-100 text-green-700",

  cancelled:
    "bg-red-100 text-red-700",
};

export default function OrderStatusBadge({
  status,
}: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        colors[status] ??
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}