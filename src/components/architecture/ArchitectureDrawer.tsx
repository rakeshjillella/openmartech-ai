"use client";

import Link from "next/link";
import { ArchitectureNode } from "@/data/architecture";

type Props = {

  node: ArchitectureNode | null;

  onClose: () => void;

};

export default function ArchitectureDrawer({

  node,

  onClose,

}: Props) {

  if (!node) return null;

  return (

    <div className="fixed inset-0 z-50 flex">

      {/* Overlay */}

      <div

        className="flex-1 bg-black/40"

        onClick={onClose}

      />

      {/* Drawer */}

      <div className="w-full max-w-lg overflow-y-auto bg-white p-8 shadow-2xl">

        <button

          onClick={onClose}

          className="mb-6 rounded-lg border px-4 py-2"

        >

          Close

        </button>

        <div className="text-5xl">

          {node.icon}

        </div>

        <h2 className="mt-5 text-3xl font-black">

          {node.title}

        </h2>

        <p className="mt-3 text-slate-500">

          {node.subtitle}

        </p>

        <p className="mt-8 leading-8 text-slate-700">

          {node.description}

        </p>

        <div className="mt-10">

          <h3 className="mb-4 font-bold">

            Technologies

          </h3>

          <div className="flex flex-wrap gap-2">

            {node.technologies.map((tech) => (

              <span

                key={tech}

                className="rounded-full bg-blue-100 px-3 py-1 text-sm"

              >

                {tech}

              </span>

            ))}

          </div>

        </div>

        <div className="mt-10">

          <Link

            href={node.documentation}

            target="_blank"

            className="font-semibold text-blue-600"

          >

            Official Documentation →

          </Link>

        </div>

      </div>

    </div>

  );

}