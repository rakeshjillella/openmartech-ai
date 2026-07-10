import Container from "@/components/ui/Container";

const services = [
  "Docker",
  "Apache Airflow",
  "Apache Kafka",
  "Apache Spark",
  "Apache Iceberg",
  "dbt",
  "MLflow",
  "Power BI",
  "Dify",
  "LangFuse",
  "Monitoring",
  "Governance",
];

export default function ProductionReadiness() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Production Readiness
          </h2>

          <p className="mt-6 text-xl text-slate-600">
            Enterprise-grade technologies powering OpenMarTech AI.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-600">
                ✓
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {service}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Production Ready
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}