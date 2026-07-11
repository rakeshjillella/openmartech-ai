const skills = [
  "Python",
  "SQL",
  "Apache Spark",
  "Kafka",
  "Airbyte",
  "Databricks",
  "AWS",
  "Flink",
  "SparkML",
  "Airflow",
  "dbt",
  "MLflow",
  "Iceberg",
  "DuckDB",
  "MinIO",
  "PostgreSQL",
  "Docker",
  "Power BI",
  "Responsible AI",
  "RAG",
  "LLMs",
  "Dify",
  "Langfuse",
  "LangChain",
  "LangGraph"
];

export default function SkillsGrid() {
  return (
    <section className="py-28">

      <div className="mb-20 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Technology Stack
        </span>

        <h2 className="mt-8 text-5xl font-black dark:text-white">
          Enterprise Expertise
        </h2>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {skills.map((skill) => (

          <div
            key={skill}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              text-center
              font-semibold
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500
              hover:shadow-2xl
              dark:border-slate-800
              dark:bg-slate-900
              dark:text-white
            "
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}