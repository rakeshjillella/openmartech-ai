"use client";

import { BrainCircuit } from "@/lib/icons";

export default function Loading() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center

        bg-slate-50

        transition-colors
        duration-300

        dark:bg-slate-950
      "
    >
      <div className="text-center">
        {/* Logo */}

        <div
          className="
            relative
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center

            rounded-3xl

            bg-gradient-to-br
            from-blue-600
            to-indigo-600

            text-white

            shadow-2xl
          "
        >
          {/* Outer Pulse */}

          <span
            className="
              absolute
              inset-0

              animate-ping

              rounded-3xl

              bg-blue-500/20
            "
          />

          {/* Logo */}

          <BrainCircuit size={42} />
        </div>

        {/* Brand */}

        <h2
          className="
            mt-8

            text-3xl
            font-black

            tracking-tight

            text-slate-900

            dark:text-white
          "
        >
          OpenMarTech AI
        </h2>

        <p
          className="
            mt-3

            text-slate-600

            dark:text-slate-400
          "
        >
          Building Enterprise Intelligence...
        </p>

        {/* Loading Bar */}

        <div
          className="
            mt-10

            h-2
            w-72

            overflow-hidden

            rounded-full

            bg-slate-200

            dark:bg-slate-800
          "
        >
          <div
            className="
              h-full
              w-1/2

              animate-[loading_1.5s_ease-in-out_infinite]

              rounded-full

              bg-gradient-to-r
              from-blue-500
              via-cyan-400
              to-indigo-600
            "
          />
        </div>

        {/* Caption */}

        <p
          className="
            mt-8

            text-sm

            tracking-widest

            uppercase

            text-slate-500
          "
        >
          Enterprise AI Platform
        </p>
      </div>
    </main>
  );
}