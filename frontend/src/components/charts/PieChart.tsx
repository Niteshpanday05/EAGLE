"use client";

import {
  Cell,
  Legend,
  Pie,
  ResponsiveContainer,
  Tooltip,
  PieChart as RechartsPieChart,
} from "recharts";

import ChartContainer from "./ChartContainer";
import ChartTooltip from "./DashboardTooltip";
import ChartLegend from "./DashboardLegend";

import { PIE_COLORS } from "./ChartConfig";

interface Props<T> {
  title: string;
  subtitle?: string;
  data: T[];
  nameKey: keyof T;
  valueKey: keyof T;
  loading?: boolean;
}

export default function PieChart<T extends Record<string, any>>({
  title,
  subtitle,
  data,
  nameKey,
  valueKey,
  loading = false,
}: Props<T>) {
  return (
    <ChartContainer
      title={title}
      subtitle={subtitle}
      loading={loading}
      hasData={data.length > 0}
    >
      <ResponsiveContainer width="100%" height="100%">

        <RechartsPieChart>

          <Pie
            data={data}
            dataKey={String(valueKey)}
            nameKey={String(nameKey)}
            outerRadius={120}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={PIE_COLORS[index % PIE_COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip content={<ChartTooltip />} />

          <Legend content={<ChartLegend />} />

        </RechartsPieChart>

      </ResponsiveContainer>
    </ChartContainer>
  );
}