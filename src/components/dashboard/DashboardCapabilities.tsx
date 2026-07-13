import {
  BrainCircuit,
  Activity,
  Database,
  ShieldCheck,
  Workflow,
  LayoutDashboard,
} from "@/lib/icons";

const capabilities = [
  {
    icon: LayoutDashboard,
    title: "Executive Decision Intelligence",
    description:
      "Unified dashboards providing leadership with strategic KPIs, operational performance, financial metrics and enterprise insights.",
  },
  {
    icon: Database,
    title: "Unified Data Platform",
    description:
      "Connect data from PostgreSQL, Kafka, Iceberg, DuckDB, Spark and enterprise lakehouse environments into a single analytics layer.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Analytics",
    description:
      "Machine learning models generate predictions, recommendations, anomaly detection and intelligent business insights.",
  },
  {
    icon: Workflow,
    title: "Real-Time Operations",
    description:
      "Monitor Airflow pipelines, Spark jobs, Kafka streams and enterprise workflows through operational dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI Monitoring",
    description:
      "Track explainability, fairness, compliance, drift detection and AI governance with enterprise-grade monitoring.",
  },
  {
    icon: Activity,
    title: "Enterprise Observability",
    description:
      "Continuous monitoring of infrastructure, applications, AI models and platform health across the entire ecosystem.",
  },
];

export default function DashboardCapabilities() {
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
          Enterprise Capabilities
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
          Enterprise Intelligence Platform
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
          OpenMarTech AI dashboards transform enterprise data into
          actionable intelligence through advanced analytics,
          Responsible AI and executive reporting.
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

        {capabilities.map((capability) => {

          const Icon = capability.icon;

          return (

            <div
              key={capability.title}
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
                  mt-6

                  text-2xl
                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                {capability.title}
              </h3>

              <p
                className="
                  mt-5

                  leading-8

                  text-slate-600

                  dark:text-slate-400
                "
              >
                {capability.description}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}