"use client";

import { useState } from "react";

import { technologyData } from "@/data/technologyData";
import { Technology } from "@/types/technology";

import useSearch from "@/hooks/useSearch";

import TechnologyHero from "./TechnologyHero";
import TechnologyToolbar from "./TechnologyToolbar";
import TechnologyGrid from "./TechnologyGrid";
//import TechnologyDrawer from "./TechnologyDrawer";

export default function TechnologyExplorer() {
  const [, setSelected] =
    useState<Technology | null>(null);

  const {
    query,
    setQuery,
    filteredItems,
  } = useSearch(
    technologyData,
    [
      "name",
      "category",
      "description",
      "maturity",
    ]
  );

  return (
    <>
      <TechnologyHero />

      <TechnologyToolbar
        query={query}
        setQuery={setQuery}
      />

      <TechnologyGrid
        technologies={filteredItems}
        onSelect={setSelected}
      />
    </>
  );
}