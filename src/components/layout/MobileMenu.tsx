"use client";

import { useEffect, useState } from "react";

import { Menu } from "@/lib/icons";

import MobileMenuDrawer from "./MobileMenuDrawer";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open Navigation Menu"
        onClick={() => setOpen(true)}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-slate-200
          bg-white
          text-slate-700
          shadow-sm
          transition-all
          duration-300
          hover:border-blue-500
          hover:text-blue-600
          hover:shadow-lg
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-slate-200
          dark:hover:border-blue-400
          dark:hover:text-blue-400
        "
      >
        <Menu size={22} />
      </button>

      <MobileMenuDrawer
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}