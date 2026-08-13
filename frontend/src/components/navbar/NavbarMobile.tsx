"use client";

import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Menu,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import NavbarSearch from "./NavbarSearch";

import type {
  NavbarCategory,
  NavbarUser,
} from "./navbar.types";

interface NavbarMobileProps {
  categories: NavbarCategory[];
  categoriesLoading?: boolean;

  user?: NavbarUser | null;
  isAuthenticated?: boolean;

  cartCount?: number;
  wishlistCount?: number;
}

export default function NavbarMobile({
  categories,
  categoriesLoading = false,
  user = null,
  isAuthenticated = false,
  cartCount = 0,
  wishlistCount = 0,
}: NavbarMobileProps) {
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    setCategoriesOpen(false);
  }

  const displayName =
    user?.first_name ||
    user?.email?.split("@")[0] ||
    "Account";

  return (
    <>
      {/* Mobile Hamburger Button */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className="
          ml-auto
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
          active:scale-95
        "
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile Drawer */}

      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[99999] lg:hidden">
            {/* Backdrop */}

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="
                absolute
                inset-0
                bg-slate-950/40
                backdrop-blur-sm
              "
            />

            {/* Right Drawer */}

            <aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="
                absolute
                right-0
                top-0
                flex
                h-[100dvh]
                w-full
                flex-col
                overflow-hidden
                bg-white
                shadow-2xl
              "
            >
              {/* Header */}

              <div
                className="
                  flex
                  h-[72px]
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-slate-100
                  bg-white
                  px-5
                "
              >
                {/* Logo */}

                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2"
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-slate-950
                      text-white
                    "
                  >
                    <span className="text-sm font-black">
                     𝓢
                    </span>
                  </div>

                  <div>
                    <div
                      className="
                        text-base
                        font-black
                        leading-none
                        text-slate-950
                      "
                    >
                      SAJILO
                    </div>

                    <div
                      className="
                        mt-1
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-slate-400
                      "
                    >
                      Order1996
                    </div>
                  </div>
                </Link>

                {/* Close */}

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-100
                    text-slate-700
                    transition
                    hover:bg-slate-200
                    active:scale-95
                  "
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search */}

              <div
                className="
                  shrink-0
                  border-b
                  border-slate-100
                  bg-white
                  p-4
                "
              >
                <NavbarSearch mobile />
              </div>

              {/* Scrollable Content */}

              <div
                className="
                  min-h-0
                  flex-1
                  overflow-y-auto
                  overscroll-contain
                "
              >
                {/* Account */}

                <div className="border-b border-slate-100 p-4">
                  {isAuthenticated ? (
                    <Link
                      href="/account"
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-slate-50
                        p-3
                        transition
                        hover:bg-slate-100
                      "
                    >
                      {user?.avatar ? (
                        <img
                          src={user.avatar}
                          alt=""
                          className="
                            h-10
                            w-10
                            shrink-0
                            rounded-full
                            object-cover
                          "
                        />
                      ) : (
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-slate-600
                            shadow-sm
                          "
                        >
                          <UserRound className="h-5 w-5" />
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <p
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-900
                          "
                        >
                          {displayName}
                        </p>

                        <p className="text-xs text-slate-500">
                          View account
                        </p>
                      </div>

                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        bg-slate-950
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-slate-800
                      "
                    >
                      <span className="flex items-center gap-3">
                        <UserRound className="h-5 w-5" />
                        Login / Register
                      </span>

                      <ChevronRight className="h-4 w-4 text-white/60" />
                    </Link>
                  )}
                </div>

                {/* Navigation */}

                <nav
                  aria-label="Mobile navigation"
                  className="p-4"
                >
                  {/* Discover */}

                  <div
                    className="
                      mb-3
                      px-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-slate-400
                    "
                  >
                    Discover
                  </div>

                  <div className="space-y-1">
                    {/* Home */}

                    <Link
                      href="/"
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-3
                        text-sm
                        font-semibold
                        text-slate-900
                        transition
                        hover:bg-slate-50
                      "
                    >
                      Home

                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>

                    {/* Shop */}

                    <Link
                      href="/products"
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-3
                        text-sm
                        font-medium
                        text-slate-700
                        transition
                        hover:bg-slate-50
                      "
                    >
                      Shop

                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </Link>

                    {/* Categories */}

                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setCategoriesOpen(
                            (current) => !current
                          )
                        }
                        aria-expanded={categoriesOpen}
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-xl
                          px-3
                          py-3
                          text-sm
                          font-medium
                          text-slate-700
                          transition
                          hover:bg-slate-50
                        "
                      >
                        Categories

                        <ChevronRight
                          className={`
                            h-4
                            w-4
                            text-slate-400
                            transition-transform
                            duration-200
                            ${
                              categoriesOpen
                                ? "rotate-90"
                                : ""
                            }
                          `}
                        />
                      </button>

                      {categoriesOpen && (
                        <div className="mt-1 space-y-1 pl-3">
                          {categoriesLoading ? (
                            <div className="px-3 py-3 text-xs text-slate-400">
                              Loading categories...
                            </div>
                          ) : categories.length > 0 ? (
                            categories.map((category) => (
                              <Link
                                key={category.id}
                                href={`/categories/${category.slug}`}
                                onClick={closeMenu}
                                className="
                                  flex
                                  items-center
                                  justify-between
                                  rounded-xl
                                  px-3
                                  py-2.5
                                  text-sm
                                  text-slate-600
                                  transition
                                  hover:bg-slate-50
                                  hover:text-slate-950
                                "
                              >
                                <span>
                                  {category.name}
                                </span>

                                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                              </Link>
                            ))
                          ) : (
                            <p className="px-3 py-2 text-xs text-slate-400">
                              No categories available
                            </p>
                          )}

                          <Link
                            href="/categories"
                            onClick={closeMenu}
                            className="
                              block
                              rounded-xl
                              px-3
                              py-2.5
                              text-sm
                              font-semibold
                              text-blue-600
                              transition
                              hover:bg-blue-50
                            "
                          >
                            View all categories
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Deals */}

                    <Link
                      href="/deals"
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-3
                        text-sm
                        font-semibold
                        text-rose-600
                        transition
                        hover:bg-rose-50
                      "
                    >
                      Deals

                      <ChevronRight className="h-4 w-4 text-rose-300" />
                    </Link>
                  </div>

                  <div className="my-6 h-px bg-slate-100" />

                  {/* Shopping */}

                  <div
                    className="
                      mb-3
                      px-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-slate-400
                    "
                  >
                    Shopping
                  </div>

                  <div className="space-y-1">
                    {/* Wishlist */}

                    <Link
                      href="/wishlist"
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-3
                        text-sm
                        font-medium
                        text-slate-700
                        transition
                        hover:bg-slate-50
                      "
                    >
                      <span className="flex items-center gap-3">
                        <Heart className="h-[18px] w-[18px]" />
                        Wishlist
                      </span>

                      {wishlistCount > 0 && (
                        <span
                          className="
                            rounded-full
                            bg-rose-100
                            px-2
                            py-1
                            text-[10px]
                            font-bold
                            text-rose-600
                          "
                        >
                          {wishlistCount > 99
                            ? "99+"
                            : wishlistCount}
                        </span>
                      )}
                    </Link>

                    {/* Cart */}

                    <Link
                      href="/cart"
                      onClick={closeMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-3
                        text-sm
                        font-medium
                        text-slate-700
                        transition
                        hover:bg-slate-50
                      "
                    >
                      <span className="flex items-center gap-3">
                        <ShoppingBag className="h-[18px] w-[18px]" />
                        Cart
                      </span>

                      {cartCount > 0 && (
                        <span
                          className="
                            rounded-full
                            bg-slate-950
                            px-2
                            py-1
                            text-[10px]
                            font-bold
                            text-white
                          "
                        >
                          {cartCount > 99
                            ? "99+"
                            : cartCount}
                        </span>
                      )}
                    </Link>
                  </div>

                  <div className="h-8" />
                </nav>
              </div>

              {/* Footer */}

              <div
                className="
                  shrink-0
                  border-t
                  border-slate-100
                  bg-white
                  px-4
                  py-4
                "
              >
                <p className="text-center text-xs text-slate-400">
                  Premium shopping, made simple.
                </p>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}