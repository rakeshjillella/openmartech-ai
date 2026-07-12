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

    <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:flex-row lg:items-center lg:justify-between">

      <div className="relative flex-1">

        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
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
            py-4
            pl-14
            pr-5
            transition
            focus:border-blue-500
            focus:outline-none
            focus:ring-4
            focus:ring-blue-100
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
          "
        />

      </div>

      <div className="flex gap-3">

        <button
          className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          <Filter size={18} />
          Filters
        </button>

        <button
          onClick={() => setQuery("")}
          className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          <RotateCcw size={18} />
          Reset
        </button>

      </div>

    </div>

  );
}