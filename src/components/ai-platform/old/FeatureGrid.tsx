import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Machine Learning",
    description:
      "Spark ML pipelines with MLflow experiment tracking and model registry.",
    color: "bg-blue-500",
  },
  {
    title: "Generative AI",
    description:
      "LLM orchestration using Dify, OpenAI, Ollama and Groq.",
    color: "bg-purple-500",
  },
  {
    title: "RAG Pipeline",
    description:
      "Vector search with ChromaDB and enterprise knowledge retrieval.",
    color: "bg-emerald-500",
  },
  {
    title: "Responsible AI",
    description:
      "SHAP explainability, governance and fairness monitoring.",
    color: "bg-orange-500",
  },
  {
    title: "Observability",
    description:
      "Langfuse tracing, MLflow metrics and enterprise monitoring.",
    color: "bg-cyan-500",
  },
  {
    title: "Production APIs",
    description:
      "FastAPI microservices exposing AI inference and analytics.",
    color: "bg-pink-500",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24">

      <div className="mb-16 text-center">

        <span className="font-semibold uppercase tracking-widest text-blue-600">
          Enterprise Capabilities
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          AI Platform Features
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}

      </div>

    </section>
  );
}