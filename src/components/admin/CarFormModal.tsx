"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CarForm from "./CarForm";
import { Car } from "@/types/car";

interface CarFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  car?: Car | null;
}

export default function CarFormModal({
  open,
  onOpenChange,
  car,
}: CarFormModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {car ? "Edit Car" : "Add New Car"}
          </DialogTitle>
        </DialogHeader>

        <CarForm
          car={car}
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}