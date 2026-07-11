"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        flex h-10 w-10 items-center justify-center
        rounded-xl
        border
        border-slate-300
        bg-white
        transition
        hover:bg-slate-100
        dark:border-slate-700
        dark:bg-slate-900
        dark:hover:bg-slate-800
      "
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}