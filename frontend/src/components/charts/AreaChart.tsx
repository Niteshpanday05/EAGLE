"use client";

import {
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  AreaChart as RechartsAreaChart,
} from "recharts";

import ChartContainer from "./ChartContainer";
import ChartTooltip from "./DashboardTooltip";
import ChartLegend from "./DashboardLegend";

import { DashboardChartProps } from "./types";

export default function AreaChart<T extends Record<string, any>>({
  title,
  subtitle,
  data,
  xKey,
  yKey,
  color = "#7c3aed",
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

        <RechartsAreaChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={String(xKey)} />

          <YAxis />

          <Tooltip content={<ChartTooltip />} />

          <Legend content={<ChartLegend />} />

          <Area
            type="monotone"
            dataKey={String(yKey)}
            stroke={color}
            fill={color}
            fillOpacity={0.25}
          />

        </RechartsAreaChart>

      </ResponsiveContainer>
    </ChartContainer>
  );
}