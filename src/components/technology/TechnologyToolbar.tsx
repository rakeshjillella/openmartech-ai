"use client";

import { Search } from "@/lib/icons";
import { RotateCcw, Filter } from "lucide-react";

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

export default function TechnologyToolbar({
  query,
  setQuery,
}: Props) {
  return (
    <section
      className="
        rounded-[30px]
        border
        border-slate-200
        bg-white
        p-6
        shadow-lg
        transition-all
        duration-300

        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* ========================================================= */}
        {/* Search */}
        {/* ========================================================= */}

        <div className="relative flex-1">
          <Search
            size={20}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search technologies..."
            className="
              w-full

              rounded-2xl

              border
              border-slate-300

              bg-white

              py-4
              pl-14
              pr-5

              text-base

              text-slate-900

              shadow-sm

              transition-all
              duration-300

              placeholder:text-slate-400

              focus:border-blue-500
              focus:outline-none
              focus:ring-4
              focus:ring-blue-100

              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
              dark:placeholder:text-slate-500
              dark:focus:ring-blue-900/40
            "
          />
        </div>

        {/* ========================================================= */}
        {/* Actions */}
        {/* ========================================================= */}

        <div className="flex flex-wrap gap-3">
          <button
            className="
              flex
              items-center
              gap-2

              rounded-xl

              border
              border-slate-300

              bg-white

              px-5
              py-3

              font-medium

              text-slate-700

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-500
              hover:bg-slate-50
              hover:text-blue-600
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-300
              dark:hover:border-blue-400
              dark:hover:bg-slate-800
              dark:hover:text-blue-300
            "
          >
            <Filter size={18} />
            Filters
          </button>

          <button
            onClick={() => setQuery("")}
            className="
              flex
              items-center
              gap-2

              rounded-xl

              border
              border-slate-300

              bg-white

              px-5
              py-3

              font-medium

              text-slate-700

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-500
              hover:bg-slate-50
              hover:text-blue-600
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-300
              dark:hover:border-blue-400
              dark:hover:bg-slate-800
              dark:hover:text-blue-300
            "
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}