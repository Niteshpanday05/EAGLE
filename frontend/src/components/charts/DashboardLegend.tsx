"use client";

import { LegendProps } from "recharts";

interface Props extends LegendProps {}

export default function ChartLegend({
  payload,
}: Props) {
  if (!payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-6">

      {payload.map((entry) => (

        <div
          key={`${entry.value}`}
          className="flex items-center gap-2"
        >

          <span
            className="h-3 w-3 rounded-full"
            style={{
              backgroundColor: entry.color,
            }}
          />

          <span className="text-sm font-medium text-gray-700">
            {entry.value}
          </span>

        </div>

      ))}

    </div>
  );
}