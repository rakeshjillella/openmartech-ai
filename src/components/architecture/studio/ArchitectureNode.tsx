"use client";

import { memo } from "react";
import { Handle, Position } from "@xyflow/react";

type Props = {
  data: {
    title: string;
    subtitle: string;
    status: string;
  };
};

function ArchitectureNode({ data }: Props) {
  return (
    <div className="w-64 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition hover:shadow-xl">

      <Handle type="target" position={Position.Top} />

      <div
        className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
          data.status === "Healthy"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {data.status}
      </div>

      <h3 className="text-xl font-bold">
        {data.title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {data.subtitle}
      </p>

      <Handle type="source" position={Position.Bottom} />

    </div>
  );
}

export default memo(ArchitectureNode);