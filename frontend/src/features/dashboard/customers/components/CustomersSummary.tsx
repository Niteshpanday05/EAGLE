import {
  Users,
  UserPlus,
  Calendar,
} from "lucide-react";

import StatsCard from "@/features/dashboard/overview/components/StatsCard";

import { CustomerSummary } from "../types";

interface Props {
  summary: CustomerSummary;
}

export default function CustomersSummary({
  summary,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      <StatsCard
        title="Total Customers"
        value={summary.total_customers}
        icon={<Users size={20} />}
      />

      <StatsCard
        title="New Today"
        value={summary.new_today}
        icon={<UserPlus size={20} />}
      />

      <StatsCard
        title="New This Month"
        value={summary.new_this_month}
        icon={<Calendar size={20} />}
      />

    </div>
  );
}