import Link from "next/link";
import { ArrowRight, BrainCircuit } from "@/lib/icons";

export default function AIHero() {
  return (
    <section className="rounded-[36px] bg-gradient-to-r from-indigo-900 via-blue-800 to-slate-900 px-10 py-24 text-white">

      <div className="max-w-5xl">

        <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2">

          <BrainCircuit size={20} />

          Enterprise AI Platform

        </div>

        <h1 className="mt-8 text-6xl font-black leading-tight">

          Building Production Grade

          <span className="block text-blue-300">
            Enterprise AI Systems
          </span>

        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">

          OpenMarTech AI integrates orchestration,
          streaming,
          lakehouse,
          MLOps,
          Responsible AI,
          RAG,
          and enterprise observability into a unified platform.

        </p>

        <Link
          href="/architecture"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold"
        >
          Explore Architecture

          <ArrowRight size={18} />

        </Link>

      </div>

    </section>
  );
}