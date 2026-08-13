"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Overview",
    href: "/dashboard/overview",
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
  },
  {
    title: "Products",
    href: "/dashboard/products",
  },
  {
    title: "Inventory",
    href: "/dashboard/inventory",
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
  },
  {
    title: "Activity",
    href: "/dashboard/activity",
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white">

      <div className="border-b p-6">
        <h2 className="text-xl font-bold">
          Admin Dashboard
        </h2>
      </div>

      <nav className="p-4">

        <ul className="space-y-2">

          {menus.map((menu) => (
            <li key={menu.href}>

              <Link
                href={menu.href}
                className={`block rounded-lg px-4 py-2 transition ${
                  pathname === menu.href
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {menu.title}
              </Link>

            </li>
          ))}

        </ul>

      </nav>

    </aside>
  );
}