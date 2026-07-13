"use client";

import { useState } from "react";
import CarCard from "@/components/car-card";
import BookingModal from "./BookingModal";
import { Car } from "@/types/car";

interface BookingCarsGridProps {
  cars: Car[];
}

export default function BookingCarsGrid({
  cars,
}: BookingCarsGridProps) {
  const [selectedCar, setSelectedCar] =
    useState<Car | null>(null);

  const [open, setOpen] = useState(false);

  if (cars.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border py-20 text-center">
        <h2 className="text-2xl font-semibold">
          No Cars Found
        </h2>

        <p className="mt-3 text-muted">
          There are currently no vehicles available.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            name={car.name}
            image={car.image_url}
            price={Number(car.price_per_day)}
            seats={car.seats}
            transmission={car.transmission}
            fuel={car.fuel_type}
            onBook={() => {
              setSelectedCar(car);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <BookingModal
        open={open}
        onOpenChange={setOpen}
        car={
          selectedCar
            ? {
                id: selectedCar.id,
                name: selectedCar.name,
                price_per_day: Number(
                  selectedCar.price_per_day
                ),
              }
            : null
        }
      />
    </>
  );
}