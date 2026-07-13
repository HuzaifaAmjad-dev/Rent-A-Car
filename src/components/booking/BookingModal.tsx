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
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
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