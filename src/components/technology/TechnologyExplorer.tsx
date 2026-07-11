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
    <div className="space-y-8">

      <TechnologyStats />

      <TechnologySearch
        search={search}
        setSearch={setSearch}
      />

      <TechnologyCategories
        category={category}
        setCategory={setCategory}
      />

      <TechnologyGrid
        search={search}
      />

    </div>
  );
}