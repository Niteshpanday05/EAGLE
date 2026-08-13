"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";

interface NavbarSearchProps {
  mobile?: boolean;
}

export default function NavbarSearch({
  mobile = false,
}: NavbarSearchProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = query.trim();

    if (!value) {
      router.push("/products");
      return;
    }

    router.push(
      `/products?search=${encodeURIComponent(value)}`
    );
  }

  function clearSearch() {
    setQuery("");
    inputRef.current?.focus();
  }

  function openSearch() {
    setOpen(true);
  }

  function closeSearch() {
    setOpen(false);
    setQuery("");
  }

  useEffect(() => {
    if (open && !mobile) {
      inputRef.current?.focus();
    }
  }, [open, mobile]);

  /*
   * MOBILE
   */
  if (mobile) {
    return (
      <form
        onSubmit={handleSubmit}
        className="w-full"
      >
        <div
          className="
            flex
            h-11
            w-full
            items-center
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-2
          "
        >
          <Search className="ml-2 h-4 w-4 shrink-0 text-slate-400" />

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="
              h-full
              min-w-0
              flex-1
              bg-transparent
              px-3
              text-sm
              text-slate-900
              outline-none
              placeholder:text-slate-400
            "
          />

          {query && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear search"
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                text-slate-400
                hover:bg-slate-100
              "
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>
    );
  }

  /*
   * DESKTOP
   *
   * Closed:
   * Search icon only
   *
   * Open:
   * Search field
   */
  return (
    <div className="relative">
      {!open ? (
        <button
          type="button"
          onClick={openSearch}
          aria-label="Open search"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-slate-600
            transition
            hover:bg-slate-100
            hover:text-slate-950
          "
        >
          <Search className="h-5 w-5" />
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="
            absolute
            right-0
            top-1/2
            z-50
            w-[320px]
            -translate-y-1/2
          "
        >
          <div
            className="
              flex
              h-11
              w-full
              items-center
              rounded-xl
              border
              border-slate-200
              bg-white
              px-2
              shadow-lg
              ring-1
              ring-slate-950/5
            "
          >
            <Search className="ml-2 h-4 w-4 shrink-0 text-slate-400" />

            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="
                h-full
                min-w-0
                flex-1
                bg-transparent
                px-3
                text-sm
                text-slate-900
                outline-none
                placeholder:text-slate-400
              "
            />

            {query && (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Clear search"
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-slate-400
                  hover:bg-slate-100
                "
              >
                <X className="h-4 w-4" />
              </button>
            )}

            <button
              type="button"
              onClick={closeSearch}
              aria-label="Close search"
              className="
                ml-1
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                text-slate-400
                hover:bg-slate-100
              "
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}