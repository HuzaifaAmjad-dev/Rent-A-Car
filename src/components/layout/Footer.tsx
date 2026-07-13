import Link from "next/link";
import { CarFront, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-custom grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <CarFront className="text-primary" />

            <h3 className="text-xl font-bold text-primary">
              Hasnain Rent a Car
            </h3>
          </div>

          <p className="text-muted">
            Affordable, reliable, and comfortable vehicles
            for business trips, family vacations, airport
            transfers, and daily travel.
          </p>
        </div>

        <div>
          <h4 className="mb-5 font-semibold">
            Quick Links
          </h4>

          <div className="flex flex-col gap-3 text-muted">
            <Link href="/">Home</Link>
            <Link href="/booking">Booking</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-semibold">
            Contact
          </h4>

          <div className="space-y-4 text-muted">
            <div className="flex gap-3">
              <Phone size={18} />
              <span>+92 XXX XXXXXXX</span>
            </div>

            <div className="flex gap-3">
              <Mail size={18} />
              <span>info@hasnainrentacar.com</span>
            </div>

            <div className="flex gap-3">
              <MapPin size={18} />
              <span>Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-sm text-muted">
        © {new Date().getFullYear()} Hasnain Rent a Car.
        All rights reserved.
      </div>
    </footer>
  );
}