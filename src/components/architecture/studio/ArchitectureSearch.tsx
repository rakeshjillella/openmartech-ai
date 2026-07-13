"use client";

import { Search } from "@/lib/icons";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function ArchitectureSearch({
  search,
  setSearch,
}: Props) {
  return (
    <div className="relative">

      <Search
        size={20}
        className="
          pointer-events-none
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-slate-400
          transition-colors
          dark:text-slate-500
        "
      />

      <input
        type="text"
        aria-label="Search architecture technologies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search technologies, services, pipelines..."
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
          placeholder:text-slate-400

          shadow-sm

          transition-all
          duration-300

          focus:border-blue-500
          focus:outline-none
          focus:ring-4
          focus:ring-blue-100

          hover:border-slate-400

          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:placeholder:text-slate-500
          dark:hover:border-slate-600
          dark:focus:border-blue-400
          dark:focus:ring-blue-900/30
        "
      />

    </div>
  );
}