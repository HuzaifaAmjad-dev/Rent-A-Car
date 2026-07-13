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
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-4 text-left">
                Customer
              </th>
              <th className="px-5 py-4 text-left">
                Car
              </th>
              <th className="px-5 py-4 text-left">
                Dates
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
                <td className="px-5 py-4">
                  <div>
                    <p className="font-semibold">
                      {booking.customer_name}
                    </p>

                    <p className="text-sm text-muted">
                      {booking.phone}
                    </p>
                  </div>
                </td>

                <td className="px-5 py-4">
                  {booking.cars?.name}
                </td>

                <td className="px-5 py-4">
                  <div>
                    <p>{booking.start_date}</p>
                    <p>{booking.end_date}</p>
                  </div>
                </td>

                <td className="px-5 py-4">
                  PKR{" "}
                  {Number(
                    booking.total_amount
                  ).toLocaleString()}
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
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