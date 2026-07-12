export default function TechnologyHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-12 py-28 text-white shadow-2xl dark:border-slate-800">

      <div className="absolute -left-24 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl text-center">

        <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300">
          Enterprise Technology Stack
        </span>

        <h1 className="mt-8 text-6xl font-black leading-tight md:text-7xl">
          Technology Explorer
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Discover every technology powering OpenMarTech AI —
          from Streaming, Lakehouse and Data Engineering to
          Responsible AI, MLOps and Enterprise Intelligence.
        </p>

      </div>

    </section>
  );
}