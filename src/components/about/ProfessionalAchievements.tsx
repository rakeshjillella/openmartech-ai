"use client";

import {
  BadgeCheck,
  BrainCircuit,
  ShieldCheck,
  Database,
  Workflow,
  LayoutDashboard,
} from "@/lib/icons";

const achievements = [
  {
    icon: <BadgeCheck size={24} />,
    title: "Certified Scrum Master",
    subtitle: "Agile Leadership",
    description:
      "Leading enterprise projects using Agile methodologies, sprint planning and stakeholder collaboration.",
  },
  {
    icon: <Database size={24} />,
    title: "Enterprise Data Engineering",
    subtitle: "Modern Data Platforms",
    description:
      "Designed scalable data platforms integrating Kafka, Spark, Airflow, dbt, Iceberg and cloud-native architectures.",
  },
  {
    icon: <BrainCircuit size={24} />,
    title: "Enterprise AI",
    subtitle: "Generative AI & MLOps",
    description:
      "Developed production-ready AI platforms combining RAG, LLMs, MLflow, LangChain and intelligent automation.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Responsible AI",
    subtitle: "AI Governance",
    description:
      "Implemented explainability, governance, fairness, monitoring and compliance throughout the AI lifecycle.",
  },
  {
    icon: <Workflow size={24} />,
    title: "Automation",
    subtitle: "Enterprise Workflows",
    description:
      "Automated enterprise ETL pipelines, orchestration workflows and real-time streaming architectures.",
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: "Executive Analytics",
    subtitle: "Decision Intelligence",
    description:
      "Designed executive dashboards delivering real-time KPIs, AI insights and enterprise observability.",
  },
];

export default function ProfessionalAchievements() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            Professional Highlights
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">
            Certifications & Professional Achievements
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Experience across enterprise architecture, AI platforms, data
            engineering and business transformation projects.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {achievements.map((item) => (

            <div
              key={item.title}
              className="
                group

                flex
                gap-6

                rounded-3xl
                border
                border-slate-200
                bg-white

                p-8

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
                  flex
                  h-14
                  w-14
                  shrink-0
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

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {item.subtitle}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}