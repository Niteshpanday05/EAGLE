"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart as RechartsLineChart,
} from "recharts";

import ChartContainer from "./ChartContainer";
import ChartTooltip from "./DashboardTooltip";
import ChartLegend from "./DashboardLegend";

import { DashboardChartProps } from "./types";

export default function LineChart<T extends Record<string, any>>({
  title,
  subtitle,
  data,
  xKey,
  yKey,
  color = "#2563eb",
  loading = false,
}: DashboardChartProps<T>) {
  return (
    <ChartContainer
      title={title}
      subtitle={subtitle}
      loading={loading}
      hasData={data.length > 0}
    >
      <ResponsiveContainer width="100%" height="100%">

        <RechartsLineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={String(xKey)} />

          <YAxis />

          <Tooltip content={<ChartTooltip />} />

          <Legend content={<ChartLegend />} />

          <Line
            type="monotone"
            dataKey={String(yKey)}
            stroke={color}
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

        </RechartsLineChart>

      </ResponsiveContainer>
    </ChartContainer>
  );
}