import {
  CreditCard,
  CheckCircle,
  Clock,
  XCircle,
  RotateCcw,
  DollarSign,
} from "lucide-react";

import StatsCard from "@/features/dashboard/overview/components/StatsCard";

import { PaymentSummary } from "../types";

interface Props {
  summary: PaymentSummary;
}

export default function PaymentsSummary({
  summary,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <StatsCard
        title="Total Payments"
        value={summary.total_payments}
        icon={<CreditCard size={20} />}
      />

      <StatsCard
        title="Successful"
        value={summary.successful_payments}
        icon={<CheckCircle size={20} />}
      />

      <StatsCard
        title="Pending"
        value={summary.pending_payments}
        icon={<Clock size={20} />}
      />

      <StatsCard
        title="Failed"
        value={summary.failed_payments}
        icon={<XCircle size={20} />}
      />

      <StatsCard
        title="Refunded"
        value={summary.refunded_payments}
        icon={<RotateCcw size={20} />}
      />

      <StatsCard
        title="Revenue"
        value={`$${summary.revenue}`}
        icon={<DollarSign size={20} />}
      />

    </div>
  );
}