"use client";

import { useState } from "react";

import SectionHeader from "@/components/ui/SectionHeader";

import ArchitectureCanvas from "./ArchitectureCanvas";
import ArchitectureSearch from "./ArchitectureSearch";
import ArchitectureToolbar from "./ArchitectureToolbar";
import ArchitectureFilters from "./ArchitectureFilters";
import ArchitectureMetrics from "./ArchitectureMetrics";
import ArchitectureLegend from "./ArchitectureLegend";

export default function ArchitectureStudio() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  return (
    <section className="space-y-12">

      {/* Header */}

      <SectionHeader
        eyebrow="Enterprise Architecture"
        title="Interactive AI Platform Architecture"
        description="Explore the complete OpenMarTech AI enterprise ecosystem with an interactive architecture diagram, searchable components, and production-ready technology stack."
      />

      {/* Metrics */}

      <ArchitectureMetrics />

      {/* Toolbar */}

      <ArchitectureToolbar
        onFit={() => window.location.reload()}
        onReset={() => {
          setSearch("");
          setFilter("All");
        }}
      />

      {/* Search */}

      <ArchitectureSearch
        value={search}
        onChange={setSearch}
      />

      {/* Filters */}

      <ArchitectureFilters
        active={filter}
        setActive={setFilter}
      />

      {/* Interactive Canvas */}

      <ArchitectureCanvas
        search={search}
        filter={filter}
      />

      {/* Legend */}

      <ArchitectureLegend />

    </section>
  );
}