"use client";

import { Trash2 } from "lucide-react";

interface RemoveCartButtonProps {
  onRemove: () => void;
  loading?: boolean;
}

export default function RemoveCartButton({
  onRemove,
  loading = false,
}: RemoveCartButtonProps) {
  return (
    <button
      type="button"
      onClick={onRemove}
      disabled={loading}
      aria-label="Remove item"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
      ) : (
        <Trash2 size={18} strokeWidth={2} />
      )}
    </button>
  );
}