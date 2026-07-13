"use client";

import { useState } from "react";
import { Car } from "@/types/car";
import CarTable from "./CarTable";
import CarFormModal from "./CarFormModal";

interface CarsManagementProps {
  cars: Car[];
}

export default function CarsManagement({
  cars,
}: CarsManagementProps) {
    const [open, setOpen] = useState(false);

    const [selectedCar, setSelectedCar] =
      useState<Car | null>(null);

  return (
    <>
      <div>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Cars Management
            </h1>

            <p className="mt-2 text-muted">
              Manage your rental fleet.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Add Car
          </button>
        </div>

        <CarTable
          cars={cars}
          onEdit={(car) => {
            setSelectedCar(car);
            setOpen(true);
          }}
        />
      </div>

      <CarFormModal
  open={open}
  onOpenChange={(value) => {
    setOpen(value);

    if (!value) {
      setSelectedCar(null);
    }
  }}
  car={selectedCar}
/>
    </>
  );
}