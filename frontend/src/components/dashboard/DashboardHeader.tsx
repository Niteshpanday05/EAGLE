"use client";

export default function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">

      <h1 className="text-lg font-semibold">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-4">

        <button className="rounded-lg border px-4 py-2">
          Notifications
        </button>

        <button className="rounded-full bg-gray-200 px-4 py-2">
          Admin
        </button>

      </div>

    </header>
  );
}