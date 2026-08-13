import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="mt-12 border-t border-neutral-200 pt-6 sm:mt-14">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-[11px] text-neutral-400">
          © {new Date().getFullYear()} Sajilo Order. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">

          <Link
            href="/privacy"
            className="
              text-[11px]
              text-neutral-400
              transition-colors
              hover:text-neutral-950
            "
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="
              text-[11px]
              text-neutral-400
              transition-colors
              hover:text-neutral-950
            "
          >
            Terms
          </Link>

          <span className="hidden h-3 w-px bg-neutral-200 sm:block" />

          <span className="text-[11px] text-neutral-400">
            Nepal
          </span>

        </div>
      </div>
    </div>
  );
}