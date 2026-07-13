const pipeline = [
  "Enterprise Data Sources",
  "Apache Kafka",
  "Apache Spark",
  "Apache Iceberg",
  "Machine Learning",
  "Responsible AI",
  "LLMs & RAG",
  "Executive Dashboard",
];

export default function PlatformPipeline() {
  return (
    <section className="py-24">

      <div className="mb-16 text-center">

        <span className="font-semibold uppercase tracking-widest text-blue-600">
          Enterprise Workflow
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          AI Platform Pipeline
        </h2>

      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">

        {pipeline.map((step, index) => (

          <div
            key={step}
            className="flex items-center gap-6"
          >
            <div
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-7
                py-5
                font-semibold
                shadow-sm
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-white
              "
            >
              {step}
            </div>

            {index !== pipeline.length - 1 && (
              <span className="text-3xl text-blue-500">→</span>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}