"use client";

import { useDashboardActivity } from "../hooks";

import RecentActivityTable from "./RecentActivityTable";

export default function ActivityPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboardActivity();

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        Loading activity...
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-red-500">
        Failed to load activity.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Activity Logs
        </h1>

        <p className="mt-2 text-gray-500">
          Recent administrator and system activities.
        </p>
      </div>

      <RecentActivityTable
        activities={data.recent_activity}
      />

    </div>
  );
}