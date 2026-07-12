import ResponsibleAICard from "./ResponsibleAICard";

const capabilities = [
  {
    title: "Fairness",
    description:
      "Continuous bias detection using SHAP and enterprise fairness metrics.",
    color: "bg-green-500",
  },
  {
    title: "Explainability",
    description:
      "Model predictions include SHAP explanations for executive transparency.",
    color: "bg-blue-500",
  },
  {
    title: "Governance",
    description:
      "MLflow Registry, approvals, audit trails and policy validation.",
    color: "bg-purple-500",
  },
  {
    title: "Observability",
    description:
      "Langfuse tracing, MLflow metrics and production monitoring.",
    color: "bg-cyan-500",
  },
  {
    title: "Compliance",
    description:
      "Enterprise AI aligned with NIST AI RMF, ISO 42001 and EU AI Act.",
    color: "bg-orange-500",
  },
  {
    title: "Human Oversight",
    description:
      "Critical AI decisions require governance approval before deployment.",
    color: "bg-pink-500",
  },
];

export default function ResponsibleAIExplorer() {
  return (
    <section className="py-24">

      <div className="mb-16 text-center">

        <span className="font-semibold uppercase tracking-widest text-green-600">
          Responsible AI
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          Enterprise AI Governance Framework
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {capabilities.map((item) => (
          <ResponsibleAICard
            key={item.title}
            {...item}
          />
        ))}

      </div>

    </section>
  );
}