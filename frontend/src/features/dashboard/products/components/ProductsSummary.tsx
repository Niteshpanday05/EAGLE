
import {
  Package,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
} from "lucide-react";

import StatsCard from "@/features/dashboard/overview/components/StatsCard";

import { ProductSummary } from "../types";

interface Props {
  summary: ProductSummary;
}

export default function ProductsSummary({
  summary,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <StatsCard
        title="Total Products"
        value={summary.total_products}
        icon={<Package size={20} />}
      />

      <StatsCard
        title="Active"
        value={summary.active_products}
        icon={<CheckCircle size={20} />}
      />

      <StatsCard
        title="Inactive"
        value={summary.inactive_products}
        icon={<XCircle size={20} />}
      />

      <StatsCard
        title="Out of Stock"
        value={summary.out_of_stock}
        icon={<AlertTriangle size={20} />}
      />

      <StatsCard
        title="Low Stock"
        value={summary.low_stock}
        icon={<AlertTriangle size={20} />}
      />

      <StatsCard
        title="Average Rating"
        value={summary.average_rating}
        icon={<Star size={20} />}
      />

    </div>
  );
}