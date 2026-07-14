"use client";

import { ChevronDown } from "@/lib/icons";

interface Props {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function Accordion({
  title,
  open,
  onToggle,
  children,
}: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <button
        type="button"
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between
          px-5
          py-4
          text-left
          font-semibold
          text-slate-900
          transition-colors
          hover:bg-slate-50
          dark:text-white
          dark:hover:bg-slate-800
        "
      >
        {title}

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
              ? "max-h-[1200px]"
              : "max-h-0"
          }
        `}
      >
        <div className="space-y-1 px-3 pb-3">
          {children}
        </div>
      </div>
    </div>
  );
}