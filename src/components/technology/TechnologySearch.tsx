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
        className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search technologies, frameworks, tools..."
        className="
          w-full
          rounded-3xl
          border
          border-slate-300
          bg-white
          py-5
          pl-14
          pr-6
          text-lg
          shadow-sm
          transition
          focus:border-blue-500
          focus:outline-none
          focus:ring-4
          focus:ring-blue-100
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:focus:ring-blue-900/40
        "
      />

    </div>
  );
}