import {
  ShieldCheck,
  Workflow,
  Database,
  BrainCircuit,
  Activity,
  CheckCircle2,
} from "@/lib/icons";

const practices = [
  {
    icon: Database,
    title: "Enterprise Data Management",
    description:
      "Use versioned datasets, schema evolution and ACID-compliant lakehouse storage to ensure reliable and scalable analytics.",
  },
  {
    icon: Workflow,
    title: "Pipeline Orchestration",
    description:
      "Automate workflows with Apache Airflow, implement retries, monitoring and dependency management for production reliability.",
  },
  {
    icon: BrainCircuit,
    title: "Responsible AI",
    description:
      "Validate every model with explainability, fairness analysis, drift detection and governance before production deployment.",
  },
  {
    icon: Activity,
    title: "Platform Monitoring",
    description:
      "Continuously monitor infrastructure, pipelines, AI services and business KPIs using enterprise observability practices.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Apply role-based access control, secure secrets management, encryption and enterprise governance standards.",
  },
];

export default function DocumentationBestPractices() {
  return (
    <section className="space-y-14">

      <div className="max-w-4xl">

        <span
          className="
            inline-flex
            rounded-full
            bg-emerald-100
            px-4
            py-2
            text-sm
            font-semibold
            text-emerald-700

            dark:bg-emerald-900/30
            dark:text-emerald-300
          "
        >
          Best Practices
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
          Production Engineering Standards
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
          Follow enterprise-grade engineering principles to build,
          deploy and operate OpenMarTech AI in secure, scalable and
          production-ready environments.
        </p>

      </div>

      <div className="space-y-6">

        {practices.map((practice) => {

          const Icon = practice.icon;

          return (

            <div
              key={practice.title}
              className="
                group

                flex
                flex-col
                gap-6

                rounded-[28px]

                border
                border-slate-200

                bg-white

                p-8

                shadow-lg

                transition-all
                duration-300

                hover:border-emerald-500
                hover:shadow-xl

                dark:border-slate-800
                dark:bg-slate-900

                lg:flex-row
                lg:items-start
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

                  bg-emerald-100

                  text-emerald-600

                  dark:bg-emerald-900/30
                  dark:text-emerald-300
                "
              >
                <Icon size={30} />
              </div>

              <div className="flex-1">

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={22}
                    className="text-emerald-600 dark:text-emerald-400"
                  />

                  <h3
                    className="
                      text-2xl
                      font-bold

                      text-slate-900

                      dark:text-white
                    "
                  >
                    {practice.title}
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
                  {practice.description}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}