import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  CarFront,
  CalendarDays,
  CheckCircle2,
  Clock3,
} from "lucide-react";

export default async function Dashboard() {
  const supabase = createServerSupabaseClient();

  const [
    { count: totalCars },
    { count: availableCars },
    { count: totalBookings },
    { count: pendingBookings },
  ] = await Promise.all([
    supabase
      .from("cars")
      .select("*", { count: "exact", head: true })
      .eq("is_deleted", false),

    supabase
      .from("cars")
      .select("*", { count: "exact", head: true })
      .eq("is_deleted", false)
      .eq("is_available", true),

    supabase
      .from("bookings")
      .select("*", { count: "exact", head: true })
      .eq("is_deleted", false),

    supabase
      .from("bookings")
      .select("*", { count: "exact", head: true })
      .eq("is_deleted", false)
      .eq("status", "pending"),
  ]);

  const stats = [
    {
      title: "Total Cars",
      value: totalCars ?? 0,
      icon: CarFront,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Available Cars",
      value: availableCars ?? 0,
      icon: CheckCircle2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Bookings",
      value: totalBookings ?? 0,
      icon: CalendarDays,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Pending Bookings",
      value: pendingBookings ?? 0,
      icon: Clock3,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-muted">
          Welcome to the Hasnain Rent a Car Admin Panel.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-border bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`rounded-xl p-4 ${stat.color}`}
              >
                <stat.icon size={28} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}