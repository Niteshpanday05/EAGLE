"use client";

interface OrderStatusProps {
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

  PROCESSING: {
    label: "Processing",
    className:
      "bg-blue-100 text-blue-800 border-blue-200",
  },

  SHIPPED: {
    label: "Shipped",
    className:
      "bg-purple-100 text-purple-800 border-purple-200",
  },

  DELIVERED: {
    label: "Delivered",
    className:
      "bg-green-100 text-green-800 border-green-200",
  },

  CANCELLED: {
    label: "Cancelled",
    className:
      "bg-red-100 text-red-700 border-red-200",
  },
};

export default function OrderStatus({
  status,
}: OrderStatusProps) {
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