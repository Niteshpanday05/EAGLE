"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  UserRound,
} from "lucide-react";

import LogoutButton from "@/features/auth/components/LogoutButton";

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
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const closeAccountMenu = () => {
    setIsAccountOpen(false);
  };

  return (
    <div className="flex shrink-0 items-center ">

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
              min-w-4
              items-center
              justify-center
              rounded-full
              bg-rose-500
              px-0.5
              text-[9px]
              font-bold
              leading-none
              text-white
              ring-2
              ring-white
            "
          >
            {wishlistCount > 99 ? "99+" : wishlistCount}
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
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          text-slate-700
          transition
          duration-200
          hover:text-slate-950
        "
      >
        <ShoppingBag
          className="
            h-5
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
              right-0
              top-0
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
              ring-2
              ring-white
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
        <div className="relative ml-1">

          {/* =================================================
              PROFILE BUTTON
              ================================================= */}

          <button
            type="button"
            onClick={() => {
              setIsAccountOpen((previous) => !previous);
            }}
            aria-label="Open account menu"
            aria-expanded={isAccountOpen}
            className="
              group
              flex
              h-6
              w-6
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-black
              text-green-500
              shadow-sm
              transition
              duration-200
              hover:bg-slate-800
              hover:text-white
              hover:shadow-md
              focus:outline-none
              focus:ring-2
              focus:ring-slate-300
              focus:ring-offset-2
              cursor-pointer
            "
          >
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.first_name || "Profile"}
                className="
                  h-7
                  w-7
                  rounded-full
                  object-cover
                  ring-2
                  ring-white
                "
              />
            ) : (
              <UserRound
                className="
                  h-[16px]
                  w-[16px]
                  group-hover:scale-105
                "
              />
            )}
          </button>

          {/* =================================================
              ACCOUNT DROPDOWN
              ================================================= */}

          {isAccountOpen && (
            <div
              className="
                absolute
                right-0
                top-11
                z-[9999]
                w-60
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-2
                shadow-2xl
                shadow-slate-900/10
              "
            >

              {/* =============================================
                  USER INFORMATION
                  ============================================= */}

              <div
                className="
                  border-b
                  border-slate-100
                  px-3
                  py-3
                  
                  text-white
                "
              >
                <p className="truncate text-sm font-bold text-slate-900">
                  {user?.first_name
                    ? `${user.first_name}${
                        user.last_name
                          ? ` ${user.last_name}`
                          : ""
                      }`
                    : "My Account"}
                </p>

                {user?.email && (
                  <p className="mt-1 truncate text-xs text-slate-500">
                    {user.email}
                  </p>
                )}
              </div>

              {/* =============================================
                  MY ACCOUNT
                  ============================================= */}

              <Link
                href="/account"
                onClick={closeAccountMenu}
                className="
                  mt-1
                  flex
                  w-full
                  items-center
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  hover:text-slate-950
                "
              >
                My Account
              </Link>

              {/* =============================================
                  ORDERS
                  ============================================= */}

              <Link
                href="/orders"
                onClick={closeAccountMenu}
                className="
                  flex
                  w-full
                  items-center
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  hover:text-slate-950
                "
              >
                Orders
              </Link>

              {/* =============================================
                  WISHLIST
                  ============================================= */}

              <Link
                href="/wishlist"
                onClick={closeAccountMenu}
                className="
                  flex
                  w-full
                  items-center
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  hover:text-slate-950
                "
              >
                Wishlist
              </Link>
              
              <Link
                href="/wishlist"
                onClick={closeAccountMenu}
                className="
                  flex
                  w-full
                  items-center
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  hover:text-slate-950
                "
              >
                Settings
              </Link>

              {/* =============================================
                  DIVIDER
                  ============================================= */}

              <div className="my-2 border-t border-slate-100" />

              {/* =============================================
                  LOGOUT
                  ============================================= */}

              <LogoutButton
                onLogout={closeAccountMenu}
              />
            </div>
          )}
        </div>
      ) : (

        /* ===================================================
           NOT AUTHENTICATED → LOGIN BUTTON
           =================================================== */

        <Link
          href="/login"
          aria-label="Login"
          className="
            ml-1
            inline-flex
            h-9
            items-center
            justify-center
            rounded-full
            bg-slate-950
            px-5
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition
            duration-200
            hover:bg-slate-800
            hover:shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-slate-300
            focus:ring-offset-2
          "
        >
          Login
        </Link>
      )}
    </div>
  );
}