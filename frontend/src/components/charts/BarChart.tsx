"use client";

import {
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Bar,
  BarChart as RechartsBarChart,
} from "recharts";

import ChartContainer from "./ChartContainer";
import ChartTooltip from "./DashboardTooltip";
import ChartLegend from "./DashboardLegend";

import { DashboardChartProps } from "./types";

export default function BarChart<T extends Record<string, any>>({
  title,
  subtitle,
  data,
  xKey,
  yKey,
  color = "#16a34a",
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

        <RechartsBarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={String(xKey)} />

          <YAxis />

          <Tooltip content={<ChartTooltip />} />

          <Legend content={<ChartLegend />} />

          <Bar
            dataKey={String(yKey)}
            fill={color}
            radius={[6, 6, 0, 0]}
          />

        </RechartsBarChart>

      </ResponsiveContainer>
    </ChartContainer>
  );
}