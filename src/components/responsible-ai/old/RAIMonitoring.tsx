const monitoring = [
  {
    title: "Bias Score",
    value: "0.02",
    color: "text-green-600",
  },
  {
    title: "Model Drift",
    value: "1.3%",
    color: "text-blue-600",
  },
  {
    title: "Explainability",
    value: "100%",
    color: "text-indigo-600",
  },
  {
    title: "Compliance",
    value: "PASS",
    color: "text-green-600",
  },
];

export default function RAIMonitoring() {
  return (
    <section className="py-24">

      <div className="mb-16 text-center">

        <span className="font-semibold uppercase tracking-widest text-green-600">
          Monitoring
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          Live Governance Metrics
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {monitoring.map((item) => (

          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              text-center
              shadow-sm
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <p className="text-slate-500 dark:text-slate-400">
              {item.title}
            </p>

            <h2 className={`mt-5 text-5xl font-black ${item.color}`}>
              {item.value}
            </h2>

          </div>

        ))}

      </div>

    </section>
  );
}