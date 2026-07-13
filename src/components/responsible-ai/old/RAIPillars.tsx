const pillars = [
  {
    title: "Fairness",
    description:
      "Detect and reduce model bias across predictions.",
  },
  {
    title: "Explainability",
    description:
      "SHAP-powered feature importance and decision transparency.",
  },
  {
    title: "Accountability",
    description:
      "Model lineage, ownership and audit tracking.",
  },
  {
    title: "Privacy",
    description:
      "Secure enterprise data governance.",
  },
  {
    title: "Robustness",
    description:
      "Reliable model monitoring and drift detection.",
  },
  {
    title: "Compliance",
    description:
      "Enterprise governance aligned with AI regulations.",
  },
];

export default function RAIPillars() {
  return (
    <section className="py-24">

      <div className="mb-16 text-center">

        <span className="font-semibold uppercase tracking-widest text-green-600">
          Six Principles
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          Responsible AI Pillars
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {pillars.map((pillar) => (

          <div
            key={pillar.title}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              transition
              hover:-translate-y-2
              hover:border-green-500
              hover:shadow-xl
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <h3 className="text-2xl font-bold dark:text-white">
              {pillar.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
              {pillar.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}