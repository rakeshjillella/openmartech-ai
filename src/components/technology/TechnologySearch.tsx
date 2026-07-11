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
        className="absolute left-5 top-4 text-slate-400"
        size={18}
      />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search technologies..."
        className="w-full rounded-2xl border py-4 pl-12 pr-5"
      />
    </div>
  );
}