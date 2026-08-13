"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

interface WishlistButtonProps {
  productId: string;
}

export default function WishlistButton({
  productId,
}: WishlistButtonProps) {
  const [liked, setLiked] =
    useState(false);

  const handleClick = () => {
    setLiked(!liked);

    // TODO:
    // Connect Wishlist API later

    console.log(productId);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full border bg-white p-2 shadow transition hover:bg-gray-100"
    >
      <Heart
        size={20}
        className={
          liked
            ? "fill-red-500 text-red-500"
            : "text-gray-600"
        }
      />
    </button>
  );
}