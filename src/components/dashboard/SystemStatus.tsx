const systems = [
  "Airflow",
  "Kafka",
  "Spark",
  "Iceberg",
  "MLflow",
  "Langfuse",
  "Power BI",
];

export default function SystemStatus() {
  return (
    <section className="rounded-3xl border bg-white p-10">

      <h2 className="mb-8 text-3xl font-black">

        Platform Health

      </h2>

      <div className="space-y-5">

        {systems.map((system) => (

          <div
            key={system}
            className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
          >

            <span>{system}</span>

            <span className="rounded-full bg-green-100 px-4 py-1 text-green-700">

              Healthy

            </span>

          </div>

        ))}

      </div>

    </section>
  );
}