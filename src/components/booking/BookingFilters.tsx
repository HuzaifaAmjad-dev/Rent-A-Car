"use client";

export default function BookingFilters() {
  return (
    <div className="mb-10 rounded-2xl border border-border bg-white p-6">
      <div className="grid gap-4 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search cars..."
          className="rounded-xl border border-border px-4 py-3"
        />

        <select className="rounded-xl border border-border px-4 py-3">
          <option>All Categories</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Luxury</option>
          <option>Van</option>
          <option>Hatchback</option>
        </select>

        <select className="rounded-xl border border-border px-4 py-3">
          <option>Transmission</option>
          <option>Automatic</option>
          <option>Manual</option>
        </select>

        <select className="rounded-xl border border-border px-4 py-3">
          <option>Fuel Type</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>Electric</option>
        </select>
      </div>
    </div>
  );
}