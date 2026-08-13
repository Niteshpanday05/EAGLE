interface Props {
  isRead: boolean;
}

export default function NotificationBadge({
  isRead,
}: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        isRead
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {isRead ? "Read" : "Unread"}
    </span>
  );
}