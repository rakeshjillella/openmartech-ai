import Container from "@/components/ui/Container";

const stages = [
  {
    title: "Development",
    description:
      "Build data pipelines, machine learning models, APIs and AI services.",
  },
  {
    title: "Testing",
    description:
      "Validate data quality, model accuracy, Responsible AI and system reliability.",
  },
  {
    title: "Production",
    description:
      "Deploy with monitoring, observability, governance and continuous improvement.",
  },
];

export default function DeploymentLifecycle() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Deployment Lifecycle
          </h2>

          <p className="mt-6 text-xl text-slate-600">
            Enterprise AI systems evolve through a structured lifecycle to
            ensure quality, governance and scalability.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {stages.map((stage, index) => (
            <div
              key={stage.title}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {stage.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {stage.description}
              </p>

              {index !== stages.length - 1 && (
                <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-4xl text-blue-500 md:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}