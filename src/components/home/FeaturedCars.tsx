import Link from "next/link";
import SectionHeading from "./SectionHeading";
import CarCard from "@/components/car-card";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { Car } from "@/types/car";


export default async function FeaturedCars() {
    const supabase = createServerSupabaseClient();

    const { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .eq("is_deleted", false)
    .eq("is_available", true)
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error(error);
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Our Fleet"
          title="Featured Vehicles"
          description="Browse our most popular and well-maintained rental cars for every journey."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {(cars as Car[] | null)?.map((car) => (
            <CarCard
            key={car.id}
            id={car.id}
            name={car.name}
            image={car.image_url}
            price={Number(car.price_per_day)}
            seats={car.seats}
            transmission={car.transmission}
            fuel={car.fuel_type}
            onBook={() => {
                window.location.href = "/booking";
              }}
          />
          ))}
        </div>

        {cars?.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border py-20 text-center">
            <h3 className="text-2xl font-semibold">
              No Cars Available
            </h3>

            <p className="mt-3 text-muted">
              Add vehicles from the admin panel to display
              them here.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:bg-primary-hover"
          >
            View All Vehicles
          </Link>
        </div>
      </div>
    </section>
  );
}