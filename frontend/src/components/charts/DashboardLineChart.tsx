"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
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

export default function DashboardLineChart<
  T extends ChartData,
>({
  title,
  subtitle,
  data,
  xKey,
  yKey,
  color = "#2563eb",
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
        <LineChart
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

          <Line
            type="monotone"
            dataKey={String(yKey)}
            stroke={color}
            strokeWidth={3}
            dot={{
              r: 4,
            }}
            activeDot={{
              r: 7,
            }}
          />

        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}