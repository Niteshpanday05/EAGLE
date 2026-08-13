"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import ChartCard from "./ChartCard";
import DashboardLegend from "./DashboardLegend";
import DashboardTooltip from "./DashboardTooltip";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#dc2626",
  "#7c3aed",
  "#0ea5e9",
];

interface Props<T> {
  title: string;
  subtitle?: string;

  data: T[];

  nameKey: keyof T;

  valueKey: keyof T;
}

export default function DashboardPieChart<
  T extends Record<string, any>,
>({
  title,
  subtitle,
  data,
  nameKey,
  valueKey,
}: Props<T>) {
  return (
    <ChartCard
      title={title}
      subtitle={subtitle}
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart>

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
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip
            content={<DashboardTooltip />}
          />

          <Legend
            content={<DashboardLegend />}
          />

        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}