"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartCard from "./ChartCard";
import DashboardLegend from "./DashboardLegend";
import DashboardTooltip from "./DashboardTooltip";

import {
  ChartData,
  DashboardChartProps,
} from "./types";

export default function DashboardBarChart<
  T extends ChartData,
>({
  title,
  subtitle,
  data,
  xKey,
  yKey,
  color = "#16a34a",
}: DashboardChartProps<T>) {
  return (
    <ChartCard
      title={title}
      subtitle={subtitle}
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey={String(xKey)}
          />

          <YAxis />

          <Tooltip
            content={<DashboardTooltip />}
          />

          <Legend
            content={<DashboardLegend />}
          />

          <Bar
            dataKey={String(yKey)}
            fill={color}
            radius={[6, 6, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}