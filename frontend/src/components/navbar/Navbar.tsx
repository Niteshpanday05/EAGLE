"use client";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import NavbarLogo from "./NavbarLogo";

import type { NavbarProps } from "./navbar.types";

export default function Navbar({
  user = null,
  categories = [],
  categoriesLoading = false,
  cartCount = 0,
  wishlistCount = 0,
  isAuthenticated = false,
}: NavbarProps) {
  return (
    <header
      className="
        sticky
        top-0
        z-[100]
        w-full
        border-b
        border-slate-200/80
        bg-white/95
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[50px]
          w-full
          max-w-full
          items-center
          px-4
          lg:h-12
          lg:px-7
        "
      >
        {/* =====================================================
            LOGO
            ===================================================== */}

        <div className="shrink-0">
          <NavbarLogo />
        </div>

        {/* =====================================================
            MOBILE HAMBURGER
            ===================================================== */}

        <div className="ml-auto lg:hidden">
          <NavbarMobile
            categories={categories}
            categoriesLoading={categoriesLoading}
            user={user}
            isAuthenticated={isAuthenticated}
            cartCount={cartCount}
            wishlistCount={wishlistCount}
          />
        </div>

        {/* =====================================================
            DESKTOP
            ===================================================== */}

       <div className="hidden flex-1 items-center justify-center lg:flex">
  <NavbarDesktop
    categories={categories}
    categoriesLoading={categoriesLoading}
    user={user}
    isAuthenticated={isAuthenticated}
    cartCount={cartCount}
    wishlistCount={wishlistCount}
  />
</div>
      </div>
    </header>
  );
}