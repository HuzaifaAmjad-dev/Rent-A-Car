"use client";

interface Props {
  bookings: any[];
}

export default function BookingTable({
  bookings,
}: Props) {
  if (bookings.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border py-20 text-center">
        <h2 className="text-2xl font-semibold">
          No Bookings Found
        </h2>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1400px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-4 text-left">
                Customer
              </th>

              <th className="px-5 py-4 text-left">
                Contact
              </th>

              <th className="px-5 py-4 text-left">
                Car
              </th>

              <th className="px-5 py-4 text-left">
                Pickup
              </th>

              <th className="px-5 py-4 text-left">
                Dates
              </th>

              <th className="px-5 py-4 text-left">
                Days
              </th>

              <th className="px-5 py-4 text-left">
                Amount
              </th>

              <th className="px-5 py-4 text-left">
                Status
              </th>
            </tr>
          </thead>


          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t"
              >

                {/* Customer */}
                <td className="px-5 py-4">
                  <p className="font-semibold">
                    {booking.customer_name}
                  </p>

                  <p className="text-sm text-muted">
                    CNIC: {booking.cnic || "N/A"}
                  </p>
                </td>


                {/* Contact */}
                <td className="px-5 py-4">
                  <p>
                    {booking.customer_phone ||
                      booking.phone ||
                      "N/A"}
                  </p>

                  <p className="text-sm text-muted">
                    {booking.customer_email ||
                      booking.email ||
                      "N/A"}
                  </p>
                </td>


                {/* Car */}
                <td className="px-5 py-4">
                  {booking.cars?.name || "N/A"}
                </td>


                {/* Location */}
                <td className="px-5 py-4">
                  <p>
                    <span className="font-medium">
                      Pickup:
                    </span>{" "}
                    {booking.pickup_location}
                  </p>

                  <p className="mt-2 text-sm text-muted">
                    Dropoff:{" "}
                    {booking.dropoff_location || "N/A"}
                  </p>
                </td>


                {/* Dates */}
                <td className="px-5 py-4">
                  <p>
                    {new Date(
                      booking.start_date
                    ).toLocaleDateString()}
                  </p>

                  <p className="text-sm text-muted">
                    to{" "}
                    {new Date(
                      booking.end_date
                    ).toLocaleDateString()}
                  </p>
                </td>


                {/* Days */}
                <td className="px-5 py-4">
                  {booking.total_days}
                </td>


                {/* Amount */}
                <td className="px-5 py-4 font-semibold">
                  PKR{" "}
                  {Number(
                    booking.total_amount
                  ).toLocaleString()}
                </td>


                {/* Status */}
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}