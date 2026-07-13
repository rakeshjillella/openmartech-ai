import {
  Database,
  Workflow,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  LayoutDashboard,
  Boxes,
  Search,
  Activity,
  GitBranch,
  Server,
  Sparkles,
} from "@/lib/icons";

import AIPlatformCapabilityCard from "./AIPlatformCapabilityCard";

const capabilities = [

  {
    title: "Data Engineering",
    description:
      "Build reliable enterprise ETL pipelines with Apache Airflow, Spark and dbt.",
    icon: <Database size={30} />,
  },

  {
    title: "Streaming Analytics",
    description:
      "Real-time data ingestion using Kafka, CDC and event-driven processing.",
    icon: <Workflow size={30} />,
  },

  {
    title: "Machine Learning",
    description:
      "Train, evaluate and deploy scalable machine learning models.",
    icon: <BrainCircuit size={30} />,
  },

  {
    title: "MLOps",
    description:
      "MLflow-powered experiment tracking, model registry and deployment.",
    icon: <Cpu size={30} />,
  },

  {
    title: "Responsible AI",
    description:
      "Bias detection, explainability, governance and model monitoring.",
    icon: <ShieldCheck size={30} />,
  },

  {
    title: "Executive Analytics",
    description:
      "Interactive business intelligence dashboards powered by Power BI.",
    icon: <LayoutDashboard size={30} />,
  },

  {
    title: "Lakehouse",
    description:
      "Apache Iceberg, DuckDB and MinIO enterprise storage architecture.",
    icon: <Boxes size={30} />,
  },

  {
    title: "Vector Search",
    description:
      "Enterprise semantic search using embeddings and RAG architecture.",
    icon: <Search size={30} />,
  },

  {
    title: "Observability",
    description:
      "Monitor AI performance, prompts and latency using Langfuse.",
    icon: <Activity size={30} />,
  },

  {
    title: "CI/CD Pipelines",
    description:
      "Automated deployment pipelines for enterprise AI solutions.",
    icon: <GitBranch size={30} />,
  },

  {
    title: "Platform Services",
    description:
      "Scalable microservices architecture using Docker containers.",
    icon: <Server size={30} />,
  },

  {
    title: "Generative AI",
    description:
      "Enterprise LLM applications built using Dify and Retrieval-Augmented Generation.",
    icon: <Sparkles size={30} />,
  },

];

export default function AIPlatformCapabilities() {

  return (

    <section className="space-y-12">

      <div className="text-center">

        <span
          className="
            rounded-full

            bg-blue-100

            px-5
            py-2

            text-sm
            font-semibold

            uppercase
            tracking-[0.2em]

            text-blue-700

            dark:bg-blue-900/30
            dark:text-blue-300
          "
        >
          Enterprise Features
        </span>

        <h2
          className="
            mt-6

            text-5xl
            font-black

            text-slate-900
            dark:text-white
          "
        >
          Platform Capabilities
        </h2>

        <p
          className="
            mx-auto
            mt-6

            max-w-3xl

            text-lg
            leading-8

            text-slate-600
            dark:text-slate-400
          "
        >
          OpenMarTech AI combines modern data engineering,
          enterprise AI, responsible machine learning,
          observability and executive intelligence into one
          unified platform.
        </p>

      </div>

      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-3
        "
      >

        {capabilities.map((item) => (

          <AIPlatformCapabilityCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />

        ))}

      </div>

    </section>

  );

}