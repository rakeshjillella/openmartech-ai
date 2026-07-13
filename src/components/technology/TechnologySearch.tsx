"use client";

import { Search } from "@/lib/icons";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function TechnologySearch({
  search,
  setSearch,
}: Props) {
  return (
    <div className="relative">

      <Search
        size={20}
        className="
          absolute
          left-6
          top-1/2
          -translate-y-1/2
          text-slate-400
          dark:text-slate-500
        "
      />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search technologies, frameworks, platforms..."
        className="
          w-full

          rounded-2xl

          border
          border-slate-300

          bg-white

          py-5
          pl-14
          pr-6

          text-lg

          text-slate-900

          shadow-sm

          outline-none

          transition-all
          duration-300

          placeholder:text-slate-400

          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100

          dark:border-slate-700
          dark:bg-slate-950
          dark:text-white
          dark:placeholder:text-slate-500
          dark:focus:ring-blue-900/30
        "
      />

    </div>
  );
}