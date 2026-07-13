import {
  Database,
  Cpu,
  BrainCircuit,
  ShieldCheck,
  Activity,
  BarChart3,
} from "@/lib/icons";

const lifecycle = [
  {
    title: "Data Collection",
    description:
      "Enterprise data is ingested from transactional systems, streaming platforms and lakehouse storage.",
    icon: <Database size={32} />,
    color: "bg-blue-500",
  },
  {
    title: "Feature Engineering",
    description:
      "Spark pipelines prepare, validate and transform features before model training.",
    icon: <Cpu size={32} />,
    color: "bg-indigo-500",
  },
  {
    title: "Model Development",
    description:
      "Machine learning models are trained, evaluated and tracked using MLflow.",
    icon: <BrainCircuit size={32} />,
    color: "bg-purple-500",
  },
  {
    title: "Responsible AI",
    description:
      "Explainability, fairness analysis, governance and model validation are applied before deployment.",
    icon: <ShieldCheck size={32} />,
    color: "bg-emerald-500",
  },
  {
    title: "Production Monitoring",
    description:
      "Models are continuously monitored for drift, latency, prediction quality and operational health.",
    icon: <Activity size={32} />,
    color: "bg-orange-500",
  },
  {
    title: "Business Intelligence",
    description:
      "Enterprise dashboards provide governance metrics and AI performance insights for decision makers.",
    icon: <BarChart3 size={32} />,
    color: "bg-cyan-500",
  },
];

export default function ResponsibleAILifecycle() {
  return (
    <section className="space-y-16">

      {/* Header */}

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
          Enterprise Lifecycle
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
          Responsible AI Lifecycle
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
          Responsible AI is embedded into every phase of the machine
          learning lifecycle—from data ingestion through production
          monitoring and executive reporting.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative">

        {/* Horizontal Line */}

        <div
          className="
            absolute
            left-0
            right-0
            top-12

            hidden
            h-1

            rounded-full

            bg-gradient-to-r
            from-blue-500
            via-emerald-500
            to-cyan-500

            lg:block
          "
        />

        <div
          className="
            grid
            gap-8

            lg:grid-cols-6
          "
        >

          {lifecycle.map((step) => (

            <div
              key={step.title}
              className="
                relative
                z-10

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
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}