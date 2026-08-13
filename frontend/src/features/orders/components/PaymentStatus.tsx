"use client";

interface PaymentStatusProps {
  status: string;
}

const styles: Record<
  string,
  {
    label: string;
    className: string;
  }
> = {
  PENDING: {
    label: "Pending",
    className:
      "bg-yellow-100 text-yellow-800 border-yellow-200",
  },

  PAID: {
    label: "Paid",
    className:
      "bg-green-100 text-green-700 border-green-200",
  },

  FAILED: {
    label: "Failed",
    className:
      "bg-red-100 text-red-700 border-red-200",
  },

  REFUNDED: {
    label: "Refunded",
    className:
      "bg-purple-100 text-purple-700 border-purple-200",
  },
};

export default function PaymentStatus({
  status,
}: PaymentStatusProps) {
  const item =
    styles[status] ?? {
      label: status,
      className:
        "bg-gray-100 text-gray-700 border-gray-200",
    };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${item.className}`}
    >
      {item.label}
    </span>
  );
}