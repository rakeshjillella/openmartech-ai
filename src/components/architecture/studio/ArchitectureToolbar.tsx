"use client";

import {
  Search,
  Maximize,
  RotateCcw,
} from "lucide-react";

type Props = {
  onFit: () =>void;
  onReset: () =>void;
};

export default function ArchitectureToolbar({
  onFit,
  onReset,
}: Props) {
  return (
    <section>

      <div
        className="
          flex
          flex-wrap
          items-center
          gap-4
        "
      >

        {/* Fit View */}

        <button
          onClick={onFit}
          className="
            inline-flex
            items-center
            gap-2

            rounded-2xl

            border
            border-slate-300

            bg-white

            px-5
            py-3

            text-sm
            font-semibold
            text-slate-700

            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-blue-500
            hover:bg-blue-50
            hover:text-blue-600
            hover:shadow-lg

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-300
            dark:hover:border-blue-500
            dark:hover:bg-slate-800
            dark:hover:text-blue-400
          "
        >
          <Maximize size={18} />
          Fit View
        </button>

        {/* Reset */}

        <button
          onClick={onReset}
          className="
            inline-flex
            items-center
            gap-2

            rounded-2xl

            border
            border-slate-300

            bg-white

            px-5
            py-3

            text-sm
            font-semibold
            text-slate-700

            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-blue-500
            hover:bg-blue-50
            hover:text-blue-600
            hover:shadow-lg

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-300
            dark:hover:border-blue-500
            dark:hover:bg-slate-800
            dark:hover:text-blue-400
          "
        >
          <RotateCcw size={18} />
          Reset
        </button>

        {/* Shortcut */}

        <div
          className="
            ml-auto

            inline-flex
            items-center
            gap-3

            rounded-2xl

            border
            border-slate-300

            bg-slate-50

            px-5
            py-3

            text-sm
            font-medium
            text-slate-500

            dark:border-slate-700
            dark:bg-slate-800
            dark:text-slate-400
          "
        >
          <Search size={18} />

          <span>Ctrl + K</span>
        </div>

      </div>

    </section>
  );
}