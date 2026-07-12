const lifecycle = [
  {
    title: "Ingest",
    description: "Kafka • CDC • APIs",
  },
  {
    title: "Process",
    description: "Spark • PySpark",
  },
  {
    title: "Store",
    description: "Iceberg • MinIO",
  },
  {
    title: "Transform",
    description: "dbt",
  },
  {
    title: "Train",
    description: "Spark ML",
  },
  {
    title: "Govern",
    description: "Responsible AI",
  },
  {
    title: "Deploy",
    description: "MLflow",
  },
  {
    title: "Observe",
    description: "Langfuse",
  },
];

export default function Lifecycle() {
  return (
    <section className="py-24">

      <div className="mb-16 text-center">

        <span className="font-semibold uppercase tracking-widest text-green-600">
          Lifecycle
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          AI Lifecycle
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {lifecycle.map((item) => (

          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              transition
              hover:-translate-y-2
              hover:shadow-xl
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <h3 className="text-2xl font-bold dark:text-white">
              {item.title}
            </h3>

            <p className="mt-5 text-slate-600 dark:text-slate-400">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}