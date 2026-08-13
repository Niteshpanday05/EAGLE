"use client";

import { TooltipProps } from "recharts";

interface ChartTooltipProps
  extends TooltipProps<number, string> {
  valueFormatter?: (value: number) => string;
  labelFormatter?: (label: string | number) => string;
}

export default function ChartTooltip({
  active,
  payload,
  label,
  valueFormatter,
  labelFormatter,
}: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="min-w-[180px] rounded-xl border border-gray-200 bg-white p-4 shadow-lg">

      <div className="mb-3 border-b pb-2">

        <p className="text-sm font-semibold text-gray-900">
          {labelFormatter
            ? labelFormatter(label as string)
            : label}
        </p>

      </div>

      <div className="space-y-2">

        {payload.map((item) => (

          <div
            key={`${item.dataKey}`}
            className="flex items-center justify-between gap-8"
          >

            <div className="flex items-center gap-2">

              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="text-sm text-gray-600">
                {item.name}
              </span>

            </div>

            <span className="text-sm font-semibold text-gray-900">

              {valueFormatter
                ? valueFormatter(Number(item.value))
                : Number(item.value).toLocaleString()}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}