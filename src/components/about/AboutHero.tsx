import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-background">
      <div className="container-custom grid items-center gap-12 py-24 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-accent">
            ABOUT US
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-primary">
            Reliable Car Rental
            <br />
            You Can Trust
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Hasnain Rent a Car provides affordable, safe and
            well-maintained vehicles for business trips,
            vacations, airport transfers and everyday travel.
            Our mission is to make renting a car simple,
            transparent and stress-free.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="rounded-xl bg-accent px-8 py-4 font-semibold text-white transition hover:bg-accent-hover"
            >
              Book a Vehicle
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-border px-8 py-4 font-semibold transition hover:bg-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-3xl">
          <Image
            src="/a1.webp"
            alt="Hasnain Rent a Car"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}