"use client";

interface PlaceOrderButtonProps {
  loading: boolean;
  onClick: () => void;
}

export default function PlaceOrderButton({
  loading,
  onClick,
}: PlaceOrderButtonProps) {
  return (
    <button
      type="button"
      disabled={loading}
      onClick={onClick}
      className="w-full rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-4 text-base font-semibold text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading
        ? "Placing Order..."
        : "Place Order"}
    </button>
  );
}