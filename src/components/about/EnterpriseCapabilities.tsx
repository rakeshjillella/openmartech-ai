"use client";

import {
  BrainCircuit,
  Database,
  Workflow,
  ShieldCheck,
  LayoutDashboard,
  Cpu,
} from "@/lib/icons";

const capabilities = [
  {
    icon: <Database size={24} />,
    title: "Enterprise Data Engineering",
    description:
      "Designing scalable lakehouse architectures with Kafka, Spark, Airflow, dbt, Iceberg and MinIO.",
  },
  {
    icon: <BrainCircuit size={24} />,
    title: "Enterprise AI Platforms",
    description:
      "Building GenAI, RAG, MLOps and intelligent decision systems for production environments.",
  },
  {
    icon: <Workflow size={24} />,
    title: "Workflow Automation",
    description:
      "Automating ingestion, transformation, orchestration and deployment across enterprise data platforms.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Responsible AI",
    description:
      "Implementing governance, fairness, explainability, monitoring and AI compliance frameworks.",
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: "Executive Intelligence",
    description:
      "Delivering executive dashboards with real-time KPIs, AI insights and operational visibility.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Cloud & Platform Architecture",
    description:
      "Designing cloud-native enterprise solutions optimized for scalability, resilience and performance.",
  },
];

export default function EnterpriseCapabilities() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            Core Expertise
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">
            Enterprise Capabilities
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            My expertise spans modern Data Engineering, Enterprise AI,
            Responsible AI, Business Intelligence and scalable cloud-native
            architectures.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {capabilities.map((item) => (
            <div
              key={item.title}
              className="
                group

                rounded-3xl
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
                  mb-6

                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  bg-blue-100
                  text-blue-600

                  transition-transform
                  duration-300

                  group-hover:scale-110

                  dark:bg-blue-900/30
                  dark:text-blue-400
                "
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}