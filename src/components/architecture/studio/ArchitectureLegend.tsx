"use client";

const legend = [
  {
    color: "bg-blue-600",
    title: "Compute Layer",
    description: "Spark, Airflow, Flink",
  },
  {
    color: "bg-green-600",
    title: "Storage Layer",
    description: "Iceberg, MinIO, PostgreSQL",
  },
  {
    color: "bg-purple-600",
    title: "AI / ML",
    description: "MLflow, Responsible AI, LLMs",
  },
  {
    color: "bg-orange-500",
    title: "Visualization",
    description: "Power BI & Dashboards",
  },
];

export default function ArchitectureLegend() {
  return (
    <section
      className="
        rounded-[32px]

        border
        border-slate-200

        bg-white

        p-10

        shadow-xl

        transition-all
        duration-300

        dark:border-slate-800
        dark:bg-slate-900
      "
    >

      <h2
        className="
          text-3xl
          font-black

          text-slate-900

          dark:text-white
        "
      >
        Architecture Legend
      </h2>

      <p
        className="
          mt-3

          text-lg
          leading-8

          text-slate-600

          dark:text-slate-400
        "
      >
        Color coding used throughout the Enterprise Architecture Studio.
      </p>

      <div
        className="
          mt-10

          grid
          gap-6

          md:grid-cols-2
        "
      >

        {legend.map((item) => (

          <div
            key={item.title}
            className="
              flex
              items-start
              gap-4

              rounded-2xl

              border
              border-slate-200

              bg-slate-50

              p-5

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-400
              hover:bg-white
              hover:shadow-lg

              dark:border-slate-800
              dark:bg-slate-950
              dark:hover:bg-slate-800
            "
          >

            <div
              className={`
                mt-1
                h-5
                w-5
                rounded-full
                ${item.color}
              `}
            />

            <div>

              <h3
                className="
                  font-bold
                  text-slate-900

                  dark:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-1

                  text-sm
                  text-slate-500

                  dark:text-slate-400
                "
              >
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}