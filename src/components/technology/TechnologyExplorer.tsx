"use client";

import { useState } from "react";

import TechnologySearch from "./TechnologySearch";
import TechnologyCategories from "./TechnologyCategories";
import TechnologyGrid from "./TechnologyGrid";
import TechnologyStats from "./TechnologyStats";

export default function TechnologyExplorer() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <section className="space-y-12">
      {/* Statistics */}

      <TechnologyStats />

      {/* Search + Filters */}

      <div
        className="
          rounded-[32px]

          border
          border-slate-200

          bg-white

          p-8

          shadow-xl

          transition-all
          duration-300

          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        <TechnologySearch
          search={search}
          setSearch={setSearch}
        />

        <div className="mt-10">
          <TechnologyCategories
            category={category}
            setCategory={setCategory}
          />
        </div>
      </div>

      {/* Technology Grid */}

      <TechnologyGrid
        search={search}
        category={category}
      />
    </section>
  );
}