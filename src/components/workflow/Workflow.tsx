import Container from "@/components/ui/Container";
import { pipeline } from "@/data/pipeline";
import PipelineCard from "./PipelineCard";

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-slate-50 py-28"
    >
      <Container>

        <div className="mx-auto mb-20 max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Enterprise Data Pipeline
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            From Raw Enterprise Data to AI-Powered Decisions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every marketing event flows through a modern enterprise
            pipeline before becoming intelligent business decisions.
          </p>

        </div>

        <div className="overflow-x-auto pb-8">

          <div className="flex items-center gap-8">

            {pipeline.map((step, index) => (
              <div
                key={step.title}
                className="flex items-center gap-8"
              >
                <PipelineCard {...step} />

                {index < pipeline.length - 1 && (
                  <div className="text-4xl font-light text-blue-500">
                    →
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}