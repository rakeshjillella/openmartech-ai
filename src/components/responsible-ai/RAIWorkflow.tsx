const workflow = [
  "Data Validation",
  "Bias Detection",
  "Feature Engineering",
  "Model Training",
  "Explainability",
  "Governance Review",
  "MLflow Registry",
  "Production Deployment",
  "Continuous Monitoring",
];

export default function RAIWorkflow() {
  return (
    <section className="py-24">

      <div className="mb-16 text-center">

        <span className="font-semibold uppercase tracking-widest text-green-600">
          Workflow
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          Responsible AI Lifecycle
        </h2>

      </div>

      <div className="flex flex-wrap items-center justify-center gap-5">

        {workflow.map((step, index) => (

          <div
            key={step}
            className="flex items-center gap-5"
          >
            <div
              className="
                rounded-full
                bg-gradient-to-r
                from-green-600
                to-emerald-600
                px-7
                py-4
                font-semibold
                text-white
                shadow-lg
              "
            >
              {step}
            </div>

            {index !== workflow.length - 1 && (
              <span className="text-3xl text-green-500">→</span>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}