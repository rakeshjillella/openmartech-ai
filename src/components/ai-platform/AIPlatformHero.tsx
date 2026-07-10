import Container from "@/components/ui/Container";

export default function AIPlatformHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-24">

      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Enterprise AI Platform Engineering
          </span>

          <h1 className="mt-8 text-6xl font-black tracking-tight text-slate-900">
            Production AI Platform
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            OpenMarTech AI demonstrates a modern enterprise architecture
            integrating Data Engineering, AI Platform Engineering,
            Responsible AI, Explainability, MLOps, LLM Engineering,
            and Executive Decision Intelligence into one unified platform.
          </p>

        </div>

      </Container>

    </section>
  );
}