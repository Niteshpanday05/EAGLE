"use client";

interface QuantitySelectorProps {
  quantity: number;
  max: number;
  onChange: (value: number) => void;
}

export default function QuantitySelector({
  quantity,
  max,
  onChange,
}: QuantitySelectorProps) {
  return (
    <div className="flex w-fit items-center rounded-lg border">

      <button
        onClick={() =>
          onChange(
            Math.max(1, quantity - 1)
          )
        }
        className="px-4 py-2"
      >
        -
      </button>

      <span className="min-w-12 text-center">
        {quantity}
      </span>

      <button
        onClick={() =>
          onChange(
            Math.min(max, quantity + 1)
          )
        }
        className="px-4 py-2"
      >
        +
      </button>

    </div>
  );
}