import {
  Database,
  Workflow,
  BrainCircuit,
  ShieldCheck,
  LayoutDashboard,
  Activity,
  Server,
  FileText,
  ArrowRight,
} from "@/lib/icons";

const guides = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Learn data ingestion, ETL pipelines, Iceberg lakehouse architecture, DuckDB analytics and enterprise data management.",
  },
  {
    icon: Workflow,
    title: "Architecture",
    description:
      "Explore Airflow orchestration, Kafka streaming, Spark processing and the complete enterprise platform architecture.",
  },
  {
    icon: BrainCircuit,
    title: "AI Platform",
    description:
      "Understand MLflow, Dify, RAG workflows, model lifecycle management and enterprise AI capabilities.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    description:
      "Documentation covering explainability, fairness, governance, model monitoring and enterprise AI compliance.",
  },
  {
    icon: LayoutDashboard,
    title: "Executive Dashboard",
    description:
      "Power BI dashboards, executive reporting, KPIs, business intelligence and operational analytics.",
  },
  {
    icon: Activity,
    title: "Monitoring",
    description:
      "Platform observability, Langfuse monitoring, pipeline health, AI metrics and operational visibility.",
  },
  {
    icon: Server,
    title: "Deployment",
    description:
      "Docker deployment, infrastructure setup, production configuration and cloud-ready architecture.",
  },
  {
    icon: FileText,
    title: "API Reference",
    description:
      "REST APIs, platform services, authentication, integration endpoints and developer documentation.",
  },
];

export default function DocumentationGuides() {
  return (
    <section className="space-y-14">

      <div className="max-w-4xl">

        <span
          className="
            inline-flex
            rounded-full
            bg-indigo-100
            px-4
            py-2
            text-sm
            font-semibold
            text-indigo-700

            dark:bg-indigo-900/30
            dark:text-indigo-300
          "
        >
          Documentation Library
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            tracking-tight
            text-slate-900
            dark:text-white
            lg:text-5xl
          "
        >
          Explore Enterprise Guides
        </h2>

        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-9
            text-slate-600
            dark:text-slate-400
          "
        >
          Browse comprehensive documentation across architecture,
          enterprise AI, deployment, Responsible AI, dashboards,
          APIs and platform operations.
        </p>

      </div>

      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        {guides.map((guide) => {

          const Icon = guide.icon;

          return (

            <div
              key={guide.title}
              className="
                group

                rounded-[28px]

                border
                border-slate-200

                bg-white

                p-8

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-indigo-500
                hover:shadow-2xl

                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  rounded-2xl

                  bg-indigo-100

                  text-indigo-600

                  transition-all
                  duration-300

                  group-hover:scale-110

                  dark:bg-indigo-900/30
                  dark:text-indigo-300
                "
              >
                <Icon size={30} />
              </div>

              <h3
                className="
                  mt-8
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {guide.title}
              </h3>

              <p
                className="
                  mt-5
                  leading-8
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {guide.description}
              </p>

              <button
                className="
                  mt-8

                  inline-flex
                  items-center
                  gap-2

                  font-semibold

                  text-indigo-600

                  transition-colors
                  duration-300

                  hover:text-indigo-700

                  dark:text-indigo-300
                "
              >
                Read Guide

                <ArrowRight size={18} />

              </button>

            </div>

          );

        })}

      </div>

    </section>
  );
}