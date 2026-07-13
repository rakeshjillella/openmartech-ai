"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

import {
  BrainCircuit,
  Search,
  FaGithub,
} from "@/lib/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-300

        ${
          scrolled
            ? `
              border-b
              border-slate-200
              bg-white/90
              shadow-lg
              backdrop-blur-xl

              dark:border-slate-800
              dark:bg-slate-950/90
            `
            : `
              bg-white/75
              backdrop-blur-lg

              dark:bg-slate-950/75
            `
        }
      `}
    >
      <div
  className="
    mx-auto
    flex
    h-20
    w-full
    max-w-[1600px]

    items-center
    justify-between

    px-6
    xl:px-12
  "
>
        {/* ---------------- Logo ---------------- */}

        <Link
  href="/"
  className="
    group
    flex
    shrink-0
    items-center
    gap-3
  "
>
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-indigo-600
              text-white
              shadow-lg
              transition-transform
              duration-300

              group-hover:scale-105
              group-hover:rotate-3
            "
          >
            <BrainCircuit size={24} />
          </div>

          <div className="hidden sm:block">
            <h1
              className="
                text-xl
                font-black
                tracking-tight
                text-slate-900

                dark:text-white
              "
            >
              OpenMarTech
            </h1>

            <p
              className="
                text-xs
                font-medium
                text-slate-500

                dark:text-slate-400
              "
            >
              Enterprise AI Platform
            </p>
          </div>
        </Link>

        {/* ---------------- Desktop Navigation ---------------- */}

        {/* Desktop Navigation */}

<div
  className="
    hidden
    flex-1
    items-center
    justify-center

    lg:flex
  "
>
  <DesktopMenu />
</div>

        {/* ---------------- Right Controls ---------------- */}

        <div
  className="
    hidden
    shrink-0
    items-center
    gap-3

    lg:flex
  "
>
          {/* Search */}

          <button
            aria-label="Search"

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
              text-slate-600
              shadow-sm
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-blue-500
              hover:text-blue-600
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-300

              dark:hover:border-blue-400
              dark:hover:text-blue-400
            "
          >
            <Search size={18} />
          </button>

          {/* GitHub */}

          <Link
            href="https://github.com/rakeshjillella/openmartech-ai"
            target="_blank"
            rel="noopener noreferrer"

            className="
              flex
              h-11
              shrink-0
              items-center
              gap-2
              rounded-xl
              bg-slate-900
              px-5
              py-3
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-black
              hover:shadow-xl

              dark:bg-white
              dark:text-slate-900

              dark:hover:bg-slate-200
            "
          >
            <FaGithub size={18} />

            GitHub
          </Link>

          {/* Theme */}

          <ThemeToggle />
        </div>

        {/* ---------------- Mobile ---------------- */}

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}