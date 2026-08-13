"use client";

import { MessageSquare } from "lucide-react";

interface OrderNotesProps {
  value: string;
  onChange: (value: string) => void;
}

export default function OrderNotes({
  value,
  onChange,
}: OrderNotesProps) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white">
      <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
          <MessageSquare className="h-4 w-4 text-gray-600" />
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Order Notes
          </h2>

          <p className="text-xs text-gray-500">
            Optional delivery instructions
          </p>
        </div>
      </div>

      <div className="p-5">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          placeholder="Example: Leave at the front door or call before delivery."
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-black focus:bg-white focus:outline-none transition"
        />
      </div>
    </section>
  );
}