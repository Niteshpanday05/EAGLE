import {
  Boxes,
  Package,
  AlertTriangle,
  XCircle,
  DollarSign,
} from "lucide-react";

import StatsCard from "@/features/dashboard/overview/components/StatsCard";

import { InventorySummary as InventorySummaryType } from "../types";

interface Props {
  summary: InventorySummaryType;
}

export default function InventorySummary({
  summary,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

      <StatsCard
        title="Products"
        value={summary.total_products}
        icon={<Package size={20} />}
      />

      <StatsCard
        title="Total Stock"
        value={summary.total_stock}
        icon={<Boxes size={20} />}
      />

      <StatsCard
        title="Low Stock"
        value={summary.low_stock}
        icon={<AlertTriangle size={20} />}
      />

      <StatsCard
        title="Out of Stock"
        value={summary.out_of_stock}
        icon={<XCircle size={20} />}
      />

      <StatsCard
        title="Inventory Value"
        value={`$${summary.inventory_value}`}
        icon={<DollarSign size={20} />}
      />

    </div>
  );
}