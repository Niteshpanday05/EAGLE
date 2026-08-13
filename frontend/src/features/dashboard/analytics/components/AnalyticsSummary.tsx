import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
} from "lucide-react";

import StatsCard from "@/features/dashboard/overview/components/StatsCard";

import { Summary } from "../types";

interface Props {
  summary: Summary;
}

export default function AnalyticsSummary({
  summary,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Revenue"
        value={`$${summary.total_revenue}`}
        icon={<DollarSign size={20} />}
      />

      <StatsCard
        title="Orders"
        value={summary.total_orders}
        icon={<ShoppingCart size={20} />}
      />

      <StatsCard
        title="Customers"
        value={summary.total_customers}
        icon={<Users size={20} />}
      />

      <StatsCard
        title="Average Order"
        value={`$${summary.average_order_value}`}
        icon={<TrendingUp size={20} />}
      />

    </div>
  );
}