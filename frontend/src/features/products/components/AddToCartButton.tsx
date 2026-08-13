"use client";

import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

import { useAddToCart } from "@/features/cart/hooks/useCart";

interface AddToCartButtonProps {
  productId: string;
  quantity?: number;
  disabled?: boolean;
}

export default function AddToCartButton({
  productId,
  quantity = 1,
  disabled = false,
}: AddToCartButtonProps) {
  const addToCart = useAddToCart();

  const handleClick = () => {
    addToCart.mutate(
      {
        product_id: productId,
        quantity,
      },
      {
        onSuccess: () => {
          toast.success("Product added to cart.");
        },
        onError: (error: any) => {
          const message =
            error?.response?.data?.detail ||
            error?.response?.data?.message ||
            "Failed to add product to cart.";

          toast.error(message);
        },
      }
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || addToCart.isPending}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <ShoppingCart size={18} />

      {addToCart.isPending ? "Adding..." : "Add to Cart"}
    </button>
  );
}