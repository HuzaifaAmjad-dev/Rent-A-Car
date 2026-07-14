"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { X, Filter } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/cient";

interface Props {
  bookings: any[];
}

const STATUS_OPTIONS = ["pending", "confirmed", "cancelled"];

const statusStyles: Record<string, string> = {
  confirmed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  pending: "bg-yellow-100 text-yellow-700",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function StatusSelect({
  bookingId,
  status,
  onUpdated,
}: {
  bookingId: string;
  status: string;
  onUpdated: (id: string, newStatus: string) => void;
}) {
  const supabase = createBrowserSupabaseClient();
  const router = useRouter();
  const [updating, setUpdating] = useState(false);

  async function handleChange(newStatus: string) {
    setUpdating(true);
    const { error } = await supabase
      .from("bookings")
      .update({ status: newStatus })
      .eq("id", bookingId);

    setUpdating(false);

    if (error) {
      alert(error.message);
      return;
    }

    onUpdated(bookingId, newStatus);
    router.refresh();
  }

  return (
    <select
      value={status}
      disabled={updating}
      onChange={(e) => handleChange(e.target.value)}
      className={`rounded-full border-0 px-3 py-1 text-sm font-medium capitalize outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 ${
        statusStyles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {STATUS_OPTIONS.map((opt) => (
        <option key={opt} value={opt} className="bg-white text-gray-900">
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
  );
}

function BookingDetailsModal({
  booking,
  onClose,
}: {
  booking: any;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">Booking Details</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <p className="text-muted">Customer</p>
            <p className="font-medium">{booking.customer_name}</p>
          </div>
          <div>
            <p className="text-muted">CNIC</p>
            <p className="font-medium">{booking.cnic || "N/A"}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted">Phone</p>
              <p className="font-medium">
                {booking.customer_phone || booking.phone || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-muted">Email</p>
              <p className="font-medium break-all">
                {booking.customer_email || booking.email || "N/A"}
              </p>
            </div>
          </div>
          <div>
            <p className="text-muted">Car</p>
            <p className="font-medium">{booking.cars?.name || "N/A"}</p>
          </div>
          <div>
            <p className="text-muted">Pickup Location</p>
            <p className="font-medium">{booking.pickup_location}</p>
          </div>
          <div>
            <p className="text-muted">Dropoff Location</p>
            <p className="font-medium">
              {booking.dropoff_location || "N/A"}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted">Start Date</p>
              <p className="font-medium">{formatDate(booking.start_date)}</p>
            </div>
            <div>
              <p className="text-muted">End Date</p>
              <p className="font-medium">{formatDate(booking.end_date)}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted">Total Days</p>
              <p className="font-medium">{booking.total_days}</p>
            </div>
            <div>
              <p className="text-muted">Total Amount</p>
              <p className="font-medium">
                PKR {Number(booking.total_amount).toLocaleString()}
              </p>
            </div>
          </div>
          <div>
            <p className="text-muted">Booked On</p>
            <p className="font-medium">{formatDate(booking.created_at)}</p>
          </div>
          {booking.notes && (
            <div>
              <p className="text-muted">Notes</p>
              <p className="font-medium">{booking.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookingTable({ bookings: initialBookings }: Props) {
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [filterOpen, setFilterOpen] = useState(false);

  function handleStatusUpdate(id: string, newStatus: string) {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  }

  const filteredBookings = useMemo(() => {
    if (statusFilter === "all") return bookings;
    return bookings.filter((b) => b.status === statusFilter);
  }, [bookings, statusFilter]);

  const filterLabel =
    statusFilter === "all"
      ? "All"
      : statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1);

  return (
    <div>
      {/* Header with filter */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted">
          {filteredBookings.length} booking
          {filteredBookings.length !== 1 ? "s" : ""}
        </p>

        <div className="relative">
          <button
            onClick={() => setFilterOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            <Filter size={16} />
            {filterLabel}
          </button>

          {filterOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setFilterOpen(false)}
              />
              <div className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-white shadow-lg">
                {["all", ...STATUS_OPTIONS].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setStatusFilter(opt);
                      setFilterOpen(false);
                    }}
                    className={`block w-full px-4 py-2.5 text-left text-sm capitalize hover:bg-gray-50 ${
                      statusFilter === opt
                        ? "font-semibold text-primary"
                        : "text-gray-700"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {filteredBookings.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-20 text-center">
          <h2 className="text-2xl font-semibold">No Bookings Found</h2>
          {statusFilter !== "all" && (
            <p className="mt-3 text-muted">
              No bookings with status "{statusFilter}".
            </p>
          )}
        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-white overflow-hidden">
          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[1400px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-4 text-left">Customer</th>
                  <th className="px-5 py-4 text-left">Contact</th>
                  <th className="px-5 py-4 text-left">Car</th>
                  <th className="px-5 py-4 text-left">Pickup</th>
                  <th className="px-5 py-4 text-left">Dates</th>
                  <th className="px-5 py-4 text-left">Days</th>
                  <th className="px-5 py-4 text-left">Amount</th>
                  <th className="px-5 py-4 text-left">Status</th>
                  <th className="px-5 py-4 text-center">Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="border-t">
                    <td className="px-5 py-4">
                      <p className="font-semibold">{booking.customer_name}</p>
                      <p className="text-sm text-muted">
                        CNIC: {booking.cnic || "N/A"}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <p>
                        {booking.customer_phone || booking.phone || "N/A"}
                      </p>
                      <p className="text-sm text-muted">
                        {booking.customer_email || booking.email || "N/A"}
                      </p>
                    </td>
                    <td className="px-5 py-4">{booking.cars?.name || "N/A"}</td>
                    <td className="px-5 py-4">
                      <p>
                        <span className="font-medium">Pickup:</span>{" "}
                        {booking.pickup_location}
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        Dropoff: {booking.dropoff_location || "N/A"}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <p>{formatDate(booking.start_date)}</p>
                      <p className="text-sm text-muted">
                        to {formatDate(booking.end_date)}
                      </p>
                    </td>
                    <td className="px-5 py-4">{booking.total_days}</td>
                    <td className="px-5 py-4 font-semibold">
                      PKR {Number(booking.total_amount).toLocaleString()}
                    </td>
                    <td className="px-5 py-4">
                      <StatusSelect
                        bookingId={booking.id}
                        status={booking.status}
                        onUpdated={handleStatusUpdate}
                      />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-gray-100"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile / tablet cards */}
          <div className="lg:hidden divide-y divide-border">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{booking.customer_name}</p>
                    <p className="text-sm text-muted">
                      CNIC: {booking.cnic || "N/A"}
                    </p>
                  </div>
                  <StatusSelect
                    bookingId={booking.id}
                    status={booking.status}
                    onUpdated={handleStatusUpdate}
                  />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted">Car</p>
                    <p className="font-medium">
                      {booking.cars?.name || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted">Amount</p>
                    <p className="font-medium">
                      PKR {Number(booking.total_amount).toLocaleString()}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted">Dates</p>
                    <p className="font-medium">
                      {formatDate(booking.start_date)} –{" "}
                      {formatDate(booking.end_date)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedBooking(booking)}
                  className="mt-3 w-full rounded-lg border py-2 text-sm font-medium hover:bg-gray-100"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </div>
  );
}