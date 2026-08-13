"use client";

import {
  Area,
  AreaChart,
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

export default function DashboardAreaChart<
  T extends ChartData,
>({
  title,
  subtitle,
  data,
  xKey,
  yKey,
  color = "#7c3aed",
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
        <AreaChart
          data={data}
        >
          <CartesianGrid
            strokeDasharray="3 3"
          />

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

          <Area
            type="monotone"
            dataKey={String(yKey)}
            stroke={color}
            fill={color}
            fillOpacity={0.25}
          />

        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}