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
    <div className="space-y-8">

      <ArchitectureSearch
        search={search}
        setSearch={setSearch}
      />

      <ArchitectureFilters
        filter={filter}
        setFilter={setFilter}
      />

      <ArchitectureCanvas
        search={search}
        filter={filter}
      />

      <ArchitectureMetrics />

    </div>
  );
}