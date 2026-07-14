import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-background py-24">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[32px] bg-primary px-8 py-16 text-white shadow-2xl md:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
              READY TO HIT THE ROAD?
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Book Your Perfect Car
              <br />
              Today
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Whether you're planning a family trip, business travel,
              airport transfer or a weekend getaway, we have the right
              vehicle waiting for you.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-white transition duration-300 hover:bg-accent-hover"
              >
                Book Now
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-primary"
              >
                <Phone size={20} />
                Contact Us
              </Link>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="mt-2 text-blue-100">
                  Customer Support
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="mt-2 text-blue-100">
                  Well-Maintained Vehicles
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="mt-2 text-blue-100">
                  Transparent Pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}