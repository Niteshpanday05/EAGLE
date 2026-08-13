"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [searchOpen, setSearchOpen] = useState(false);

  const cartCount = 2;

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "Offers",
      href: "/offers",
    },
    {
      name: "Services",
      href: "/service",
    },
  ];


  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">

      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 lg:px-8">


        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
        >
          <h1 className="text-2xl font-bold tracking-tight text-orange-600">
            Sajilo Order
          </h1>

          <p className="hidden text-xs text-gray-500 md:block">
            Shop Smarter
          </p>
        </Link>




        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">

          {navLinks.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {link.name}
            </Link>

          ))}

        </nav>





        {/* Right Actions */}
        <div className="flex items-center gap-2">


          {/* Search */}
          <div className="relative">


            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`rounded-full p-3 transition hover:bg-orange-50 ${
                searchOpen ? "hidden" : ""
              }`}
            >

              <Search
                size={22}
                className="text-gray-700"
              />

            </button>



            {/* Search Box */}
            {searchOpen && (

              <div
                className="
                absolute
                right-0
                top-1/2
                z-50
                flex
                h-12
                w-80
                -translate-y-1/2
                -translate-x-14
                items-center
                rounded-full
                border
                border-gray-200
                bg-white
                shadow-xl
                "
              >

                <Search
                  size={18}
                  className="ml-4 text-gray-400"
                />


                <input
                  autoFocus
                  type="text"
                  placeholder="Search products..."
                  className="h-full flex-1 px-3 text-sm outline-none"
                />


                <button
                  onClick={() => setSearchOpen(false)}
                  className="mr-4 text-gray-400 hover:text-gray-700"
                >

                  <X size={18}/>

                </button>

              </div>

            )}

          </div>





          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="rounded-full p-3 transition hover:bg-orange-50"
          >

            <Heart
              size={22}
              className="text-gray-700"
            />

          </Link>





          {/* Cart */}
          <Link
            href="/cart"
            className="relative rounded-full p-3 transition hover:bg-orange-50"
          >

            <ShoppingCart
              size={22}
              className="text-gray-700"
            />


            {cartCount > 0 && (

              <span
                className="
                absolute
                right-1
                top-1
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-orange-500
                text-[11px]
                font-semibold
                text-white
                "
              >
                {cartCount}
              </span>

            )}

          </Link>





          {/* Profile */}
          <Link
            href="/profile"
            className="hidden rounded-full p-3 transition hover:bg-orange-50 md:block"
          >

            <User
              size={22}
              className="text-gray-700"
            />

          </Link>





          {/* Mobile Menu */}
          <button
            className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
          >

            <Menu size={24}/>

          </button>


        </div>


      </div>


    </header>
  );
}