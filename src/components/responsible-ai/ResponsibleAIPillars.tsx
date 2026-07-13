import {
  ShieldCheck,
  Scale,
  Activity,
  Lock,
  Eye,
} from "@/lib/icons";

const pillars = [
  {
    title: "Fairness",
    icon: <Scale size={34} />,
    color: "text-emerald-600",
    description:
      "Evaluate models for demographic fairness and mitigate unwanted bias across protected attributes.",
  },
  {
    title: "Explainability",
    icon: <Eye size={34} />,
    color: "text-blue-600",
    description:
      "Provide transparent model predictions using SHAP explanations and feature importance analysis.",
  },
  {
    title: "Monitoring",
    icon: <Activity size={34} />,
    color: "text-purple-600",
    description:
      "Continuously monitor model drift, prediction quality, latency and operational health.",
  },
  {
    title: "Governance",
    icon: <ShieldCheck size={34} />,
    color: "text-indigo-600",
    description:
      "Maintain versioning, approvals, lineage and enterprise AI governance using MLflow.",
  },
  {
    title: "Security",
    icon: <Lock size={34} />,
    color: "text-orange-600",
    description:
      "Protect enterprise AI assets through secure deployment, access controls and auditability.",
  },
  {
    title: "Compliance",
    icon: <ShieldCheck size={34} />,
    color: "text-rose-600",
    description:
      "Support enterprise compliance requirements with transparent documentation and governance controls.",
  },
];

export default function ResponsibleAIPillars() {
  return (

    <section className="space-y-16">

      {/* Header */}

      <div className="mx-auto max-w-4xl text-center">

        <span
          className="
            rounded-full
            bg-emerald-100
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-emerald-700

            dark:bg-emerald-900/30
            dark:text-emerald-300
          "
        >
          Responsible AI Principles
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
          Enterprise Responsible AI Pillars
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
          OpenMarTech AI incorporates Responsible AI across the complete
          machine learning lifecycle, ensuring trustworthy, transparent
          and production-ready AI systems.
        </p>

      </div>

      {/* Cards */}

      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-3
        "
      >

        {pillars.map((pillar) => (

          <div
            key={pillar.title}
            className="
              group

              rounded-[30px]

              border
              border-slate-200

              bg-white

              p-8

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-emerald-500
              hover:shadow-2xl

              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div className={pillar.color}>
              {pillar.icon}
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-black

                text-slate-900
                dark:text-white
              "
            >
              {pillar.title}
            </h3>

            <p
              className="
                mt-5
                leading-8

                text-slate-600
                dark:text-slate-400
              "
            >
              {pillar.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}