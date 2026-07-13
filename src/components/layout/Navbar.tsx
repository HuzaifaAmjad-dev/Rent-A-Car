"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onMenuOpen: () => void;
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

export default function Navbar({ onMenuOpen }: NavbarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
            H
          </div>

          <div>
            <h1 className="text-lg font-bold text-primary">
              Hasnain Rent a Car
            </h1>

            <p className="text-xs text-muted">
              Reliable • Affordable • Comfortable
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-default font-medium ${
                  active
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/booking"
            className="rounded-xl bg-accent px-5 py-3 font-semibold text-white transition hover:bg-accent-hover"
          >
            Book Now
          </Link>
        </div>

        <button
          onClick={onMenuOpen}
          className="rounded-lg border border-border p-2 md:hidden"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}