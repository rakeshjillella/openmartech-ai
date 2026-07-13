const metrics = [
  {
    title: "Fairness",
    value: "99%",
    color: "text-green-600",
  },
  {
    title: "Transparency",
    value: "100%",
    color: "text-blue-600",
  },
  {
    title: "Governance",
    value: "100%",
    color: "text-purple-600",
  },
  {
    title: "Compliance",
    value: "PASS",
    color: "text-emerald-600",
  },
];

export default function ResponsibleAIDashboard() {
  return (
    <section className="py-24">

      <div className="mb-16 text-center">

        <span className="font-semibold uppercase tracking-widest text-green-600">
          Dashboard
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          Responsible AI Health
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {metrics.map((item) => (

          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              transition
              hover:-translate-y-2
              hover:shadow-xl
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <p className="text-sm uppercase tracking-wide text-slate-500">
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