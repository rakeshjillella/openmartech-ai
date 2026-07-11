const timeline = [
  {
    year: "2019",
    title: "Associate Digital Marketing",
    company: "Aptroid Consulting",
    description:
      "Started building enterprise marketing campaigns and automation solutions.",
  },
  {
    year: "2021",
    title: "Project & Client Success",
    company: "Aptroid Consulting",
    description:
      "Managed enterprise projects and stakeholder relationships.",
  },
  {
    year: "2024",
    title: "Data Engineering",
    company: "Career Transition",
    description:
      "Focused on Spark, Kafka, Airflow, Lakehouse, Python and AI Engineering.",
  },
  {
    year: "2026",
    title: "OpenMarTech AI",
    company: "Enterprise Portfolio",
    description:
      "Designed an enterprise AI ecosystem integrating Responsible AI, MLOps and Executive Intelligence.",
  },
];

export default function CareerTimeline() {
  return (
    <section className="py-28">

      <div className="mb-20 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Career Journey
        </span>

        <h2 className="mt-8 text-5xl font-black dark:text-white">
          Professional Timeline
        </h2>

      </div>

      <div className="space-y-10">

        {timeline.map((item) => (

          <div
            key={item.year}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-10
              shadow-lg
              transition
              hover:-translate-y-1
              hover:shadow-2xl
              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div className="flex flex-col gap-8 lg:flex-row">

              <div className="w-40">

                <div className="text-5xl font-black text-blue-600">
                  {item.year}
                </div>

              </div>

              <div>

                <h3 className="text-3xl font-bold dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-semibold text-blue-600">
                  {item.company}
                </p>

                <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}