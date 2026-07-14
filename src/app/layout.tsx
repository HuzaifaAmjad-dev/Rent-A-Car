import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/Whatsapp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Hasnain Rent a Car",
    template: "%s | Hasnain Rent a Car",
  },
  description:
    "Reliable and affordable car rental service. Book sedans, SUVs, hatchbacks, luxury cars, and vans with ease.",
  keywords: [
    "Car Rental",
    "Rent a Car",
    "Hasnain Rent a Car",
    "Pakistan Car Rental",
    "SUV Rental",
    "Sedan Rental",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-background text-foreground antialiased`}
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}