"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Booking",
    href: "/booking",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-white p-6 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary">
            Menu
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`font-medium ${
                  active
                    ? "text-primary"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/booking"
            onClick={onClose}
            className="mt-6 rounded-xl bg-accent py-3 text-center font-semibold text-white"
          >
            Book Now
          </Link>
        </div>
      </aside>
    </>
  );
}