import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Workflow Orchestration",
    description:
      "Apache Airflow schedules and manages enterprise ETL and AI workflows.",
  },
  {
    title: "Real-Time Streaming",
    description:
      "Kafka powers scalable event-driven streaming pipelines.",
  },
  {
    title: "Machine Learning",
    description:
      "Spark MLlib and MLflow enable experiment tracking and model lifecycle management.",
  },
  {
    title: "Generative AI",
    description:
      "Dify provides enterprise LLM applications with Retrieval-Augmented Generation.",
  },
  {
    title: "Observability",
    description:
      "Langfuse monitors prompts, latency, token usage and AI quality.",
  },
  {
    title: "Responsible AI",
    description:
      "SHAP, model monitoring and governance ensure explainable and trustworthy AI.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">

      {features.map((feature) => (

        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
        />

      ))}

    </div>
  );
}