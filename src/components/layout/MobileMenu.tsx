"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import {
  Menu,
  X,
  ChevronDown,
} from "@/lib/icons";

import {
  PlatformMenu,
  ArchitectureMenu,
  ResourceMenu,
} from "./MegaMenu";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const [platformOpen, setPlatformOpen] =
    useState(false);

  const [architectureOpen, setArchitectureOpen] =
    useState(false);

  const [resourcesOpen, setResourcesOpen] =
    useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm lg:hidden"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open
            ? "visible bg-black/40 backdrop-blur-sm"
            : "invisible bg-transparent"
        }`}
        onClick={() => setOpen(false)}
      >
        {/* Drawer */}

        <aside
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-80 overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
            open
              ? "translate-x-0"
              : "translate-x-full"
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

          <nav className="p-5 space-y-3">

            {/* Platform */}

            <Accordion
              title="Platform"
              open={platformOpen}
              onToggle={() =>
                setPlatformOpen(!platformOpen)
              }
            >
              {PlatformMenu.map((item) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  close={() => setOpen(false)}
                />
              ))}
            </Accordion>

            {/* Architecture */}

            <Accordion
              title="Architecture"
              open={architectureOpen}
              onToggle={() =>
                setArchitectureOpen(
                  !architectureOpen
                )
              }
            >
              {ArchitectureMenu.map((item) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  close={() => setOpen(false)}
                />
              ))}
            </Accordion>

            {/* Resources */}

            <Accordion
              title="Resources"
              open={resourcesOpen}
              onToggle={() =>
                setResourcesOpen(!resourcesOpen)
              }
            >
              {ResourceMenu.map((item) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  title={item.title}
                  close={() => setOpen(false)}
                />
              ))}
            </Accordion>

            <div className="border-t pt-4">

              <MobileLink
                href="/about"
                title="About"
                close={() => setOpen(false)}
              />

              <MobileLink
                href="/contact"
                title="Contact"
                close={() => setOpen(false)}
              />

            </div>

          </nav>

        </aside>

      </div>

    </>
  );
}

/* ---------------- Accordion ---------------- */

type AccordionProps = {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

function Accordion({
  title,
  open,
  onToggle,
  children,
}: AccordionProps) {
  return (
    <div className="rounded-xl border">

      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-4 font-semibold"
      >
        {title}

        <ChevronDown
          size={18}
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t bg-slate-50 p-2">
          {children}
        </div>
      )}

    </div>
  );
}

/* ---------------- Mobile Link ---------------- */

type MobileLinkProps = {
  href: string;
  title: string;
  close: () => void;
};

function MobileLink({
  href,
  title,
  close,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={close}
      target={
        href.startsWith("http")
          ? "_blank"
          : undefined
      }
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      className="block rounded-lg px-4 py-3 text-sm transition hover:bg-white hover:text-blue-600"
    >
      {title}
    </Link>
  );
}