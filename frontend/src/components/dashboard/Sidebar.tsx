
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Package,
  Boxes,
  CreditCard,
  Users,
  FileText,
  Activity,
  Bell,
} from "lucide-react";

const menus = [
  {
    name: "Overview",
    href: "/dashboard/overview",
    icon: LayoutDashboard,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    name: "Inventory",
    href: "/dashboard/inventory",
    icon: Boxes,
  },
  {
    name: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    name: "Activity",
    href: "/dashboard/activity",
    icon: Activity,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-gray-200 bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold">
          Admin Dashboard
        </h1>
      </div>

      <nav className="space-y-1 p-4">
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active =
            pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition

              ${
                active
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />

              {menu.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}