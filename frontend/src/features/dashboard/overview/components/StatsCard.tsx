"use client";

import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-gray-500">
              {subtitle}
            </p>
          )}
        </div>

        <div className="rounded-xl bg-black p-3 text-white">
          {icon}
        </div>
      </div>
    </div>
  );
}