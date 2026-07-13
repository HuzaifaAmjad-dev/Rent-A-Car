"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CarFront,
  CalendarDays,
} from "lucide-react";

const items = [
  {
    href: "/admin",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/admin/cars",
    icon: CarFront,
    label: "Cars",
  },
  {
    href: "/admin/bookings",
    icon: CalendarDays,
    label: "Bookings",
  },
];

export default function AdminBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white md:hidden">
      <div className="grid grid-cols-3">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 py-3 text-xs ${
                active
                  ? "text-primary"
                  : "text-muted"
              }`}
            >
              <item.icon size={22} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}