import {
  ShieldCheck,
  ClipboardCheck,
  GitBranch,
  Lock,
  CheckCircle2,
} from "@/lib/icons";

const governance = [
  {
    title: "Model Governance",
    icon: <ShieldCheck size={30} />,
    description:
      "Every model follows enterprise governance with versioning, approvals and controlled deployment workflows.",
  },
  {
    title: "Audit Trail",
    icon: <ClipboardCheck size={30} />,
    description:
      "Complete audit history is maintained for datasets, experiments, model versions and deployment events.",
  },
  {
    title: "Lineage",
    icon: <GitBranch size={30} />,
    description:
      "Track the complete lineage from raw data through feature engineering, training and production deployment.",
  },
];

const controls = [
  "MLflow Model Registry",
  "Dataset Lineage",
  "Version Control",
  "Approval Workflow",
  "Audit Logging",
  "Enterprise Compliance",
];

export default function ResponsibleAIGovernance() {
  return (

    <section className="space-y-16">

      {/* ========================================= */}

      <div className="mx-auto max-w-4xl text-center">

        <span
          className="
            rounded-full
            bg-indigo-100
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-indigo-700

            dark:bg-indigo-900/30
            dark:text-indigo-300
          "
        >
          Enterprise Governance
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
          AI Governance Framework
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
          Enterprise AI requires governance beyond model accuracy.
          OpenMarTech AI provides model lineage, auditability,
          approvals and compliance throughout the machine learning
          lifecycle.
        </p>

      </div>

      {/* ========================================= */}

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

          <div className="text-indigo-600 dark:text-indigo-400">

            <Lock size={42} />

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
            Enterprise AI Governance
          </h3>

          <p
            className="
              mt-6
              leading-8
              text-slate-600
              dark:text-slate-400
            "
          >
            Every model deployed within OpenMarTech AI follows
            enterprise governance policies ensuring transparency,
            reproducibility and regulatory compliance.
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

          {governance.map((item) => (

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
                hover:border-indigo-500
                hover:shadow-2xl

                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              <div className="text-indigo-600 dark:text-indigo-400">

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