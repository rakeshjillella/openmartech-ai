import {
  Database,
  Workflow,
 BrainCircuit,
 ShieldCheck,
 LayoutDashboard,
 ArrowRight,
} from "@/lib/icons";

const layers = [
  {
    icon: Database,
    title: "Data Sources",
    description:
      "Operational systems including PostgreSQL and enterprise applications providing transactional business data.",
  },
  {
    icon: Workflow,
    title: "Streaming & Processing",
    description:
      "Apache Kafka, Airflow and Spark orchestrate real-time streaming, ETL workflows and distributed processing.",
  },
  {
    icon: Database,
    title: "Lakehouse",
    description:
      "Apache Iceberg, MinIO and DuckDB provide scalable enterprise storage, analytics and semantic modeling.",
  },
  {
    icon: BrainCircuit,
    title: "Enterprise AI",
    description:
      "MLflow, Dify and enterprise LLM workflows enable predictive analytics, MLOps and intelligent automation.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    description:
      "Bias monitoring, explainability, governance and model validation ensure trustworthy AI decisions.",
  },
  {
    icon: LayoutDashboard,
    title: "Executive Intelligence",
    description:
      "Power BI dashboards deliver executive reporting, operational KPIs and enterprise business intelligence.",
  },
];

export default function DocumentationArchitecture() {
  return (
    <section className="space-y-14">

      <div className="max-w-4xl">

        <span
          className="
            inline-flex
            rounded-full
            bg-cyan-100
            px-4
            py-2
            text-sm
            font-semibold
            text-cyan-700

            dark:bg-cyan-900/30
            dark:text-cyan-300
          "
        >
          Architecture Reference
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
          Enterprise Platform Architecture
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
          OpenMarTech AI is built as a modern enterprise platform,
          combining data engineering, AI, Responsible AI,
          observability and executive analytics into one unified
          ecosystem.
        </p>

      </div>

      <div
        className="
          space-y-6
        "
      >

        {layers.map((layer, index) => {

          const Icon = layer.icon;

          return (

            <div
              key={layer.title}
              className="
                group

                flex
                flex-col
                gap-8

                rounded-[30px]

                border
                border-slate-200

                bg-white

                p-8

                shadow-lg

                transition-all
                duration-300

                hover:border-cyan-500
                hover:shadow-xl

                dark:border-slate-800
                dark:bg-slate-900

                lg:flex-row
                lg:items-center
              "
            >

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center

                  rounded-3xl

                  bg-cyan-100

                  text-cyan-600

                  dark:bg-cyan-900/30
                  dark:text-cyan-300
                "
              >
                <Icon size={34} />
              </div>

              <div className="flex-1">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center

                      rounded-full

                      bg-cyan-600

                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    {index + 1}
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {layer.title}
                  </h3>

                </div>

                <p
                  className="
                    mt-5
                    leading-8
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {layer.description}
                </p>

              </div>

              <button
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  bg-cyan-600

                  px-5
                  py-3

                  font-semibold
                  text-white

                  transition

                  hover:bg-cyan-700
                "
              >
                Learn More

                <ArrowRight size={18} />

              </button>

            </div>

          );

        })}

      </div>

    </section>
  );
}