"use client";

import { useState } from "react";

import ArchitectureCanvas from "./ArchitectureCanvas";
import ArchitectureSearch from "./ArchitectureSearch";
import ArchitectureFilters from "./ArchitectureFilters";
import ArchitectureMetrics from "./ArchitectureMetrics";

export default function ArchitectureStudio() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  return (
    <section className="space-y-8 lg:space-y-10">

      {/* Search */}

      <ArchitectureSearch
        search={search}
        setSearch={setSearch}
      />

      {/* Filters */}

      <ArchitectureFilters
        filter={filter}
        setFilter={setFilter}
      />

      {/* Main Studio Card */}

      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-xl
          transition-all
          duration-300

          dark:border-slate-800
          dark:bg-slate-900
          dark:shadow-2xl
        "
      >

        {/* Canvas */}

        <div
          className="
            border-b
            border-slate-200
            bg-slate-50
            transition-colors

            dark:border-slate-800
            dark:bg-slate-950
          "
        >
          <ArchitectureCanvas
            search={search}
            filter={filter}
          />
        </div>

        {/* Metrics */}

        <div
          className="
            bg-white
            p-6
            lg:p-8

            dark:bg-slate-900
          "
        >
          <ArchitectureMetrics />
        </div>

      </div>

    </section>
  );
}