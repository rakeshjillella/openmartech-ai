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
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        aria-label="Open navigation menu"
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

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-[100]

          transition-all
          duration-300

          ${
            open
              ? "visible bg-black/50 backdrop-blur-sm"
              : "invisible bg-transparent"
          }
        `}
      >
        {/* Drawer */}

        <aside
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute
            right-0
            top-0

            flex
            h-full
            w-[340px]
            max-w-[90vw]
            flex-col

            border-l
            border-slate-200

            bg-white

            shadow-2xl

            transition-transform
            duration-300

            dark:border-slate-800
            dark:bg-slate-950

            ${
              open
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >
          {/* Header */}

          <div
            className="
              flex
              items-center
              justify-between

              border-b
              border-slate-200

              px-6
              py-5

              dark:border-slate-800
            "
          >
            <div>

              <h2
                className="
                  text-2xl
                  font-black
                  text-slate-900

                  dark:text-white
                "
              >
                OpenMarTech
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-blue-600

                  dark:text-blue-400
                "
              >
                Enterprise AI Platform
              </p>

            </div>

            <button
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              className="
                rounded-xl
                p-2

                transition

                hover:bg-slate-100

                dark:hover:bg-slate-800
              "
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation */}

          <nav
            className="
              flex-1
              overflow-y-auto
              px-5
              py-6
              space-y-4
            "
          >            
          
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
                  description={item.description}
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
                  description={item.description}
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
                  description={item.description}
                  close={() => setOpen(false)}
                />
              ))}
            </Accordion>

            {/* Divider */}

            <div className="my-4 border-t border-slate-200 dark:border-slate-800" />

            {/* About */}

            <MobileLink
              href="/about"
              title="About"
              description="Professional profile, experience and vision."
              close={() => setOpen(false)}
            />

            {/* Contact */}

            <MobileLink
              href="/contact"
              title="Contact"
              description="Let's connect and build Enterprise AI together."
              close={() => setOpen(false)}
            />

          </nav>

          {/* Footer */}

          <div
            className="
              border-t
              border-slate-200

              px-6
              py-5

              dark:border-slate-800
            "
          >
            <p
              className="
                text-center
                text-xs
                text-slate-500

                dark:text-slate-400
              "
            >
              OpenMarTech AI
            </p>

            <p
              className="
                mt-1
                text-center
                text-xs
                text-slate-400
              "
            >
              Enterprise Decision Intelligence Platform
            </p>
          </div>

        </aside>

      </div>

    </>
  );
}

/* ============================================================
   Accordion
============================================================ */

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
    <div
      className="
        overflow-hidden

        rounded-2xl

        border
        border-slate-200

        bg-white

        transition-all
        duration-300

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-label={title}

        className="
          flex
          w-full
          items-center
          justify-between

          px-5
          py-4

          font-semibold

          text-slate-900

          transition-all
          duration-300

          hover:bg-blue-50
          hover:text-blue-600

          dark:text-white
          dark:hover:bg-slate-800
          dark:hover:text-blue-400
        "
      >
        <span>{title}</span>

        <ChevronDown
          size={18}
          className={`
            transition-transform
            duration-300

            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300

          ${
            open
              ? "max-h-[700px]"
              : "max-h-0"
          }
        `}
      >
        <div
          className="
            border-t
            border-slate-200

            bg-slate-50

            p-2

            dark:border-slate-700
            dark:bg-slate-950
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Mobile Link
============================================================ */

type MobileLinkProps = {
  href: string;
  title: string;
  description?: string;
  close: () => void;
};

function MobileLink({
  href,
  title,
  description,
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
      className="
        group

        block

        rounded-xl

        px-4
        py-3

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:bg-white
        hover:shadow-md

        dark:hover:bg-slate-900
      "
    >
      <h4
        className="
          font-semibold

          text-slate-900

          transition-colors
          duration-300

          group-hover:text-blue-600

          dark:text-white
          dark:group-hover:text-blue-400
        "
      >
        {title}
      </h4>

      {description && (
        <p
          className="
            mt-1

            text-sm
            leading-6

            text-slate-500

            dark:text-slate-400
          "
        >
          {description}
        </p>
      )}
    </Link>
  );
}