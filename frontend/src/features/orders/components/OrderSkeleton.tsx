"use client";

export default function OrderSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border bg-white p-6 shadow-sm">
      <div className="h-5 w-40 rounded bg-gray-200" />

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="h-12 rounded bg-gray-200" />
        <div className="h-12 rounded bg-gray-200" />
        <div className="h-12 rounded bg-gray-200" />
        <div className="h-12 rounded bg-gray-200" />
      </div>

      <div className="mt-6 h-10 rounded bg-gray-200" />
    </div>
  );
}