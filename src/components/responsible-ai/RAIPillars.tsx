const pillars = [
  "Explainability",
  "Fairness",
  "Bias Detection",
  "Model Drift",
  "Governance",
  "Compliance",
];

export default function RAIPillars() {
  return (
    <section>

      <h2 className="mb-10 text-4xl font-black">

        Responsible AI Pillars

      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {pillars.map((pillar) => (

          <div
            key={pillar}
            className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-lg"
          >

            <h3 className="text-2xl font-bold">

              {pillar}

            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}