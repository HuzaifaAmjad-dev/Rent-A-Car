import Link from "next/link";
import { ArrowRight, ShieldCheck, Star, Clock3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/main.jpeg')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="container-custom relative flex min-h-[88vh] items-center">
        <div className="max-w-3xl text-white">
          <span className="mb-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
            🚗 Trusted Car Rental Service in Pakistan
          </span>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Rent Your Perfect Car
            <br />
            <span className="text-accent">
              Anytime, Anywhere
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-gray-200">
            Choose from a wide range of well-maintained
            vehicles for business trips, vacations,
            airport transfers, or everyday travel. Fast
            booking, affordable prices, and reliable
            service.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="flex items-center gap-2 rounded-xl bg-accent px-7 py-4 font-semibold text-white transition hover:bg-accent-hover"
            >
              Book Your Car

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-accent" />

              <div>
                <p className="font-semibold">
                  Trusted Service
                </p>

                <p className="text-sm text-gray-300">
                  Safe & Reliable
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 className="text-accent" />

              <div>
                <p className="font-semibold">
                  24/7 Support
                </p>

                <p className="text-sm text-gray-300">
                  Always Available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Star className="text-accent" />

              <div>
                <p className="font-semibold">
                  Premium Fleet
                </p>

                <p className="text-sm text-gray-300">
                  Clean & Comfortable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}