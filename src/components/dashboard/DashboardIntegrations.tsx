import {
  Database,
  Workflow,
  BrainCircuit,
  LayoutDashboard,
  ShieldCheck,
  Activity,
} from "@/lib/icons";

const integrations = [
  {
    icon: Database,
    title: "Enterprise Data",
    subtitle: "PostgreSQL • Iceberg • DuckDB",
  },
  {
    icon: Workflow,
    title: "Data Pipelines",
    subtitle: "Airflow • Kafka • Spark",
  },
  {
    icon: BrainCircuit,
    title: "AI Platform",
    subtitle: "MLflow • Dify • LangChain",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    subtitle: "Bias • Explainability • Governance",
  },
  {
    icon: Activity,
    title: "Observability",
    subtitle: "Langfuse • Monitoring • Metrics",
  },
  {
    icon: LayoutDashboard,
    title: "Executive Insights",
    subtitle: "Power BI • KPIs • Analytics",
  },
];

export default function DashboardIntegrations() {
  return (
    <section className="space-y-14">

      <div className="max-w-4xl">

        <span
          className="
            inline-flex
            rounded-full
            bg-cyan-100
            px-4
            py-2
            text-sm
            font-semibold
            text-cyan-700

            dark:bg-cyan-900/30
            dark:text-cyan-300
          "
        >
          Platform Integrations
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
          Connected Across the Entire Platform
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
          Every dashboard is powered by the complete OpenMarTech AI
          ecosystem—from data ingestion and lakehouse storage to
          enterprise AI, Responsible AI and executive reporting.
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

        {integrations.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
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
                hover:border-cyan-500
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

                  bg-cyan-100

                  text-cyan-600

                  transition-all
                  duration-300

                  group-hover:scale-110

                  dark:bg-cyan-900/30
                  dark:text-cyan-300
                "
              >
                <Icon size={30} />
              </div>

              <h3
                className="
                  mt-6

                  text-2xl
                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4

                  leading-8

                  text-slate-600

                  dark:text-slate-400
                "
              >
                {item.subtitle}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}