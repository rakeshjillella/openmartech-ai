import {
  BrainCircuit,
  LayoutDashboard,
  BarChart3,
  ShieldCheck,
} from "@/lib/icons";

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Executive View",
    description:
      "Consolidates operational, analytical and AI insights into a single enterprise dashboard for faster executive decision-making.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Intelligence",
    description:
      "Surface predictive insights, anomaly detection and machine learning recommendations directly inside business dashboards.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Monitor streaming events, KPIs, customer behaviour and platform health with continuously refreshed visualizations.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI Monitoring",
    description:
      "Track explainability, bias, drift and governance metrics alongside operational analytics for trusted AI adoption.",
  },
];

export default function DashboardOverview() {
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
          Executive Analytics
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
          Enterprise Decision Intelligence
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
          The OpenMarTech AI Dashboard transforms enterprise data into
          actionable intelligence by combining operational metrics,
          streaming analytics, Responsible AI governance, ML insights,
          and executive reporting into one unified experience.
        </p>

      </div>

      <div
        className="
          grid
          gap-8

          md:grid-cols-2
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

                  transition

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
                  mt-4

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