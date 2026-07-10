"use client";

import { useState } from "react";

import {
  architectureNodes,
  ArchitectureNode as Node,
} from "@/data/architecture";

import useSearch from "@/hooks/useSearch";
import ArchitectureToolbar from "./ArchitectureToolbar";
import ArchitectureCanvas from "./canvas/ArchitectureCanvas";
import ArchitectureDrawer from "./ArchitectureDrawer";

export default function ArchitectureExplorer() {

  const [selected, setSelected] =
    useState<Node | null>(null);

  const {
  query,
  setQuery,
  filteredItems: filteredNodes,
} = useSearch(
  architectureNodes,
  [
    "title",
    "subtitle",
    "category",
    "technologies",
  ]
);

const [activeLayer, setActiveLayer] =
  useState("All");

const visibleNodes =
  activeLayer === "All"

    ? filteredNodes

    : filteredNodes.filter(
        (node) => node.layer === activeLayer
      );

  return (
    <>

      <ArchitectureToolbar

  query={query}

  setQuery={setQuery}

  activeLayer={activeLayer}

  setActiveLayer={setActiveLayer}

/>

      <ArchitectureCanvas

  nodes={visibleNodes}

  selected={selected}

  onSelect={setSelected}

/>

      <ArchitectureDrawer

        node={selected}

        onClose={() => setSelected(null)}

      />

    </>
  );
}