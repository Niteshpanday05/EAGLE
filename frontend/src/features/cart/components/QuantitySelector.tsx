"use client";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  loading?: boolean;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  loading = false,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-3">

      {/* Decrease */}
      <button
        type="button"
        disabled={loading || quantity <= 1}
        onClick={onDecrease}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-lg font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
      >
        −
      </button>

      {/* Quantity */}
      <span className="min-w-[28px] text-center text-base font-semibold text-gray-900">
        {quantity}
      </span>

      {/* Increase */}
      <button
        type="button"
        disabled={loading}
        onClick={onIncrease}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-lg font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
      >
        +
      </button>

    </div>
  );
}