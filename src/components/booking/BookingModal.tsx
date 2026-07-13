"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BookingForm from "./BookingForm";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  car: {
    id: string;
    name: string;
    price_per_day: number;
  } | null;
}

export default function BookingModal({
  open,
  onOpenChange,
  car,
}: BookingModalProps) {
  if (!car) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
  className="
    fixed
    bottom-0
    left-0
    right-0
    top-auto
    translate-x-0
    translate-y-0
    rounded-t-3xl
    rounded-b-none
    bg-white
    max-h-[90vh]
    overflow-y-auto
    p-6
    sm:left-1/2
    sm:top-1/2
    sm:right-auto
    sm:bottom-auto
    sm:w-full
    sm:max-w-2xl
    sm:-translate-x-1/2
    sm:-translate-y-1/2
    sm:rounded-2xl
  "
>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Book {car.name}
          </DialogTitle>

          <p className="text-sm text-muted-foreground">
            Price: PKR {car.price_per_day.toLocaleString()} / day
          </p>
        </DialogHeader>

        <BookingForm
          carId={car.id}
          pricePerDay={car.price_per_day}
        />
      </DialogContent>
    </Dialog>
  );
}