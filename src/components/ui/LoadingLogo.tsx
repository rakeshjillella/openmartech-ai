"use client";

import { BrainCircuit } from "@/lib/icons";

export default function LoadingLogo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="
          relative
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-3xl
          bg-gradient-to-br
          from-blue-600
          via-indigo-600
          to-cyan-500
          shadow-2xl
        "
      >
        <div
          className="
            absolute
            inset-0
            animate-ping
            rounded-3xl
            bg-blue-500/30
          "
        />

        <BrainCircuit
          size={42}
          className="relative z-10 text-white"
        />
      </div>

      <h1
        className="
          mt-8
          text-4xl
          font-black
          tracking-tight
          text-slate-900
          dark:text-white
        "
      >
        OpenMarTech AI
      </h1>

      <p
        className="
          mt-3
          text-lg
          text-slate-500
          dark:text-slate-400
        "
      >
        Enterprise Decision Intelligence Platform
      </p>

      <div className="mt-10 flex gap-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.15s]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-500" />
      </div>

      <p
        className="
          mt-8
          text-sm
          tracking-widest
          uppercase
          text-slate-400
        "
      >
        Loading Enterprise AI Platform...
      </p>
    </div>
  );
}