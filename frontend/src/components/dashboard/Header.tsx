"use client";

import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-300 py-2 pl-11 pr-4 outline-none focus:border-black"
        />
      </div>

      <div className="flex items-center gap-6">
        <button>
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-2">
          <UserCircle2 size={34} />

          <div>
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}