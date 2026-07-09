"use client";

import { architectureLayers } from "@/data/architecture";
import ArchitectureLayer from "./ArchitectureLayer";
import ArchitectureConnector from "./ArchitectureConnector";

export default function ArchitectureCanvas() {
  return (
    <div className="space-y-2">
      {architectureLayers.map((layer, index) => (
        <div key={layer.title}>
          <ArchitectureLayer
            title={layer.title}
            technologies={layer.technologies}
          />

          {index < architectureLayers.length - 1 && (
            <ArchitectureConnector />
          )}
        </div>
      ))}
    </div>
  );
}