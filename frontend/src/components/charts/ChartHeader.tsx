"use client";

import Button from "@/components/ui/Button";

interface Props {
  title: string;
  subtitle?: string;

  onRefresh?: () => void;

  onExport?: () => void;

  actions?: React.ReactNode;
}

export default function ChartHeader({
  title,
  subtitle,
  onRefresh,
  onExport,
  actions,
}: Props) {
  return (
    <div className="mb-6 flex items-start justify-between">

      <div>

        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-gray-500">
            {subtitle}
          </p>
        )}

      </div>

      <div className="flex items-center gap-3">

        {actions}

        {onRefresh && (
          <Button
            variant="secondary"
            onClick={onRefresh}
          >
            Refresh
          </Button>
        )}

        {onExport && (
          <Button
            onClick={onExport}
          >
            Export
          </Button>
        )}

      </div>

    </div>
  );
}