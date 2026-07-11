import { ShieldCheck } from "@/lib/icons";

export default function RAIHero() {
  return (
    <section className="rounded-[36px] bg-gradient-to-r from-emerald-900 via-teal-800 to-slate-900 px-10 py-24 text-white">

      <div className="max-w-5xl">

        <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2">

          <ShieldCheck size={20} />

          Responsible AI

        </div>

        <h1 className="mt-8 text-6xl font-black">

          Trustworthy AI

          <span className="block text-emerald-300">
            by Design
          </span>

        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-emerald-100">

          Responsible AI is embedded throughout OpenMarTech AI,
          ensuring explainability,
          fairness,
          governance,
          monitoring,
          compliance,
          and enterprise trust.

        </p>

      </div>

    </section>
  );
}