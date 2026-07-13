"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/cient";
import { Car } from "@/types/car";
import { uploadCarImage } from "@/lib/upload-image";
interface Props {
  car?: Car | null;
  onSuccess: () => void;
}

export default function CarForm({
  car,
  onSuccess,
}: Props) {
  const router = useRouter();
  const supabase = createBrowserSupabaseClient();

  const [loading, setLoading] = useState(false);
  const [imageFile,setImageFile] =
  useState<File | null>(null);
  const [form, setForm] = useState({
    name: car?.name ?? "",
    brand: car?.brand ?? "",
    category: car?.category ?? "",
    seats: car?.seats ?? 5,
    transmission: car?.transmission ?? "automatic",
    fuel_type: car?.fuel_type ?? "petrol",
    price_per_day: car?.price_per_day ?? "",
    image_url: car?.image_url ?? "",
    description: car?.description ?? "",
    is_available: car?.is_available ?? true,
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "seats" ||
        name === "price_per_day"
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();
  
    setLoading(true);
  
    try {
  
      let imageUrl = form.image_url;
  
  
      if (imageFile) {
        imageUrl = await uploadCarImage(
          imageFile
        );
      }
  
  
      const updatedForm = {
        ...form,
        image_url: imageUrl,
      };
  
  
      if (car) {
  
        await supabase
          .from("cars")
          .update(updatedForm)
          .eq("id", car.id);
  
      } else {
  
        await supabase
          .from("cars")
          .insert({
            ...updatedForm,
            is_deleted:false,
          });
  
      }
  
  
      router.refresh();
      onSuccess();
  
  
    } catch(error) {

        console.log("UPLOAD ERROR:", error);
      
        alert(
          error instanceof Error
            ? error.message
            : "Image upload failed"
        );
      
      }
  
  
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Car Name"
          value={form.name}
          onChange={handleChange}
          className="rounded-xl border border-border px-4 py-3"
        />

        <input
          required
          name="brand"
          placeholder="Brand"
          value={form.brand}
          onChange={handleChange}
          className="rounded-xl border border-border px-4 py-3"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="rounded-xl border border-border px-4 py-3"
        >
          <option value="">Category</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Luxury</option>
          <option>Van</option>
          <option>Hatchback</option>
        </select>

        <input
          type="number"
          name="seats"
          value={form.seats}
          onChange={handleChange}
          className="rounded-xl border border-border px-4 py-3"
        />

        <select
          name="transmission"
          value={form.transmission}
          onChange={handleChange}
          className="rounded-xl border border-border px-4 py-3"
        >
          <option>Automatic</option>
          <option>Manual</option>
        </select>

        <select
          name="fuel_type"
          value={form.fuel_type}
          onChange={handleChange}
          className="rounded-xl border border-border px-4 py-3"
        >
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Hybrid</option>
          <option>Electric</option>
        </select>

        <input
          type="number"
          name="price_per_day"
          placeholder="Price Per Day"
          value={form.price_per_day}
          onChange={handleChange}
          className="rounded-xl border border-border px-4 py-3"
        />

<input
  type="file"
  accept="image/*"
  onChange={(e)=> {
    if(e.target.files){
      setImageFile(e.target.files[0]);
    }
  }}
  className="w-full rounded-xl border p-3"
/>
      </div>

      <textarea
        rows={4}
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full rounded-xl border border-border px-4 py-3"
      />

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={form.is_available}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              is_available: e.target.checked,
            }))
          }
        />

        Available
      </label>

      <button
        disabled={loading}
        className="w-full rounded-xl bg-primary py-4 font-semibold text-white disabled:opacity-50"
      >
        {loading
          ? "Saving..."
          : car
          ? "Update Car"
          : "Add Car"}
      </button>
    </form>
  );
}