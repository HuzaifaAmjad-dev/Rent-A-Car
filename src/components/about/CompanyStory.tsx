import Image from "next/image";
import {
  ShieldCheck,
  CarFront,
  Users,
} from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="bg-white py-24">
      <div className="container-custom grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="relative h-[520px] overflow-hidden rounded-3xl">
            <Image
              src="/a1.webp"
              alt="Our Fleet"
              fill
              className="object-cover"
            />
          </div>

          
        </div>

        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-accent">
            OUR STORY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-primary">
            Making Every Journey
            Comfortable & Reliable
          </h2>

          <p className="mt-6 leading-8 text-muted">
            At Hasnain Rent a Car, we believe renting a
            vehicle should be simple, transparent and
            stress-free. Our fleet is regularly maintained
            to ensure every customer enjoys a safe and
            comfortable journey.
          </p>

          <p className="mt-5 leading-8 text-muted">
            Whether you need a car for business meetings,
            airport transfers, weddings, family vacations
            or daily travel, we provide dependable
            vehicles backed by professional customer
            support.
          </p>

          <div className="mt-10 grid gap-5">
            <div className="flex gap-4 rounded-2xl border border-border p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                <ShieldCheck size={28} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Safe & Verified Vehicles
                </h3>

                <p className="mt-2 text-muted">
                  Every vehicle undergoes regular
                  maintenance and inspection before
                  reaching our customers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                <CarFront size={28} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Wide Range of Cars
                </h3>

                <p className="mt-2 text-muted">
                  From economical sedans to spacious SUVs,
                  we have vehicles suitable for every
                  occasion.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                <Users size={28} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Customer First
                </h3>

                <p className="mt-2 text-muted">
                  Our priority is delivering excellent
                  service with transparent pricing and
                  friendly support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}