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
        size={18}
        className="absolute left-4 top-4 text-slate-400"
      />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search technologies..."
        className="w-full rounded-2xl border bg-white py-4 pl-12 pr-4"
      />

    </div>
  );
}