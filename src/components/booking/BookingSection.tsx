import { createServerSupabaseClient } from "@/lib/supabase/server";
import { Car } from "@/types/car";
import BookingFilters from "./BookingFilters";
import BookingCarsGrid from "./BookingCarsGrid";

export default async function BookingSection() {
  const supabase = createServerSupabaseClient();

  const { data: cars } = await supabase
    .from("cars")
    .select("*")
    .eq("is_deleted", false)
    .eq("is_available", true)
    .order("created_at", { ascending: false });

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">
            Book Your Vehicle
          </h1>

          <p className="mt-3 text-muted">
            Browse our available vehicles and choose the one
            that best suits your journey.
          </p>
        </div>

        <BookingFilters />

        <BookingCarsGrid cars={(cars as Car[]) ?? []} />
      </div>
    </section>
  );
}