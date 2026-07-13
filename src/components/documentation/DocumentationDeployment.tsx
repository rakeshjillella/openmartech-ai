import {
  Server,
  Database,
  Workflow,
  BrainCircuit,
  ShieldCheck,
  ArrowRight,
} from "@/lib/icons";

const deploymentSteps = [
  {
    icon: Server,
    title: "Infrastructure Setup",
    description:
      "Provision Docker, networking, storage, compute resources and supporting enterprise services.",
  },
  {
    icon: Database,
    title: "Data Platform",
    description:
      "Configure PostgreSQL, Kafka, Iceberg, MinIO, DuckDB and enterprise data pipelines.",
  },
  {
    icon: Workflow,
    title: "Pipeline Deployment",
    description:
      "Deploy Airflow DAGs, Spark applications, streaming jobs and orchestration workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AI Services",
    description:
      "Deploy MLflow, Dify, LLM services, RAG pipelines and enterprise AI applications.",
  },
  {
    icon: ShieldCheck,
    title: "Production Validation",
    description:
      "Verify Responsible AI monitoring, governance, observability, dashboards and platform health.",
  },
];

export default function DocumentationDeployment() {
  return (
    <section className="space-y-14">

      <div className="max-w-4xl">

        <span
          className="
            inline-flex
            rounded-full
            bg-orange-100
            px-4
            py-2
            text-sm
            font-semibold
            text-orange-700

            dark:bg-orange-900/30
            dark:text-orange-300
          "
        >
          Deployment Guide
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
          Deploy OpenMarTech AI
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
          Deploy the complete enterprise platform—from infrastructure
          provisioning and data engineering to AI services and executive
          dashboards—using a structured production-ready workflow.
        </p>

      </div>

      <div className="space-y-8">

        {deploymentSteps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={step.title}
              className="
                group

                flex
                flex-col
                gap-8

                rounded-[30px]

                border
                border-slate-200

                bg-white

                p-8

                shadow-lg

                transition-all
                duration-300

                hover:border-orange-500
                hover:shadow-xl

                dark:border-slate-800
                dark:bg-slate-900

                lg:flex-row
                lg:items-center
              "
            >

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center

                  rounded-3xl

                  bg-orange-100

                  text-orange-600

                  dark:bg-orange-900/30
                  dark:text-orange-300
                "
              >
                <Icon size={34} />
              </div>

              <div className="flex-1">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center

                      rounded-full

                      bg-orange-600

                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    {index + 1}
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {step.title}
                  </h3>

                </div>

                <p
                  className="
                    mt-5
                    leading-8
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {step.description}
                </p>

              </div>

              <button
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  bg-orange-600

                  px-5
                  py-3

                  font-semibold
                  text-white

                  transition

                  hover:bg-orange-700
                "
              >
                View Guide

                <ArrowRight size={18} />

              </button>

            </div>

          );

        })}

      </div>

    </section>
  );
}