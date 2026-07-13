"use client";

import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "@/lib/icons";

import { architecture } from "@/data/architecture";
import type { ArchitectureFlowNode } from "@/types/ArchitectureFlow";

type Props = {
  node: ArchitectureFlowNode | null;
  onClose: () => void;
};

export default function ArchitectureDrawer({
  node,
  onClose,
}: Props) {
  if (!node) return null;

  // ✅ Use node.id instead of node.data.id
  const metadata = architecture.find(
    (item) => item.id === node.id
  );

  if (!metadata) return null;

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex justify-end
        bg-black/50
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className="
          flex h-full w-full max-w-xl flex-col
          overflow-hidden
          border-l
          border-slate-200
          bg-white
          shadow-2xl
          transition-all
          duration-300
          dark:border-slate-800
          dark:bg-slate-950
        "
      >
        {/* Header */}

        <div
          className="
            flex items-start justify-between
            border-b
            border-slate-200
            px-8 py-7
            dark:border-slate-800
          "
        >
          <div>

            <span
              className="
                inline-flex
                rounded-full
                bg-blue-100
                px-3 py-1
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-blue-700
                dark:bg-blue-900/30
                dark:text-blue-300
              "
            >
              {metadata.subtitle}
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              {metadata.title}
            </h2>

          </div>

          <button
            onClick={onClose}
            aria-label="Close Drawer"
            className="
              rounded-xl
              p-2
              text-slate-500
              transition-all
              hover:bg-slate-100
              hover:text-slate-900
              dark:text-slate-400
              dark:hover:bg-slate-800
              dark:hover:text-white
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <div className="flex-1 overflow-y-auto px-8 py-8">

          {/* Description */}

          <section className="mb-10">

            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
              Description
            </h3>

            <p className="leading-8 text-slate-600 dark:text-slate-400">
              {metadata.description}
            </p>

          </section>

          {/* Technologies */}

          <section className="mb-10">

            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">

              {metadata.technologies.map((tech) => (

                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-blue-200
                    bg-blue-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-700
                    dark:border-blue-800
                    dark:bg-blue-900/20
                    dark:text-blue-300
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </section>

          {/* Inputs */}

          <section className="mb-10">

            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
              Inputs
            </h3>

            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-5
                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <p className="leading-7 text-slate-600 dark:text-slate-400">
                {metadata.inputs.length
                  ? metadata.inputs.join(", ")
                  : "None"}
              </p>
            </div>

          </section>

          {/* Outputs */}

          <section className="mb-10">

            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
              Outputs
            </h3>

            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-5
                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <p className="leading-7 text-slate-600 dark:text-slate-400">
                {metadata.outputs.length
                  ? metadata.outputs.join(", ")
                  : "None"}
              </p>
            </div>

          </section>

          {/* Resources */}

          <section>

            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
              Resources
            </h3>

            <div className="space-y-4">

              {metadata.docs && (
                <Link
                  href={metadata.docs}
                  target="_blank"
                  className="
                    flex items-center justify-between
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:shadow-lg
                    dark:border-slate-700
                    dark:bg-slate-900
                  "
                >
                  <span className="font-medium text-slate-900 dark:text-white">
                    Documentation
                  </span>

                  <ExternalLink
                    size={18}
                    className="text-blue-600"
                  />
                </Link>
              )}

              <Link
                href={metadata.website}
                target="_blank"
                className="
                  flex items-center justify-between
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:shadow-lg
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                <span className="font-medium text-slate-900 dark:text-white">
                  Official Website
                </span>

                <ExternalLink
                  size={18}
                  className="text-blue-600"
                />
              </Link>

              {metadata.github && (
                <Link
                  href={metadata.github}
                  target="_blank"
                  className="
                    flex items-center justify-between
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:shadow-lg
                    dark:border-slate-700
                    dark:bg-slate-900
                  "
                >
                  <span className="font-medium text-slate-900 dark:text-white">
                    GitHub Repository
                  </span>

                  <FaGithub
                    size={18}
                    className="text-blue-600"
                  />
                </Link>
              )}

            </div>

          </section>

        </div>
      </aside>
    </div>
  );
}