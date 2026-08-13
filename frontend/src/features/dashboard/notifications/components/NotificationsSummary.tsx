import {
  Bell,
  BellRing,
} from "lucide-react";

import StatsCard from "@/features/dashboard/overview/components/StatsCard";

interface Props {
  total: number;
  unread: number;
}

export default function NotificationsSummary({
  total,
  unread,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">

      <StatsCard
        title="Total Notifications"
        value={total}
        icon={<Bell size={20} />}
      />

      <StatsCard
        title="Unread Notifications"
        value={unread}
        icon={<BellRing size={20} />}
      />

    </div>
  );
}