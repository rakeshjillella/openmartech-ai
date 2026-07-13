import {
  TrendingUp,
  BrainCircuit,
  ShieldCheck,
  LayoutDashboard,
  Activity,
  Users,
} from "@/lib/icons";

const benefits = [
  {
    icon: TrendingUp,
    title: "Accelerated Decision Making",
    description:
      "Provide executives with real-time KPIs, predictive insights and business intelligence to make faster, data-driven decisions.",
  },
  {
    icon: BrainCircuit,
    title: "Enterprise AI Intelligence",
    description:
      "Transform operational data into AI-powered recommendations, anomaly detection and predictive business forecasting.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Responsible AI",
    description:
      "Monitor explainability, bias, fairness and compliance to ensure AI decisions remain transparent and trustworthy.",
  },
  {
    icon: LayoutDashboard,
    title: "Unified Executive View",
    description:
      "Replace fragmented reports with a single executive dashboard covering operations, analytics, AI and governance.",
  },
  {
    icon: Activity,
    title: "Operational Excellence",
    description:
      "Continuously monitor pipelines, infrastructure, machine learning models and enterprise platform health.",
  },
  {
    icon: Users,
    title: "Executive Collaboration",
    description:
      "Enable business leaders, data teams and AI engineers to collaborate using a shared enterprise intelligence platform.",
  },
];

export default function DashboardBenefits() {
  return (
    <section className="space-y-14">

      <div className="max-w-4xl">

        <span
          className="
            inline-flex
            rounded-full
            bg-green-100
            px-4
            py-2
            text-sm
            font-semibold
            text-green-700

            dark:bg-green-900/30
            dark:text-green-300
          "
        >
          Business Value
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
          Why Enterprise Leaders Choose OpenMarTech AI
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
          OpenMarTech AI combines enterprise analytics,
          Responsible AI, machine learning and executive
          intelligence into a modern decision platform that
          empowers organizations to innovate with confidence.
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

        {benefits.map((benefit) => {

          const Icon = benefit.icon;

          return (

            <div
              key={benefit.title}
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
                hover:border-green-500
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

                  bg-green-100

                  text-green-600

                  transition-all
                  duration-300

                  group-hover:scale-110

                  dark:bg-green-900/30
                  dark:text-green-300
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
                {benefit.title}
              </h3>

              <p
                className="
                  mt-5

                  leading-8

                  text-slate-600

                  dark:text-slate-400
                "
              >
                {benefit.description}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}