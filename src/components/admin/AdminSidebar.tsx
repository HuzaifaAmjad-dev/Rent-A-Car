"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CarFront,
  CalendarDays,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Cars",
    href: "/admin/cars",
    icon: CarFront,
  },
  {
    name: "Bookings",
    href: "/admin/bookings",
    icon: CalendarDays,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-border bg-white md:flex">
      <div className="border-b border-border p-6">
        <h2 className="text-2xl font-bold text-primary">
          Admin Panel
        </h2>

        <p className="text-sm text-muted">
          Hasnain Rent a Car
        </p>
      </div>

      <nav className="flex-1 p-4">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <link.icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}