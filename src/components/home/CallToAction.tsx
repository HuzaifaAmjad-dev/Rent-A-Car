import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold">
            Ready for Your Next Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Book your preferred vehicle today and enjoy a reliable,
            affordable, and comfortable travel experience with
            Hasnain Rent a Car.
          </p>

          <Link
            href="/booking"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-white transition hover:bg-accent-hover"
          >
            Book Your Car
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}