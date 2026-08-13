import {
  ShoppingBag,
  CheckCircle,
  XCircle,
} from "lucide-react";

import StatsCard from "@/features/dashboard/overview/components/StatsCard";

import { OrderReport } from "../types";

interface Props {
  report: OrderReport;
}

export default function OrdersReportCard({
  report,
}: Props) {
  return (
    <div className="space-y-6">

      <StatsCard
        title="Total Orders"
        value={report.total_orders}
        icon={<ShoppingBag size={20} />}
      />

      <StatsCard
        title="Completed"
        value={report.completed_orders}
        icon={<CheckCircle size={20} />}
      />

      <StatsCard
        title="Cancelled"
        value={report.cancelled_orders}
        icon={<XCircle size={20} />}
      />

    </div>
  );
}