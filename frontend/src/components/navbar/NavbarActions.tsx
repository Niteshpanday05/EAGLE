"use client";

import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  UserRound,
} from "lucide-react";

import type { NavbarUser } from "./navbar.types";

interface NavbarActionsProps {
  user?: NavbarUser | null;
  isAuthenticated?: boolean;
  cartCount?: number;
  wishlistCount?: number;
}

export default function NavbarActions({
  user = null,
  isAuthenticated = false,
  cartCount = 0,
  wishlistCount = 0,
}: NavbarActionsProps) {
  return (
    <div className="flex shrink-0 items-center">
      {/* =====================================================
          WISHLIST
          ===================================================== */}

      <Link
        href="/wishlist"
        aria-label={
          wishlistCount > 0
            ? `Wishlist, ${wishlistCount} items`
            : "Wishlist"
        }
        className="
          group
          relative
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          text-slate-700
          transition
          duration-200
          hover:bg-slate-100
          hover:text-slate-950
        "
      >
        <Heart
          className="
            h-[20px]
            w-[20px]
            transition-transform
            duration-200
            group-hover:scale-105
          "
        />

        {wishlistCount > 0 && (
          <span
            className="
              absolute
              right-0
              top-0
              flex
              h-4
              w-4
              items-center
              justify-center
              rounded-full
              bg-rose-500
              
              text-[9px]
              font-bold
              leading-none
              text-white
              ring-2
              ring-white
            "
          >
            {wishlistCount > 99
              ? "99+"
              : wishlistCount}
          </span>
        )}
      </Link>

      {/* =====================================================
    CART
    ===================================================== */}

<Link
  href="/cart"
  aria-label={
    cartCount > 0
      ? `Cart, ${cartCount} items`
      : "Cart"
  }
  className="
    group
    relative
    flex
    shrink-0
    items-center
    justify-center
    p-2
    text-slate-700
    transition
    duration-200
    hover:text-slate-950
  "
>
  <ShoppingBag
    className="
      h-6
      w-5
      transition-transform
      duration-200
      group-hover:scale-105
    "
  />

  {cartCount > 0 && (
    <span
      className="
        absolute
        -right-1
        -top-1
        flex
        h-4
        min-w-4
        items-center
        justify-center
        rounded-full
        bg-slate-950
        px-1
        text-[9px]
        font-bold
        leading-none
        text-white
      "
    >
      {cartCount > 99 ? "99+" : cartCount}
    </span>
  )}
</Link>
{/* =====================================================
    ACCOUNT
    ===================================================== */}

{isAuthenticated ? (
  <Link
    href="/account"
    aria-label="My account"
    className="
      group
      flex
      h-8
      w-8
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-slate-950
      text-white
      shadow-sm
      transition
      duration-200
      hover:bg-slate-800
      hover:shadow-md
    "
  >
    {user?.avatar ? (
      <img
        src={user.avatar}
        alt=""
        className="
          h-7
          w-7
          rounded-full
          object-cover
          ring-2
          ring-white
          transition
          duration-200
          group-hover:scale-105
        "
      />
    ) : (
      <UserRound
        className="
          h-[16px]
          w-[16px]
          transition-transform
          duration-200
          group-hover:scale-105
        "
      />
    )}
  </Link>
) : (
  <Link
    href="/login"
    aria-label="Login"
    className="
      group
      flex
      h-6
      w-6
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-slate-950
      text-white
      shadow-sm
      transition
      duration-200
      hover:bg-slate-800
      hover:shadow-md
    "
  >
    <UserRound
      className="
        h-[16px]
        w-[16px]
        transition-transform
        duration-200
        group-hover:scale-105
      "
    />
  </Link>
)}
      

    </div>
  );
}