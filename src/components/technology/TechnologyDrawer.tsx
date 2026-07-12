"use client";

import Image from "next/image";

import { X, ExternalLink } from "@/lib/icons";

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

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-8 backdrop-blur-sm">

      <div className="relative w-full max-w-4xl overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">

        {/* Hero */}

        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-700 p-10 text-white">

          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-xl bg-white/10 p-2 transition hover:bg-white/20"
          >
            <X />
          </button>

          <div className="flex items-center gap-8">

            <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-xl">

              <Image
                src={technology.logo}
                alt={technology.name}
                width={70}
                height={70}
              />

            </div>

            <div>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                {technology.category}
              </span>

              <h2 className="mt-5 text-5xl font-black">
                {technology.name}
              </h2>

              <div className="mt-5 inline-flex rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold">
                {technology.maturity}
              </div>

            </div>

          </div>

        </div>

        {/* Body */}

        <div className="space-y-10 p-10">

          <section>

            <h3 className="text-2xl font-bold dark:text-white">
              Overview
            </h3>

            <p className="mt-5 text-lg leading-9 text-slate-600 dark:text-slate-400">
              {technology.description}
            </p>

          </section>

          <section>

            <h3 className="text-2xl font-bold dark:text-white">
              Resources
            </h3>

            <div className="mt-6 grid gap-5">

              <a
                href={technology.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-500 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Official Website
                <ExternalLink size={18} />
              </a>

              <a
                href={technology.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-500 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Documentation
                <ExternalLink size={18} />
              </a>

              <a
                href={technology.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-500 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                GitHub Repository
                <ExternalLink size={18} />
              </a>

            </div>

          </section>

        </div>

      </div>

    </div>

  );

}