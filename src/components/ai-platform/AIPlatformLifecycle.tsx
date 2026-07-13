import {
  Database,
  Workflow,
  Cpu,
  BrainCircuit,
  ShieldCheck,
  Activity,
  LayoutDashboard,
  ArrowRight,
} from "@/lib/icons";

const lifecycle = [
  {
    title: "Data Sources",
    icon: <Database size={28} />,
    color: "bg-blue-500",
    description:
      "Operational databases, APIs, CDC and enterprise systems.",
  },

  {
    title: "Data Engineering",
    icon: <Workflow size={28} />,
    color: "bg-cyan-500",
    description:
      "Kafka, Spark, Airflow and dbt pipelines.",
  },

  {
    title: "Machine Learning",
    icon: <Cpu size={28} />,
    color: "bg-purple-500",
    description:
      "Training, feature engineering and ML models.",
  },

  {
    title: "Generative AI",
    icon: <BrainCircuit size={28} />,
    color: "bg-indigo-500",
    description:
      "LLMs, RAG, Dify and intelligent assistants.",
  },

  {
    title: "Responsible AI",
    icon: <ShieldCheck size={28} />,
    color: "bg-green-500",
    description:
      "Explainability, governance and bias monitoring.",
  },

  {
    title: "Observability",
    icon: <Activity size={28} />,
    color: "bg-orange-500",
    description:
      "Langfuse, MLflow and enterprise monitoring.",
  },

  {
    title: "Executive Intelligence",
    icon: <LayoutDashboard size={28} />,
    color: "bg-pink-500",
    description:
      "Power BI executive dashboards and insights.",
  },
];

export default function AIPlatformLifecycle() {
  return (

    <section className="space-y-14">

      <div className="text-center">

        <span
          className="
            rounded-full
            bg-blue-100
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-blue-700
            dark:bg-blue-900/30
            dark:text-blue-300
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
          End-to-End AI Lifecycle
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-4xl
            text-lg
            leading-8
            text-slate-600
            dark:text-slate-400
          "
        >
          OpenMarTech AI orchestrates the complete enterprise AI lifecycle
          from operational data to executive intelligence.
        </p>

      </div>

      <div
        className="
          flex
          flex-col
          gap-8

          xl:flex-row
          xl:items-center
          xl:justify-between
        "
      >

        {lifecycle.map((item, index) => (

          <div
            key={item.title}
            className="
              flex
              flex-1
              items-center
            "
          >

            <div
              className="
                group

                flex
                flex-col
                items-center

                text-center
              "
            >

              <div
                className={`
                  ${item.color}

                  flex
                  h-20
                  w-20

                  items-center
                  justify-center

                  rounded-3xl

                  text-white

                  shadow-xl

                  transition-all
                  duration-300

                  group-hover:scale-110
                `}
              >
                {item.icon}
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
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  max-w-[220px]
                  leading-7
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>

            </div>

            {index !== lifecycle.length - 1 && (

              <div
                className="
                  hidden
                  flex-1
                  justify-center

                  xl:flex
                "
              >
                <ArrowRight
                  size={28}
                  className="text-slate-400"
                />
              </div>

            )}

          </div>

        ))}

      </div>

    </section>

  );
}