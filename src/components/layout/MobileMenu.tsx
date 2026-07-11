"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  House,
  Boxes,
  Cpu,
  ShieldCheck,
  BrainCircuit,
  LayoutDashboard,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { siteConfig } from "@/data/site";

const icons: Record<string, React.ReactNode> = {
  "/": <House size={20} />,
  "/architecture": <Boxes size={20} />,
  "/technology": <Cpu size={20} />,
  "/responsible-ai": <ShieldCheck size={20} />,
  "/ai-platform": <BrainCircuit size={20} />,
  "/dashboard": <LayoutDashboard size={20} />,
};

export default function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open
            ? "visible bg-black/40 backdrop-blur-sm"
            : "invisible bg-transparent"
        }`}
        onClick={() => setOpen(false)}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b p-6">

            <div>

              <h2 className="text-2xl font-black">
                OpenMarTech
              </h2>

              <p className="text-sm text-blue-600">
                Enterprise AI Platform
              </p>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              <X />
            </button>

          </div>

          {/* Navigation */}

          <nav className="p-5">

            <div className="space-y-2">

              {siteConfig.navigation.map((item) => {

                const active = pathname === item.href;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 rounded-xl px-4 py-4 font-medium transition

                    ${
                      active
                        ? "bg-blue-600 text-white shadow-lg"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    {icons[item.href]}

                    {item.title}

                  </Link>
                );

              })}

            </div>

            <div className="mt-10 border-t pt-8">

              <Link
                href={siteConfig.github}
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-xl bg-slate-900 px-5 py-4 font-semibold text-white transition hover:bg-black"
              >
                <FaGithub size={20} />
                GitHub
              </Link>

            </div>

          </nav>
        </aside>
      </div>
    </>
  );
}