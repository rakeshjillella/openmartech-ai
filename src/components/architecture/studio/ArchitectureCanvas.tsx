"use client";

import { useMemo, useState } from "react";

import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import {
  architectureNodes,
  architectureEdges,
} from "@/data/architectureGraph";

import ArchitectureNode from "./ArchitectureNode";
import ArchitectureDrawer from "./ArchitectureDrawer";

import type {
  ArchitectureFlowNode,
} from "@/types/graph";

type Props = {
  search: string;
  filter: string;
};

const nodeTypes = {
  architecture: ArchitectureNode,
};

export default function ArchitectureCanvas({
  search,
  filter,
}: Props) {

  const [selectedNode, setSelectedNode] =
    useState<ArchitectureFlowNode | null>(null);

  // ✅ Hook belongs HERE
  const filteredNodes = useMemo(() => {

    return architectureNodes.filter((node) => {

      const matchesSearch =
        search === "" ||
        node.data.title
          .toLowerCase()
          .includes(search.toLowerCase());

      if (filter === "All") {
        return matchesSearch;
      }

      return (
        matchesSearch &&
        (
          node.data.subtitle
            .toLowerCase()
            .includes(filter.toLowerCase()) ||

          node.data.title
            .toLowerCase()
            .includes(filter.toLowerCase())
        )
      );

    });

  }, [search, filter]);

  return (
    <>
      <div className="h-[900px] overflow-hidden rounded-3xl border border-slate-200 bg-white">

        <ReactFlow
  nodes={filteredNodes}
  edges={architectureEdges}
  nodeTypes={nodeTypes}
  fitView
  fitViewOptions={{
    padding: 0.25,
  }}
  minZoom={0.4}
  maxZoom={2}
  attributionPosition="bottom-left"
  onNodeClick={(_, node) =>
    setSelectedNode(node as ArchitectureFlowNode)
  }
>

  <MiniMap
    pannable
    zoomable
    className="rounded-xl border"
  />

  <Controls
    position="bottom-right"
    showInteractive={false}
  />

  <Background
    gap={20}
    size={1}
  />

</ReactFlow>

      </div>

      {selectedNode && (
        <ArchitectureDrawer
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </>
  );
}