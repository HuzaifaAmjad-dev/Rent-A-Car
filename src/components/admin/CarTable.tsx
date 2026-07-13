

"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/cient";
import { Car } from "@/types/car";

interface Props {
    cars: Car[];
    onEdit: (car: Car) => void;
  }

  export default function CarTable({
    cars,
    onEdit,
  }: Props) {
  if (cars.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border py-20 text-center">
        <h2 className="text-2xl font-semibold">
          No Cars Found
        </h2>

        <p className="mt-3 text-muted">
          Click "Add Car" to create your first vehicle.
        </p>
      </div>
    );
  }
  const router = useRouter();
  const supabase = createBrowserSupabaseClient();
  
  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this car?"
    );
  
    if (!confirmed) return;
  
    const { error } = await supabase
      .from("cars")
      .update({
        is_deleted: true,
      })
      .eq("id", id);
  
    if (error) {
      alert(error.message);
      return;
    }
  
    router.refresh();
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-4 text-left">
                Car
              </th>

              <th className="px-5 py-4 text-left">
                Category
              </th>

              <th className="px-5 py-4 text-left">
                Price
              </th>

              <th className="px-5 py-4 text-left">
                Status
              </th>

              <th className="px-5 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {cars.map((car) => (
              <tr
                key={car.id}
                className="border-t border-border"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-20 overflow-hidden rounded-lg">
                      <Image
                        src={car.image_url}
                        alt={car.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {car.name}
                      </h3>

                      <p className="text-sm text-muted">
                        {car.brand}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4">
                  {car.category}
                </td>

                <td className="px-5 py-4">
                  PKR{" "}
                  {Number(
                    car.price_per_day
                  ).toLocaleString()}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      car.is_available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {car.is_available
                      ? "Available"
                      : "Unavailable"}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-center gap-2">
                  <button
  onClick={() => onEdit(car)}
  className="rounded-lg border p-2 hover:bg-gray-100"
>
  <Pencil size={18} />
</button>

<button
  onClick={() => handleDelete(car.id)}
  className="rounded-lg border p-2 text-red-600 transition hover:bg-red-50"
>
  <Trash2 size={18} />
</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}