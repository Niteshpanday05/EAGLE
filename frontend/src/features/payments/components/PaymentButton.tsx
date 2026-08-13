"use client";

interface PaymentButtonProps {
  loading?: boolean;
  onClick: () => void;
}

export default function PaymentButton({
  loading,
  onClick,
}: PaymentButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-900 disabled:opacity-50"
    >
      {loading ? "Processing..." : "Continue to Payment"}
    </button>
  );
}