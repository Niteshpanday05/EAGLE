import { ActivityLog } from "../types";

interface Props {
  activities: ActivityLog[];
}

export default function RecentActivityTable({
  activities,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">

      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">
          Recent Activity
        </h2>
      </div>

      <table className="min-w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-5 py-3 text-left">
              User
            </th>

            <th className="px-5 py-3 text-left">
              Action
            </th>

            <th className="px-5 py-3 text-left">
              Model
            </th>

            <th className="px-5 py-3 text-left">
              Description
            </th>

            <th className="px-5 py-3 text-left">
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {activities.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="py-8 text-center text-gray-500"
              >
                No recent activity found.
              </td>
            </tr>
          ) : (
            activities.map((activity) => (
              <tr
                key={activity.id}
                className="border-t"
              >
                <td className="px-5 py-4">
                  {activity.user}
                </td>

                <td className="px-5 py-4">
                  {activity.action}
                </td>

                <td className="px-5 py-4">
                  {activity.model}
                </td>

                <td className="px-5 py-4">
                  {activity.description}
                </td>

                <td className="px-5 py-4">
                  {new Date(
                    activity.created_at
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