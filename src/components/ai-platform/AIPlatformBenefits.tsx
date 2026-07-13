import {
  CheckCircle2,
  ShieldCheck,
  BrainCircuit,
  Workflow,
  Database,
  LayoutDashboard,
} from "@/lib/icons";

const benefits = [

  {
    title: "Enterprise Architecture",
    description:
      "Production-inspired architecture designed around modern enterprise data platforms.",
    icon: <Database size={30} />,
  },

  {
    title: "Responsible AI",
    description:
      "Governance, explainability, fairness and transparency built into every AI workflow.",
    icon: <ShieldCheck size={30} />,
  },

  {
    title: "End-to-End Automation",
    description:
      "Automated orchestration from ingestion through deployment using Airflow and MLflow.",
    icon: <Workflow size={30} />,
  },

  {
    title: "Generative AI",
    description:
      "Enterprise LLM applications with Retrieval-Augmented Generation and prompt orchestration.",
    icon: <BrainCircuit size={30} />,
  },

  {
    title: "Executive Intelligence",
    description:
      "Business-ready dashboards delivering KPIs and actionable executive insights.",
    icon: <LayoutDashboard size={30} />,
  },

  {
    title: "Production Ready",
    description:
      "Designed with scalability, observability, governance and maintainability in mind.",
    icon: <CheckCircle2 size={30} />,
  },

];

export default function AIPlatformBenefits() {

  return (

    <section className="space-y-16">

      <div className="mx-auto max-w-4xl text-center">

        <span
          className="
            rounded-full
            bg-green-100
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-green-700
            dark:bg-green-900/30
            dark:text-green-300
          "
        >
          Why OpenMarTech AI
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
          Built Like an Enterprise Platform
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
          Every layer of OpenMarTech AI follows modern enterprise
          architecture principles—from reliable data engineering
          through Responsible AI to executive analytics.
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

        {benefits.map((benefit) => (

          <div
            key={benefit.title}
            className="
              rounded-[30px]
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
                bg-green-100
                text-green-600
                dark:bg-green-900/30
                dark:text-green-300
              "
            >
              {benefit.icon}
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
              {benefit.title}
            </h3>

            <p
              className="
                mt-4
                leading-8
                text-slate-600
                dark:text-slate-400
              "
            >
              {benefit.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}