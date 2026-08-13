"use client";

import CartSummary from "../components/CartSummary";

import { Cart } from "../types/cart.types";

interface CartSidebarProps {
  cart: Cart;
}

export default function CartSidebar({
  cart,
}: CartSidebarProps) {
  return (
    <CartSummary
      subtotal={cart.subtotal}
      shipping={cart.shipping}
      tax={cart.tax}
      total={cart.total}
    />
  );
}