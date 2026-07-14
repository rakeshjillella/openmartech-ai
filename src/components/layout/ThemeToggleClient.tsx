"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "@/lib/icons";

export default function ThemeToggleClient() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
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
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}