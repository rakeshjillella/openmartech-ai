const metrics = [
  {
    title: "Business Dashboards",
    value: "30+",
    color: "bg-blue-500",
    description: "Interactive executive reports",
  },
  {
    title: "Real-Time KPIs",
    value: "150+",
    color: "bg-cyan-500",
    description: "Streaming business metrics",
  },
  {
    title: "AI Insights",
    value: "25+",
    color: "bg-purple-500",
    description: "ML-powered recommendations",
  },
  {
    title: "Enterprise Data Sources",
    value: "12",
    color: "bg-green-500",
    description: "Integrated data platforms",
  },
];

export default function DashboardMetrics() {
  return (
    <section className="space-y-10">

      <div className="max-w-3xl">

        <h2
          className="
            text-4xl
            font-black
            tracking-tight

            text-slate-900

            dark:text-white

            lg:text-5xl
          "
        >
          Executive Performance Metrics
        </h2>

        <p
          className="
            mt-5

            text-lg
            leading-8

            text-slate-600

            dark:text-slate-400
          "
        >
          Enterprise dashboards consolidate operational, financial,
          customer, marketing and AI performance into one unified
          decision intelligence platform.
        </p>

      </div>

      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        {metrics.map((metric) => (

          <div
            key={metric.title}
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
              hover:border-blue-500
              hover:shadow-2xl

              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div
              className={`mb-6 h-2 w-24 rounded-full ${metric.color}`}
            />

            <p
              className="
                text-sm
                font-semibold

                text-slate-500

                dark:text-slate-400
              "
            >
              {metric.title}
            </p>

            <h3
              className="
                mt-5

                text-5xl
                font-black

                text-slate-900

                dark:text-white
              "
            >
              {metric.value}
            </h3>

            <p
              className="
                mt-5

                leading-7

                text-slate-600

                dark:text-slate-400
              "
            >
              {metric.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}