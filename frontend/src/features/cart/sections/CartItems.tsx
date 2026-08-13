"use client";

import CartItem from "../components/CartItem";
import CartActions from "../components/CartActions";

import {
  useClearCart,
  useRemoveCartItem,
  useUpdateCartItem,
} from "../hooks/useCart";
import {
  Cart,
  CartItem as CartItemType,
} from "../types/cart.types";



interface CartItemsProps {
  cart: Cart;
}

export default function CartItems({
  cart,
}: CartItemsProps) {
  const updateMutation = useUpdateCartItem();
  const removeMutation = useRemoveCartItem();
  const clearMutation = useClearCart();

  const handleIncrease = (item: any) => {
    updateMutation.mutate({
      itemId: item.id,
      data: {
        quantity: item.quantity + 1,
      },
    });
  };

  const handleDecrease = (item: CartItemType) => {
    if (item.quantity <= 1) return;

    updateMutation.mutate({
      itemId: item.id,
      data: {
        quantity: item.quantity - 1,
      },
    });
  };

  const handleRemove = (item: any) => {
    removeMutation.mutate(item.id);
  };

  return (
    <div className="space-y-6">
      {cart.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updating={updateMutation.isPending}
          removing={removeMutation.isPending}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      ))}

      {cart.items.length > 0 && (
        <CartActions
          loading={clearMutation.isPending}
          onClearCart={() => clearMutation.mutate()}
        />
      )}
    </div>
  );
}