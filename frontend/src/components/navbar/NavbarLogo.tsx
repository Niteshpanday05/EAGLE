import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="
        group
        flex
        items-center
        gap-2.5
      "
    >
      {/* Logo Box */}

      <div
        className="
          flex
          h-10
          w-20
          items-center
          justify-center
          rounded-xl
          bg-slate-950
          text-white
          shadow-sm
          transform-gpu
          transition-all
          duration-300
          ease-out
          will-change-transform
          group-hover:scale-[1.03]
          group-hover:shadow-md
        "
      >
        <span
          className="
            text-lg
            font-black
            tracking-tight
          "
        >
          SAJILO
        </span>
      </div>

      {/* Brand Text */}

      <div
        className="
          hidden
          sm:block
          transition-all
          duration-300
          ease-out
        "
      >
        <div
          className="
            text-lg
            font-black
            leading-none
            tracking-tight
            text-slate-950
            transition-colors
            duration-300
            group-hover:text-slate-700
          "
        >
          1996
        </div>

        <div
          className="
            mt-1
            ml-1
            text-[8px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-slate-400
            transition-colors
            duration-300
            group-hover:text-slate-500
          "
        >
          Store
        </div>
      </div>
    </Link>
  );
}