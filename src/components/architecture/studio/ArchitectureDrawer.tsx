"use client";

import Link from "next/link";
import { X } from "lucide-react";

import type { ArchitectureFlowNode } from "@/types/graph";
import { architecture } from "@/data/architecture";

type Props = {
  node: ArchitectureFlowNode | null;
  onClose: () => void;
};

export default function ArchitectureDrawer({
  node,
  onClose,
}: Props) {
  if (!node) return null;

  const metadata = architecture.find(
    (item) => item.id === node.data.id
  );

  if (!metadata) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">

      <aside className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-3xl font-black">
              {metadata.title}
            </h2>

            <p className="mt-2 text-slate-500">
              {metadata.subtitle}
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X />
          </button>

        </div>

        <div className="space-y-8 p-6">

          <div>

            <h3 className="font-bold">
              Description
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {metadata.description}
            </p>

          </div>

          <div>

            <h3 className="font-bold">
              Technologies
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">

              {metadata.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          <div>

            <h3 className="font-bold">
              Inputs
            </h3>

            <p className="mt-2 text-slate-600">
              {metadata.inputs.join(", ") || "None"}
            </p>

          </div>

          <div>

            <h3 className="font-bold">
              Outputs
            </h3>

            <p className="mt-2 text-slate-600">
              {metadata.outputs.join(", ") || "None"}
            </p>

          </div>

          <div className="space-y-3">

            {metadata.docs && (
  <Link
    href={metadata.docs}
    target="_blank"
    className="block rounded-xl border p-4 hover:bg-slate-50"
  >
    Documentation
  </Link>
)}

            <Link
              href={metadata.website}
              target="_blank"
              className="block rounded-xl border p-4 hover:bg-slate-50"
            >
              Official Website
            </Link>

            {metadata.github && (
              <Link
                href={metadata.github}
                target="_blank"
                className="block rounded-xl border p-4 hover:bg-slate-50"
              >
                GitHub Repository
              </Link>
            )}

          </div>

        </div>

      </aside>

    </div>
  );
}