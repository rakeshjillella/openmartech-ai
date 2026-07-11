"use client";

import {
  Search,
  Maximize,
  RotateCcw,
} from "lucide-react";

type Props = {
  onFit: () => void;
  onReset: () => void;
};

export default function ArchitectureToolbar({
  onFit,
  onReset,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">

      <button
        onClick={onFit}
        className="flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-slate-50"
      >
        <Maximize size={18} />
        Fit View
      </button>

      <button
        onClick={onReset}
        className="flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-slate-50"
      >
        <RotateCcw size={18} />
        Reset
      </button>

      <div className="flex items-center gap-2 rounded-xl border px-4 py-2 text-slate-500">

        <Search size={18} />

        Ctrl + K

      </div>

    </div>
  );
}