interface Props {
  status: string;
}

const colors: Record<string, string> = {
  success: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  failed: "bg-red-100 text-red-700",
  refunded: "bg-purple-100 text-purple-700",
  processing: "bg-blue-100 text-blue-700",
};

export default function PaymentStatusBadge({
  status,
}: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        colors[status.toLowerCase()] ??
        "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}