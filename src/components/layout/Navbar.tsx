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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/90 shadow-lg backdrop-blur-xl"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
            <BrainCircuit size={24} />
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight">
              OpenMarTech
            </h1>
            <p className="-mt-1 text-xs text-slate-500">
              Enterprise AI Platform
            </p>
          </div>
        </Link>

        {/* Main Desktop Navigation */}
        <DesktopMenu />

        {/* Right Side Controls */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Search */}
          <button
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
              transition
              hover:border-blue-300
              hover:text-blue-600
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
              items-center
              gap-2
              rounded-xl
              bg-slate-900
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-black
            "
          >
            <FaGithub size={18} />
            GitHub
          </Link>

          {/* Theme Switcher Only */}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}