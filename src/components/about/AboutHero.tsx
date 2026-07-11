"use client";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  Cpu,
  ShieldCheck,
} from "@/lib/icons";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-10 py-28 text-white shadow-2xl dark:border-slate-800">

      {/* Glow */}

      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="inline-flex items-center gap-3 rounded-full border border-blue-700 bg-blue-900/40 px-5 py-2 text-sm font-semibold text-blue-300">

            <BrainCircuit size={18} />

            Enterprise AI Engineer

          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight md:text-7xl">

            Building
            <span className="block text-blue-400">
              Intelligent
            </span>
            Enterprise Platforms

          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-slate-300">

            OpenMarTech AI showcases a complete production-inspired
            Enterprise AI ecosystem combining Data Engineering,
            Lakehouse Architecture, Streaming Analytics, Responsible AI,
            Explainable AI, MLOps and Executive Intelligence.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/architecture"
              className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-2xl"
            >
              Explore Architecture
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-2xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Contact Me

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          <div className="rounded-3xl border border-slate-700 bg-white/5 p-8 backdrop-blur">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-600 p-4">
                <Database size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Data Engineering
                </h3>

                <p className="text-slate-400">
                  Streaming • Lakehouse • ETL
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-slate-700 bg-white/5 p-8 backdrop-blur">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-cyan-600 p-4">
                <Cpu size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  AI Engineering
                </h3>

                <p className="text-slate-400">
                  MLflow • RAG • LLMOps
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-slate-700 bg-white/5 p-8 backdrop-blur">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-green-600 p-4">
                <ShieldCheck size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Responsible AI
                </h3>

                <p className="text-slate-400">
                  Explainability • Governance • Trust
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}