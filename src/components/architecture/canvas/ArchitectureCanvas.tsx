"use client";

import ArchitectureNode from "./ArchitectureNode";
import { ArchitectureNode as Node } from "@/data/architecture";

type Props = {

  nodes: Node[];

  selected: Node | null;

  onSelect: (node: Node) => void;

};

export default function ArchitectureCanvas({

  nodes,

  selected,

  onSelect,

}: Props) {

  return (

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {nodes.map((node) => (

        <ArchitectureNode

          key={node.id}

          node={node}

          active={selected?.id === node.id}

          onClick={() => onSelect(node)}

        />

      ))}

    </div>

  );

}