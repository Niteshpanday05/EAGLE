"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

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

    if (!mobile) {
      setOpen(false);
    }
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

  /* ==================================================
     MOBILE SEARCH
  ================================================== */

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
            transition
            focus-within:border-slate-300
            focus-within:bg-white
            focus-within:ring-2
            focus-within:ring-slate-950/5
          "
        >
          <Search
            aria-hidden="true"
            className="
              ml-2
              h-4
              w-4
              shrink-0
              text-slate-400
            "
          />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            autoComplete="off"
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

          {query.length > 0 && (
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
                transition
                hover:bg-slate-100
                hover:text-slate-700
                active:scale-95
              "
            >
              <X
                aria-hidden="true"
                className="h-4 w-4"
              />
            </button>
          )}
        </div>
      </form>
    );
  }

  /* ==================================================
     DESKTOP SEARCH
  ================================================== */

  return (
    <div className="relative">
      {!open && (
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
            active:scale-95
          "
        >
          <Search
            aria-hidden="true"
            className="h-5 w-5"
          />
        </button>
      )}

      {open && (
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
              transition
              focus-within:border-slate-300
              focus-within:ring-slate-950/10
            "
          >
            <Search
              aria-hidden="true"
              className="
                ml-2
                h-4
                w-4
                shrink-0
                text-slate-400
              "
            />

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              autoComplete="off"
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

            <button
              type="button"
              onClick={query ? clearSearch : closeSearch}
              aria-label={
                query
                  ? "Clear search"
                  : "Close search"
              }
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                text-slate-400
                transition
                hover:bg-slate-100
                hover:text-slate-700
                active:scale-95
              "
            >
              <X
                aria-hidden="true"
                className="h-4 w-4"
              />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}