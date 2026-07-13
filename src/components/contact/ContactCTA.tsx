import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-primary py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-primary to-primary-hover p-10 text-center text-white shadow-2xl md:p-16">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
            READY TO BOOK?
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Your Next Journey
            <br />
            Starts Here
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Whether you need a vehicle for a business trip,
            airport transfer, family vacation or a special
            occasion, we're ready to provide a reliable car
            at an affordable price.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-white transition duration-300 hover:bg-accent-hover"
            >
              Book a Car
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:+923001234567"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-primary"
            >
              <PhoneCall size={20} />
              Call Us
            </a>
          </div>

          <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="mt-2 text-blue-100">
                Customer Assistance
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">30+</h3>
              <p className="mt-2 text-blue-100">
                Vehicles Available
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
    </section>
  );
}