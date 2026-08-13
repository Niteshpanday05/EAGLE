import Link from "next/link";

import { FOOTER_COMPANY_LINKS } from "./footer.data";

export default function FooterCompanyLinks() {
  return (
    <div>
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-950">
        Company
      </h3>

      <ul className="mt-5 space-y-1 sm:mt-6 sm:space-y-2">
        {FOOTER_COMPANY_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="
                inline-flex
                min-h-9
                items-center
                text-sm
                text-neutral-500
                transition-colors
                duration-200
                hover:text-neutral-950
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}