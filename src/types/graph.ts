import { Node, Edge } from "@xyflow/react";

export interface ArchitectureNodeData extends Record<string, unknown> {
  title: string;
  subtitle: string;
  status: string;
}

export type ArchitectureFlowNode = Node<ArchitectureNodeData>;

export type ArchitectureFlowEdge = Edge;