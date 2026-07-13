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
  const healthy = data.status === "Healthy";

  return (
    <div
      className="
        group
        w-[270px]
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !border-2 !border-white !bg-blue-600 dark:!border-slate-900"
      />

      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
          healthy
            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
            : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
        }`}
      >
        ● {data.status}
      </span>

      <h3
        className="
          mt-5
          text-xl
          font-bold
          leading-tight
          text-slate-900
          transition-colors
          group-hover:text-blue-600

          dark:text-white
          dark:group-hover:text-blue-400
        "
      >
        {data.title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          leading-7
          text-slate-600

          dark:text-slate-400
        "
      >
        {data.subtitle}
      </p>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !border-2 !border-white !bg-blue-600 dark:!border-slate-900"
      />
    </div>
  );
}

export default memo(ArchitectureNode);