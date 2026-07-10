import Container from "@/components/ui/Container";

const capabilities = [
  {
    title: "Data Engineering",
    description: "Kafka, Spark, Iceberg, dbt pipelines."
  },
  {
    title: "AI Platform",
    description: "ML lifecycle with MLflow and Feature Store."
  },
  {
    title: "Responsible AI",
    description: "Bias monitoring, explainability and governance."
  },
  {
    title: "Generative AI",
    description: "RAG, Dify, Groq and enterprise copilots."
  },
  {
    title: "Executive Intelligence",
    description: "Power BI dashboards and business insights."
  },
  {
    title: "Observability",
    description: "LangFuse, logging, monitoring and tracing."
  },
];

export default function EnterpriseCapabilities() {
  return (
    <section className="py-24">

      <Container>

        <div className="mb-14 text-center">

          <h2 className="text-5xl font-bold">
            Enterprise Platform Capabilities
          </h2>

          <p className="mt-5 text-xl text-slate-600">
            Everything required for a production-grade AI platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {capabilities.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}