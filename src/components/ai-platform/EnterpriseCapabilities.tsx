const capabilities = [
  {
    title: "Machine Learning",
    description:
      "Spark ML pipelines with MLflow experiment tracking and automated model lifecycle.",
  },
  {
    title: "Generative AI",
    description:
      "Enterprise LLM orchestration using OpenAI, Ollama, Groq and Dify.",
  },
  {
    title: "Responsible AI",
    description:
      "Fairness, explainability, governance and compliance integrated into every model.",
  },
  {
    title: "RAG Platform",
    description:
      "Enterprise Retrieval-Augmented Generation using ChromaDB and semantic search.",
  },
  {
    title: "Observability",
    description:
      "Complete monitoring using Langfuse, MLflow and enterprise telemetry.",
  },
  {
    title: "Executive Intelligence",
    description:
      "Power BI dashboards delivering real-time executive insights.",
  },
];

export default function EnterpriseCapabilities() {
  return (
    <section className="py-24">

      <div className="mb-16 text-center">

        <span className="font-semibold uppercase tracking-widest text-indigo-600">
          Enterprise Features
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          Platform Capabilities
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {capabilities.map((item) => (

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
              hover:border-indigo-500
              hover:shadow-xl
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <h3 className="text-2xl font-bold dark:text-white">
              {item.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}