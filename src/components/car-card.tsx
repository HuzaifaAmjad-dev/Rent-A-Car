"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Fuel,
  Settings2,
  ArrowRight,
} from "lucide-react";

interface CarCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  seats: number;
  transmission: string;
  fuel: string;
  bookingHref?: string;
  onBook?: () => void;
}

export default function CarCard({
  name,
  image,
  price,
  seats,
  transmission,
  fuel,
  bookingHref,
  onBook,
}: CarCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-56">
      <Image
  src={
    image && image.trim() !== ""
      ? image
      : "/images/car-placeholder.jpg"
  }
  alt={name}
  fill
  className="object-cover"
/>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <p className="mt-3 text-3xl font-bold text-primary">
          PKR {price.toLocaleString()}
          <span className="text-base font-normal text-muted">
            {" "}
            / day
          </span>
        </p>

        <div className="my-6 grid grid-cols-3 gap-3 text-sm text-muted">
          <div className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 p-3">
            <Users size={18} />
            <span>{seats}</span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 p-3">
            <Settings2 size={18} />
            <span>{transmission}</span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 p-3">
            <Fuel size={18} />
            <span>{fuel}</span>
          </div>
        </div>

        {bookingHref ? (
          <Link
            href={bookingHref}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 font-semibold text-white transition hover:bg-accent-hover"
          >
            Book Now
            <ArrowRight size={18} />
          </Link>
        ) : (
          <button
            onClick={onBook}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 font-semibold text-white transition hover:bg-accent-hover"
          >
            Book Now
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}