"use client";

import { useState } from "react";
import { createBrowserSupabaseClient } from "../../lib/supabase/cient";

interface BookingFormProps {
  carId: string;
  pricePerDay: number;
}

interface BookingFormData {
  customer_name: string;
  email: string;
  phone: string;
  cnic: string;
  pickup_location: string;
  dropoff_location: string;
  start_date: string;
  end_date: string;
  notes: string;
}

export default function BookingForm({
  carId,
  pricePerDay,
}: BookingFormProps) {
  const supabase = createBrowserSupabaseClient();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<BookingFormData>({
    customer_name: "",
    email: "",
    phone: "",
    cnic: "",
    pickup_location: "",
    dropoff_location: "",
    start_date: "",
    end_date: "",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function calculateDays() {
    if (!formData.start_date || !formData.end_date) return 0;

    const start = new Date(formData.start_date);
    const end = new Date(formData.end_date);

    const diff =
      end.getTime() - start.getTime();

    return Math.max(
      Math.ceil(diff / (1000 * 60 * 60 * 24)),
      1
    );
  }

  const totalDays = calculateDays();
  const totalAmount = totalDays * pricePerDay;

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("bookings")
      .insert({
        car_id: carId,
        customer_name: formData.customer_name,
        email: formData.email,
        phone: formData.phone,
        cnic: formData.cnic || null,
        pickup_location:
          formData.pickup_location,
        dropoff_location:
          formData.dropoff_location || null,
        start_date: formData.start_date,
        end_date: formData.end_date,
        total_days: totalDays,
        total_amount: totalAmount,
        notes: formData.notes || null,
        status: "pending",
        is_deleted: false,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Booking submitted successfully.");

    setFormData({
      customer_name: "",
      email: "",
      phone: "",
      cnic: "",
      pickup_location: "",
      dropoff_location: "",
      start_date: "",
      end_date: "",
      notes: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        required
        name="customer_name"
        placeholder="Full Name"
        value={formData.customer_name}
        onChange={handleChange}
        className="w-full rounded-xl border border-border px-4 py-3"
      />

      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-border px-4 py-3"
      />

      <input
        required
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full rounded-xl border border-border px-4 py-3"
      />

      <input
        name="cnic"
        placeholder="CNIC (Optional)"
        value={formData.cnic}
        onChange={handleChange}
        className="w-full rounded-xl border border-border px-4 py-3"
      />

      <input
        required
        name="pickup_location"
        placeholder="Pickup Location"
        value={formData.pickup_location}
        onChange={handleChange}
        className="w-full rounded-xl border border-border px-4 py-3"
      />

      <input
        name="dropoff_location"
        placeholder="Dropoff Location"
        value={formData.dropoff_location}
        onChange={handleChange}
        className="w-full rounded-xl border border-border px-4 py-3"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          className="rounded-xl border border-border px-4 py-3"
        />

        <input
          required
          type="date"
          name="end_date"
          value={formData.end_date}
          onChange={handleChange}
          className="rounded-xl border border-border px-4 py-3"
        />
      </div>

      <textarea
        rows={4}
        name="notes"
        placeholder="Additional Notes"
        value={formData.notes}
        onChange={handleChange}
        className="w-full rounded-xl border border-border px-4 py-3"
      />

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex justify-between">
          <span>Total Days</span>
          <span>{totalDays}</span>
        </div>

        <div className="mt-3 flex justify-between text-lg font-semibold">
          <span>Total Amount</span>
          <span>
            PKR {totalAmount.toLocaleString()}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-accent py-4 font-semibold text-white transition hover:bg-accent-hover disabled:opacity-50"
      >
        {loading
          ? "Submitting..."
          : "Confirm Booking"}
      </button>
    </form>
  );
}