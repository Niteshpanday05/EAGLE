import { NotificationItem } from "../types";

import NotificationBadge from "./NotificationBadge";

interface Props {
  notifications: NotificationItem[];
}

export default function NotificationsTable({
  notifications,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Recent Notifications
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-5 py-3 text-left">
              Title
            </th>

            <th className="px-5 py-3 text-left">
              Type
            </th>

            <th className="px-5 py-3 text-left">
              Message
            </th>

            <th className="px-5 py-3 text-left">
              Status
            </th>

            <th className="px-5 py-3 text-left">
              Created
            </th>

          </tr>

        </thead>

        <tbody>

          {notifications.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="py-8 text-center text-gray-500"
              >
                No notifications available.
              </td>
            </tr>
          ) : (
            notifications.map((notification) => (
              <tr
                key={notification.id}
                className="border-t"
              >
                <td className="px-5 py-4 font-medium">
                  {notification.title}
                </td>

                <td className="px-5 py-4">
                  {notification.type}
                </td>

                <td className="px-5 py-4">
                  {notification.message}
                </td>

                <td className="px-5 py-4">
                  <NotificationBadge
                    isRead={notification.is_read}
                  />
                </td>

                <td className="px-5 py-4">
                  {new Date(
                    notification.created_at
                  ).toLocaleString()}
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}