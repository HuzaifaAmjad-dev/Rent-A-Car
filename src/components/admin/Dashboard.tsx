import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  CarFront,
  CalendarDays,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

const RANGE_OPTIONS = [
  { label: "7 Days", value: "7" },
  { label: "15 Days", value: "15" },
  { label: "30 Days", value: "30" },
  { label: "All Time", value: "all" },
];

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: Promise<{ range?: string }>;
}) {
  const resolvedParams = (await searchParams) ?? {};
  const range = resolvedParams.range ?? "30";
  const supabase = createServerSupabaseClient();

  let cutoffDate: string | null = null;
  if (range !== "all") {
    const days = Number(range);
    const date = new Date();
    date.setDate(date.getDate() - days);
    cutoffDate = date.toISOString();
  }

  function bookingQuery(status?: string) {
    let query = supabase
      .from("bookings")
      .select("*", { count: "exact", head: true })
      .eq("is_deleted", false);

    if (status) {
      query = query.eq("status", status);
    }

    if (cutoffDate) {
      query = query.gte("created_at", cutoffDate);
    }

    return query;
  }

  const [
    { count: totalCars },
    { count: availableCars },
    { count: totalBookings },
    { count: pendingBookings },
    { count: confirmedBookings },
    { count: cancelledBookings },
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

    bookingQuery(),
    bookingQuery("pending"),
    bookingQuery("confirmed"),
    bookingQuery("cancelled"),
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
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Confirmed Bookings",
      value: confirmedBookings ?? 0,
      icon: CheckCircle2,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Cancelled Bookings",
      value: cancelledBookings ?? 0,
      icon: XCircle,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 text-muted">
            Welcome to the Hasnain Rent a Car Admin Panel.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {RANGE_OPTIONS.map((opt) => (
            <Link
              key={opt.value}
              href={`?range=${opt.value}`}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                range === opt.value
                  ? "bg-primary text-white"
                  : "border border-border text-gray-700 hover:bg-gray-50"
              }`}
            >
              {opt.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-border bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted">{stat.title}</p>
                <h2 className="mt-2 text-4xl font-bold">{stat.value}</h2>
              </div>

              <div className={`rounded-xl p-4 ${stat.color}`}>
                <stat.icon size={28} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}