import { DollarSign, Receipt } from "lucide-react";

import StatsCard from "@/features/dashboard/overview/components/StatsCard";

import { SalesReport } from "../types";

interface Props {
  report: SalesReport;
}

export default function SalesReportCard({
  report,
}: Props) {
  return (
    <div className="space-y-6">

      <StatsCard
        title="Revenue"
        value={`$${report.total_revenue}`}
        icon={<DollarSign size={20} />}
      />

      <StatsCard
        title="Transactions"
        value={report.total_transactions}
        icon={<Receipt size={20} />}
      />

    </div>
  );
}