"use client";

import {
  SiApacheairflow,
  SiApachekafka,
  SiApachespark,
  SiDatabricks,
  SiSnowflake,
  SiPostgresql,
} from "@/lib/icons";

import {
  BrainCircuit,
  Database,
  Workflow,
  ShieldCheck,
  Cpu,
  LayoutDashboard,
} from "@/lib/icons";

const technologies = [
  {
    title: "Data Engineering",
    icon: <Database size={24} />,
    stack: [
      "Apache Spark",
      "Kafka",
      "Airflow",
      "dbt",
      "Iceberg",
      "MinIO",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: <BrainCircuit size={24} />,
    stack: [
      "GenAI",
      "RAG",
      "LangChain",
      "Dify",
      "MLflow",
      "Ollama",
    ],
  },
  {
    title: "Cloud Platforms",
    icon: <Cpu size={24} />,
    stack: [
      "Docker",
      "AWS",
      "Databricks",
      "Snowflake",
      "PostgreSQL",
      "Linux",
    ],
  },
  {
    title: "Workflow Orchestration",
    icon: <Workflow size={24} />,
    stack: [
      "Apache Airflow",
      "Kafka",
      "Streaming",
      "Scheduling",
      "Automation",
      "ETL",
    ],
  },
  {
    title: "Business Intelligence",
    icon: <LayoutDashboard size={24} />,
    stack: [
      "Power BI",
      "Executive KPIs",
      "Analytics",
      "Reporting",
      "Monitoring",
      "Dashboards",
    ],
  },
  {
    title: "Responsible AI",
    icon: <ShieldCheck size={24} />,
    stack: [
      "Explainability",
      "Governance",
      "Fairness",
      "Monitoring",
      "Bias Detection",
      "Compliance",
    ],
  },
];

const logos = [
  { icon: <SiApachekafka size={34} />, name: "Kafka" },
  { icon: <SiApachespark size={34} />, name: "Spark" },
  { icon: <SiApacheairflow size={34} />, name: "Airflow" },
  { icon: <SiDatabricks size={34} />, name: "Databricks" },
  { icon: <SiSnowflake size={34} />, name: "Snowflake" },
  { icon: <SiPostgresql size={34} />, name: "PostgreSQL" },
];

export default function TechnologyExpertise() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            Technology Ecosystem
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">
            Modern Enterprise Technology Stack
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            OpenMarTech AI is built upon a modern ecosystem of enterprise
            technologies spanning Data Engineering, Artificial Intelligence,
            Cloud Infrastructure and Executive Analytics.
          </p>

        </div>

        {/* Enterprise Capabilities */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {technologies.map((tech) => (

            <div
              key={tech.title}
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
                {tech.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {tech.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                {tech.stack.map((item) => (

                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-blue-200
                      bg-blue-50

                      px-3
                      py-2

                      text-sm
                      font-medium

                      text-blue-700

                      dark:border-blue-800
                      dark:bg-blue-900/20
                      dark:text-blue-300
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Logo Row */}

        <div className="mt-20">

          <div className="flex flex-wrap items-center justify-center gap-12">

            {logos.map((logo) => (

              <div
                key={logo.name}
                className="
                  flex
                  flex-col
                  items-center

                  gap-4

                  text-slate-500

                  transition-all
                  duration-300

                  hover:scale-110
                  hover:text-blue-600

                  dark:text-slate-400
                  dark:hover:text-blue-400
                "
              >
                {logo.icon}

                <span className="text-sm font-semibold">
                  {logo.name}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}