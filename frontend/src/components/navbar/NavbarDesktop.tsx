"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import NavbarCategories from "./NavbarCategories";
import NavbarSearch from "./NavbarSearch";
import NavbarActions from "./NavbarActions";

import type {
  NavbarCategory,
  NavbarUser,
} from "./navbar.types";

interface NavbarDesktopProps {
  categories: NavbarCategory[];
  categoriesLoading?: boolean;

  user?: NavbarUser | null;
  isAuthenticated?: boolean;

  cartCount?: number;
  wishlistCount?: number;
}

export default function NavbarDesktop({
  categories,
  categoriesLoading = false,
  user,
  isAuthenticated = false,
  cartCount = 0,
  wishlistCount = 0,
}: NavbarDesktopProps) {
  const pathname = usePathname();

  const isHomeActive = pathname === "/";
  const isShopActive =
    pathname === "/products" ||
    pathname.startsWith("/products/");
  const isDealsActive =
    pathname === "/deals" ||
    pathname.startsWith("/deals/");
   const isAboutActive =
    pathname === "/about" ||
    pathname.startsWith("/deals/");

  return (
   <div
  className="
    relative
    flex
    h-full
    w-full
    items-center
  "
>
  {/* CENTER NAVIGATION */}
  <nav
    aria-label="Main navigation"
    className="
      absolute
      left-[45%]
      top-1/2
      flex
      -translate-x-1/2
      -translate-y-1/2
      items-center
      gap-2
    "
  >
        {/* =================================================
            HOME
            ================================================= */}

        <Link
          href="/"
          className={`
            rounded-full
            px-4
            py-2
            text-sm
            font-semibold
            transition
            ${
              isHomeActive
                ? "text-black font-bold"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            }
          `}
        >
          Home
        </Link>

        {/* =================================================
            SHOP
            ================================================= */}

        <Link
          href="/products"
          className={`
            rounded-full
            px-3
            py-2
            text-sm
            font-medium
            transition
            ${
              isShopActive
                ? " text-black font-"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            }
          `}
        >
          Shop
        </Link>

        {/* =================================================
            CATEGORIES
            ================================================= */}

        <NavbarCategories
          categories={categories}
          loading={categoriesLoading}
        />

        {/* =================================================
            DEALS
            ================================================= */}

        <Link
          href="/deals"
          className={`
            rounded-full
            px-3
            py-2
            text-sm
            font-medium
            transition
            ${
              isDealsActive
                ? " text-rose-500 "
                : "text-rose-600 hover:bg-rose-50"
            }
          `}
        >
          Deals
        </Link>
         <Link
          href="/about"
          className={`
            rounded-full
            px-3
            py-2
            text-sm
            font-medium
            transition
            ${
              isAboutActive
                ? "text-black font-black"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            }
          `}
        >
          About
        </Link>
      </nav>

      {/* ================================================
          FLEXIBLE SPACE
          ================================================ */}

      <div className="flex-1" />

      {/* ================================================
          SEARCH
          ================================================ */}

     <div className="ml-1 shrink-0">
  <NavbarSearch />
</div>

<div className="ml-0 shrink-0">
  <NavbarActions
    user={user}
    isAuthenticated={isAuthenticated}
    cartCount={cartCount}
    wishlistCount={wishlistCount}
  />
</div>
    </div>
  );
}