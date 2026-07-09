"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden"
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="absolute right-0 h-full w-72 bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b p-5">

              <h2 className="text-xl font-bold">
                OpenMarTech AI
              </h2>

              <button onClick={() => setOpen(false)}>
                <X size={26} />
              </button>

            </div>

            <nav className="flex flex-col">

              {siteConfig.navigation.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b px-6 py-5 text-lg hover:bg-slate-100"
                >
                  {item.title}
                </Link>

              ))}

            </nav>

          </div>
        </div>
      )}
    </>
  );
}