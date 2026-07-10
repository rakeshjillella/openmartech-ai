"use client";

import { useState } from "react";

import ArchitectureCanvas from "./canvas/ArchitectureCanvas";
import ArchitectureToolbar from "./ArchitectureToolbar";
import ArchitectureDrawer from "./ArchitectureDrawer";

export default function ArchitectureExplorer() {

    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    return (

        <div className="space-y-10">

            <ArchitectureToolbar />

            <ArchitectureCanvas
                selectedNode={selectedNode}
                onSelectNode={setSelectedNode}
            />

            <ArchitectureDrawer
                nodeId={selectedNode}
                onClose={() => setSelectedNode(null)}
            />

        </div>

    );

}