import { Edge, Node } from "@xyflow/react";

export interface ArchitectureNodeData extends Record<string, unknown> {
  title: string;
  subtitle: string;
  status?: string; // optional
}

export type ArchitectureFlowNode = Node<ArchitectureNodeData>;

export type ArchitectureFlowEdge = Edge;