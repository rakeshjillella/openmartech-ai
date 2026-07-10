"use client";

import Image from "next/image";
import { Technology } from "@/types/technology";

type Props = {
  technology: Technology | null;
  onClose: () => void;
};

export default function TechnologyDrawer({
  technology,
  onClose,
}: Props) {
  if (!technology) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">

      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-10 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-3xl text-slate-400 transition hover:text-slate-700"
        >
          ×
        </button>

        <div className="flex items-center gap-6">

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">

            <Image
              src={technology.logo}
              alt={technology.name}
              width={60}
              height={60}
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              {technology.name}
            </h2>

            <p className="mt-2 text-slate-500">
              {technology.category}
            </p>

            <span className="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
              {technology.maturity}
            </span>

          </div>

        </div>

        <p className="mt-8 leading-8 text-slate-600">
          {technology.description}
        </p>

        <div className="mt-10 grid gap-4">

          <a
            href={technology.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            🌐 Official Website
          </a>

          <a
            href={technology.documentation}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            📘 Documentation
          </a>

          <a
            href={technology.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            💻 GitHub Repository
          </a>

        </div>

      </div>

    </div>
  );
}