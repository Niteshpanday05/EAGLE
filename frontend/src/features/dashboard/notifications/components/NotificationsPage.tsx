"use client";

import { useDashboardNotifications } from "../hooks";

import NotificationsSummary from "./NotificationsSummary";
import NotificationsTable from "./NotificationsTable";

export default function NotificationsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboardNotifications();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Loading notifications...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-red-500">
        Failed to load notifications.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Notifications
        </h1>

        <p className="mt-2 text-gray-500">
          View and monitor system notifications.
        </p>
      </div>

      <NotificationsSummary
        total={data.total}
        unread={data.unread}
      />

      <NotificationsTable
        notifications={data.recent}
      />

    </div>
  );
}