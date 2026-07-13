import Link from "next/link";

import {
  Database,
  Workflow,
  BrainCircuit,
  Cpu,
 ShieldCheck,
  LayoutDashboard,
  ArrowRight,
} from "@/lib/icons";

const services = [

  {
    title: "Enterprise Data Engineering",
    icon: <Database size={34} />,
    color: "bg-blue-500",
    description:
      "Modern ELT architecture using Airflow, Spark, dbt and Iceberg to build reliable enterprise data pipelines.",
    features: [
      "Apache Airflow",
      "Apache Spark",
      "dbt",
      "Apache Iceberg",
    ],
    href: "/architecture",
  },

  {
    title: "Streaming Analytics",
    icon: <Workflow size={34} />,
    color: "bg-cyan-500",
    description:
      "Real-time event processing powered by Apache Kafka, CDC and Spark Structured Streaming.",
    features: [
      "Kafka",
      "CDC",
      "Spark Streaming",
      "Real-time Processing",
    ],
    href: "/architecture",
  },

  {
    title: "Enterprise AI Platform",
    icon: <BrainCircuit size={34} />,
    color: "bg-purple-500",
    description:
      "Production-ready LLM platform with Retrieval-Augmented Generation, Dify and enterprise AI orchestration.",
    features: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Dify",
    ],
    href: "/ai-platform",
  },

  {
    title: "MLOps Platform",
    icon: <Cpu size={34} />,
    color: "bg-indigo-500",
    description:
      "Complete ML lifecycle including experiment tracking, model registry and deployment automation.",
    features: [
      "MLflow",
      "Model Registry",
      "Experiment Tracking",
      "Versioning",
    ],
    href: "/ai-platform",
  },

  {
    title: "Responsible AI",
    icon: <ShieldCheck size={34} />,
    color: "bg-green-500",
    description:
      "Enterprise governance with explainability, fairness monitoring and model transparency.",
    features: [
      "Explainability",
      "Bias Detection",
      "Governance",
      "Monitoring",
    ],
    href: "/responsible-ai",
  },

  {
    title: "Executive Intelligence",
    icon: <LayoutDashboard size={34} />,
    color: "bg-orange-500",
    description:
      "Business-ready dashboards delivering operational KPIs and executive insights.",
    features: [
      "Power BI",
      "KPIs",
      "Executive Reports",
      "Business Intelligence",
    ],
    href: "/dashboard",
  },

];

export default function AIPlatformServices() {

  return (

    <section className="space-y-16">

      <div className="mx-auto max-w-4xl text-center">

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
          Enterprise Services
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
          Everything Needed To Build Enterprise AI
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
          enterprise AI, machine learning,
          Responsible AI and executive intelligence
          into one production-inspired platform.
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

        {services.map((service) => (

          <div
            key={service.title}
            className="
              group
              relative
              overflow-hidden

              rounded-[32px]

              border
              border-slate-200

              bg-white

              p-8

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-blue-500
              hover:shadow-2xl

              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div
              className="
                absolute
                right-0
                top-0

                h-44
                w-44

                rounded-full

                bg-blue-500/5

                blur-3xl

                transition

                group-hover:bg-blue-500/10
              "
            />

            <div
              className={`
                ${service.color}

                flex
                h-20
                w-20

                items-center
                justify-center

                rounded-3xl

                text-white

                shadow-xl
              `}
            >
              {service.icon}
            </div>

            <h3
              className="
                mt-8
                text-3xl
                font-black

                text-slate-900
                dark:text-white
              "
            >
              {service.title}
            </h3>

            <p
              className="
                mt-5
                leading-8

                text-slate-600
                dark:text-slate-400
              "
            >
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {service.features.map((feature) => (

                <span
                  key={feature}
                  className="
                    rounded-full

                    bg-slate-100

                    px-4
                    py-2

                    text-sm
                    font-medium

                    dark:bg-slate-800
                    dark:text-slate-300
                  "
                >
                  {feature}
                </span>

              ))}

            </div>

            <Link
              href={service.href}
              className="
                mt-10

                inline-flex
                items-center

                gap-3

                font-semibold

                text-blue-600

                transition-all

                group-hover:gap-4
              "
            >
              Explore Service

              <ArrowRight size={18} />

            </Link>

          </div>

        ))}

      </div>

    </section>

  );

}