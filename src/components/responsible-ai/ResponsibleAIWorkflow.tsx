import {
  Database,
  Cpu,
  BrainCircuit,
  ShieldCheck,
  Activity,
  BarChart3,
  ArrowRight,
} from "@/lib/icons";

const workflow = [
  {
    title: "Enterprise Data",
    subtitle: "PostgreSQL • Kafka • Lakehouse",
    icon: <Database size={30} />,
    color: "bg-blue-500",
  },
  {
    title: "ML Engineering",
    subtitle: "Spark • Feature Engineering",
    icon: <Cpu size={30} />,
    color: "bg-indigo-500",
  },
  {
    title: "Model Training",
    subtitle: "MLflow • Model Registry",
    icon: <BrainCircuit size={30} />,
    color: "bg-purple-500",
  },
  {
    title: "Responsible AI",
    subtitle: "SHAP • Fairness • Governance",
    icon: <ShieldCheck size={30} />,
    color: "bg-emerald-500",
  },
  {
    title: "Production Monitoring",
    subtitle: "Langfuse • Drift Detection",
    icon: <Activity size={30} />,
    color: "bg-orange-500",
  },
  {
    title: "Executive Dashboard",
    subtitle: "Power BI",
    icon: <BarChart3 size={30} />,
    color: "bg-cyan-500",
  },
];

export default function ResponsibleAIWorkflow() {
  return (

    <section className="space-y-16">

      {/* ====================================== */}

      <div className="mx-auto max-w-4xl text-center">

        <span
          className="
            rounded-full
            bg-cyan-100
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-cyan-700

            dark:bg-cyan-900/30
            dark:text-cyan-300
          "
        >
          Enterprise Workflow
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
          Responsible AI Pipeline
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
          Responsible AI is integrated throughout the complete machine
          learning lifecycle—from enterprise data ingestion to executive
          dashboards.
        </p>

      </div>

      {/* ====================================== */}

      <div
        className="
          grid
          gap-8

          lg:grid-cols-6
        "
      >

        {workflow.map((step, index) => (

          <div
            key={step.title}
            className="relative"
          >

            <div
              className="
                rounded-[30px]

                border
                border-slate-200

                bg-white

                p-8

                text-center

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-2xl

                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              <div
                className={`
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  text-white
                  shadow-lg

                  ${step.color}
                `}
              >
                {step.icon}
              </div>

              <h3
                className="
                  mt-6
                  text-xl
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {step.subtitle}
              </p>

            </div>

            {index < workflow.length - 1 && (

              <div
                className="
                  absolute
                  -right-6
                  top-1/2
                  hidden
                  -translate-y-1/2

                  lg:flex
                "
              >

                <ArrowRight
                  className="text-blue-500"
                  size={30}
                />

              </div>

            )}

          </div>

        ))}

      </div>

    </section>

  );
}