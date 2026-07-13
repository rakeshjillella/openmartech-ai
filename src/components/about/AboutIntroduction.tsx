"use client";

import {
  BrainCircuit,
  Database,
  ShieldCheck,
  Workflow,
} from "@/lib/icons";

const highlights = [
  {
    icon: <BrainCircuit size={22} />,
    title: "Enterprise AI",
    description:
      "Designing production-ready AI platforms with Responsible AI, MLOps and GenAI capabilities.",
  },
  {
    icon: <Database size={22} />,
    title: "Data Engineering",
    description:
      "Building modern lakehouse architectures using Spark, Kafka, Airflow, dbt and Iceberg.",
  },
  {
    icon: <Workflow size={22} />,
    title: "Automation",
    description:
      "Creating intelligent data pipelines that automate ingestion, transformation and decision intelligence.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Responsible AI",
    description:
      "Embedding governance, explainability, fairness and monitoring into every AI workflow.",
  },
];

export default function AboutIntroduction() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              Enterprise AI Architect
            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">
              Building Enterprise AI Platforms That Scale
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
              I&apos;m Rakesh Jillella, a Data Engineering and Enterprise AI
              enthusiast focused on designing production-grade intelligent
              platforms that combine modern data engineering, Responsible AI,
              MLOps and executive analytics into a unified ecosystem.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              OpenMarTech AI represents my vision of an enterprise-ready
              decision intelligence platform that integrates streaming
              architectures, lakehouse technologies, AI governance and business
              intelligence into a single scalable solution.
            </p>
          </div>

          {/* Right */}

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:shadow-xl
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-100
                    text-blue-600
                    dark:bg-blue-900/30
                    dark:text-blue-400
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}