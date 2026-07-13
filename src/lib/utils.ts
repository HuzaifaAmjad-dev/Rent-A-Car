import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateDays(start: Date, end: Date) {
  const difference = end.getTime() - start.getTime();
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return Math.max(days, 1);
}