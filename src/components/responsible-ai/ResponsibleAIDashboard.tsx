export default function ResponsibleAIDashboard() {
  const metrics = [
    {
      title: "Model Health",
      value: "99.2%",
      color: "text-emerald-600",
    },
    {
      title: "Bias Score",
      value: "1.8%",
      color: "text-blue-600",
    },
    {
      title: "Drift Status",
      value: "Stable",
      color: "text-green-600",
    },
    {
      title: "Explainability",
      value: "SHAP",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="mt-24">

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Enterprise Governance Dashboard
        </h2>

        <p className="mt-3 text-slate-600">
          Live Responsible AI monitoring across the production platform.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {metrics.map((metric) => (

          <div
            key={metric.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {metric.title}
            </p>

            <h3 className={`mt-5 text-4xl font-black ${metric.color}`}>
              {metric.value}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}