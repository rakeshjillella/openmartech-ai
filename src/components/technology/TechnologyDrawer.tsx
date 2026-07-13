"use client";

import Image from "next/image";

import { X, ExternalLink } from "@/lib/icons";

import type { Technology } from "@/types/technology";

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
    <div
      className="
        fixed
        inset-0
        z-[100]

        flex
        items-center
        justify-center

        bg-black/60
        p-4
        backdrop-blur-md

        md:p-8
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative

          flex
          max-h-[92vh]
          w-full
          max-w-5xl
          flex-col

          overflow-hidden

          rounded-[36px]

          border
          border-slate-200

          bg-white

          shadow-[0_30px_80px_rgba(0,0,0,0.25)]

          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        {/* ===================================================== */}
        {/* Header */}
        {/* ===================================================== */}

        <div
          className="
            relative

            overflow-hidden

            bg-gradient-to-r
            from-blue-700
            via-cyan-600
            to-indigo-700

            px-8
            py-10

            text-white

            md:px-12
            md:py-12
          "
        >
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-[120px]" />

          <button
            onClick={onClose}
            className="
              absolute
              right-6
              top-6

              rounded-xl

              bg-white/10

              p-3

              transition-all

              hover:bg-white/20
            "
          >
            <X size={22} />
          </button>

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
            <div
              className="
                flex
                h-28
                w-28
                items-center
                justify-center

                rounded-3xl

                bg-white

                shadow-xl
              "
            >
              <Image
                src={technology.logo}
                alt={technology.name}
                width={72}
                height={72}
              />
            </div>

            <div className="flex-1">
              <span
                className="
                  inline-flex

                  rounded-full

                  bg-white/15

                  px-4
                  py-2

                  text-sm
                  font-semibold

                  backdrop-blur
                "
              >
                {technology.category}
              </span>

              <h2
                className="
                  mt-5

                  text-4xl
                  font-black

                  md:text-5xl
                "
              >
                {technology.name}
              </h2>

              <div
                className="
                  mt-5

                  inline-flex

                  rounded-full

                  bg-green-500/20

                  px-4
                  py-2

                  text-sm
                  font-semibold

                  text-green-100
                "
              >
                {technology.maturity}
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* Body */}
        {/* ===================================================== */}

        <div
          className="
            flex-1

            overflow-y-auto

            p-8

            md:p-10
          "
        >
          <div className="space-y-10">
            {/* Overview */}

            <section>
              <h3
                className="
                  text-2xl
                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                Overview
              </h3>

              <p
                className="
                  mt-5

                  text-lg
                  leading-9

                  text-slate-600

                  dark:text-slate-400
                "
              >
                {technology.description}
              </p>
            </section>

            {/* Resources */}

            <section>
              <h3
                className="
                  text-2xl
                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                Resources
              </h3>

              <div className="mt-6 grid gap-5">
                <a
                  href={technology.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    border
                    border-slate-200

                    bg-white

                    p-5

                    transition-all

                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:bg-slate-50
                    hover:shadow-lg

                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:hover:bg-slate-800
                  "
                >
                  <span className="font-semibold">
                    Official Website
                  </span>

                  <ExternalLink size={18} />
                </a>

                <a
                  href={technology.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    border
                    border-slate-200

                    bg-white

                    p-5

                    transition-all

                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:bg-slate-50
                    hover:shadow-lg

                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:hover:bg-slate-800
                  "
                >
                  <span className="font-semibold">
                    Documentation
                  </span>

                  <ExternalLink size={18} />
                </a>

                <a
                  href={technology.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    border
                    border-slate-200

                    bg-white

                    p-5

                    transition-all

                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:bg-slate-50
                    hover:shadow-lg

                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:hover:bg-slate-800
                  "
                >
                  <span className="font-semibold">
                    GitHub Repository
                  </span>

                  <ExternalLink size={18} />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}