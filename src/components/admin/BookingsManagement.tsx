"use client";

import BookingTable from "./BookingTable";

interface Props {
  bookings: any[];
}

export default function BookingsManagement({
  bookings,
}: Props) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Bookings
        </h1>

        <p className="mt-2 text-muted">
          Manage customer bookings.
        </p>
      </div>

      <BookingTable bookings={bookings} />
    </div>
  );
}