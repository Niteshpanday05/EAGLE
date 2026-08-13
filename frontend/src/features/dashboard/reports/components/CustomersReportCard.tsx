import {
  Users,
  UserPlus,
} from "lucide-react";

import StatsCard from "@/features/dashboard/overview/components/StatsCard";

import { CustomerReport } from "../types";

interface Props {
  report: CustomerReport;
}

export default function CustomersReportCard({
  report,
}: Props) {
  return (
    <div className="space-y-6">

      <StatsCard
        title="Customers"
        value={report.total_customers}
        icon={<Users size={20} />}
      />

      <StatsCard
        title="Registered This Year"
        value={report.registered_this_year}
        icon={<UserPlus size={20} />}
      />

    </div>
  );
}