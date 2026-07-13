"use client";

import { useMemo, useState } from "react";

import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import {
  architectureNodes,
  architectureEdges,
} from "@/data/architectureGraph";

import ArchitectureNode from "./ArchitectureNode";
import ArchitectureDrawer from "./ArchitectureDrawer";

import type { ArchitectureFlowNode } from "@/types/ArchitectureFlow";

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

      <div
        className="
          h-[850px]
          w-full

          overflow-hidden

          bg-white

          transition-colors
          duration-300

          dark:bg-slate-950
        "
      >

        <ReactFlow
          nodes={filteredNodes}
          edges={architectureEdges}
          nodeTypes={nodeTypes}

          fitView

          fitViewOptions={{
            padding: 0.35,
          }}

          minZoom={0.45}
          maxZoom={1.6}

          attributionPosition="bottom-left"

          onNodeClick={(_, node) =>
  setSelectedNode(node)
}

          className="
            bg-slate-50

            dark:bg-slate-950
          "
        >

          <MiniMap
            zoomable
            pannable

            className="
              !rounded-2xl
              !border
              !border-slate-200
              !bg-white

              dark:!border-slate-700
              dark:!bg-slate-900
            "

            nodeColor="#2563eb"

            maskColor="rgba(0,0,0,0.08)"
          />

          <Controls
            showInteractive={false}

            className="
              !rounded-2xl
              !border
              !border-slate-200
              !bg-white

              dark:!border-slate-700
              dark:!bg-slate-900
            "
          />

          <Background
            variant={BackgroundVariant.Dots}
            gap={24}
            size={1.5}
            color="#CBD5E1"
          />

        </ReactFlow>

      </div>

      {selectedNode && (

        <ArchitectureDrawer
          node={selectedNode}
          onClose={() =>
            setSelectedNode(null)
          }
        />

      )}

    </>
  );
}