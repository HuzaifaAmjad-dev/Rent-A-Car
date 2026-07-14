"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar onMenuOpen={() => setOpen(true)} />

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />

      <main>{children}</main>

      <Footer />
    </>
  );
}