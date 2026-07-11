export default function Mission() {
  return (
    <section className="grid items-center gap-20 py-28 lg:grid-cols-2">

      <div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Our Mission
        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900 dark:text-white">

          Building
          <span className="block text-blue-600">
            Enterprise AI Platforms
          </span>

        </h2>

      </div>

      <div className="space-y-8 text-lg leading-9 text-slate-600 dark:text-slate-400">

        <p>
          OpenMarTech AI demonstrates how modern enterprises build
          scalable AI-native platforms using cloud-native architecture,
          streaming data, machine learning, and Responsible AI.
        </p>

        <p>
          The platform combines orchestration, lakehouse storage,
          AI Engineering, observability, governance, executive
          dashboards and MLOps into one production-inspired ecosystem.
        </p>

        <p>
          Every technology has been selected from real enterprise
          implementations used across Fortune 500 organizations.
        </p>

      </div>

    </section>
  );
}