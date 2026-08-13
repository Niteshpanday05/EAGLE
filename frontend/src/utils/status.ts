export function getStatusColor(
  status: string,
) {
  switch (status.toLowerCase()) {
    case "pending":
      return "bg-yellow-100 text-yellow-700";

    case "processing":
      return "bg-blue-100 text-blue-700";

    case "shipped":
      return "bg-indigo-100 text-indigo-700";

    case "delivered":
    case "success":
      return "bg-green-100 text-green-700";

    case "cancelled":
    case "failed":
      return "bg-red-100 text-red-700";

    case "refunded":
      return "bg-purple-100 text-purple-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
}