import {
  Scale,
  ShieldAlert,
  Users,
  BadgeCheck,
  CheckCircle2,
} from "@/lib/icons";

const principles = [
  {
    title: "Bias Detection",
    icon: <ShieldAlert size={30} />,
    description:
      "Automatically detect unfair behaviour across model predictions before deployment.",
  },
  {
    title: "Protected Attributes",
    icon: <Users size={30} />,
    description:
      "Evaluate fairness across demographic groups and sensitive business attributes.",
  },
  {
    title: "Fairness Metrics",
    icon: <Scale size={30} />,
    description:
      "Measure demographic parity, equal opportunity and prediction consistency.",
  },
];

const controls = [
  "Fairness Assessment",
  "Bias Monitoring",
  "Protected Attribute Analysis",
  "Pre-deployment Validation",
  "Continuous Compliance",
  "Enterprise Governance",
];

export default function ResponsibleAIBias() {
  return (

    <section className="space-y-16">

      {/* ================================================= */}

      <div className="mx-auto max-w-4xl text-center">

        <span
          className="
            rounded-full
            bg-purple-100
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-purple-700

            dark:bg-purple-900/30
            dark:text-purple-300
          "
        >
          AI Fairness
        </span>

        <h2
          className="
            mt-6
            text-5xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          Enterprise Bias Detection
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
            dark:text-slate-400
          "
        >
          Responsible AI requires continuous fairness evaluation.
          OpenMarTech AI validates machine learning models for bias,
          protected attributes and enterprise compliance before
          production deployment.
        </p>

      </div>

      {/* ================================================= */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Left */}

        <div
          className="
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-10
            shadow-xl

            dark:border-slate-800
            dark:bg-slate-900
          "
        >

          <div className="text-purple-600 dark:text-purple-400">

            <BadgeCheck size={42} />

          </div>

          <h3
            className="
              mt-6
              text-3xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            Fair AI Validation
          </h3>

          <p
            className="
              mt-6
              leading-8
              text-slate-600
              dark:text-slate-400
            "
          >
            Every model undergoes fairness validation before deployment.
            Responsible AI controls help ensure ethical, transparent and
            trustworthy AI systems across the enterprise.
          </p>

          <div className="mt-10 space-y-5">

            {controls.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <CheckCircle2
                  size={22}
                  className="text-emerald-500"
                />

                <span
                  className="
                    text-lg
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          {principles.map((item) => (

            <div
              key={item.title}
              className="
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-purple-500
                hover:shadow-2xl

                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              <div className="text-purple-600 dark:text-purple-400">

                {item.icon}

              </div>

              <h3
                className="
                  mt-5
                  text-2xl
                  font-black
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
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}