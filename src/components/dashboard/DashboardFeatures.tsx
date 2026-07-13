import {
  LayoutDashboard,
  BrainCircuit,
  BarChart3,
  Database,
  ShieldCheck,
  Activity,
} from "@/lib/icons";

const features = [
  {
    icon: LayoutDashboard,
    title: "Executive Overview",
    description:
      "Unified C-level dashboard presenting enterprise KPIs, operational performance and strategic business insights in one place.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Interactive visualizations for revenue, marketing, customer engagement, operational efficiency and executive reporting.",
  },
  {
    icon: BrainCircuit,
    title: "AI Decision Intelligence",
    description:
      "Predictive analytics, anomaly detection and AI-powered recommendations supporting enterprise decision making.",
  },
  {
    icon: Database,
    title: "Lakehouse Analytics",
    description:
      "Explore curated datasets from Iceberg, DuckDB and enterprise data pipelines with high-performance analytics.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    description:
      "Monitor explainability, fairness, governance and model compliance through dedicated executive dashboards.",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Track streaming events, system health, model performance and platform observability with live operational metrics.",
  },
];

export default function DashboardFeatures() {
  return (

    <section className="space-y-14">

      <div className="max-w-4xl">

        <span
          className="
            inline-flex
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-700

            dark:bg-blue-900/30
            dark:text-blue-300
          "
        >
          Dashboard Modules
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
          Enterprise Dashboard Experience
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
          Purpose-built dashboard modules provide complete visibility
          across business operations, enterprise AI, Responsible AI,
          analytics and executive decision intelligence.
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

        {features.map((feature) => {

          const Icon = feature.icon;

          return (

            <div
              key={feature.title}
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
                hover:border-blue-500
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

                  bg-blue-100

                  text-blue-600

                  transition-all
                  duration-300

                  group-hover:scale-110

                  dark:bg-blue-900/30
                  dark:text-blue-300
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
                {feature.title}
              </h3>

              <p
                className="
                  mt-5

                  leading-8

                  text-slate-600

                  dark:text-slate-400
                "
              >
                {feature.description}
              </p>

            </div>

          );

        })}

      </div>

    </section>

  );
}