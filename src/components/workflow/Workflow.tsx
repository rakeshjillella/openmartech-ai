import Container from "@/components/ui/Container";
import WorkflowPipeline from "./pipeline/WorkflowPipeline";

export default function Workflow() {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950">

      <Container>

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Enterprise Workflow
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900 dark:text-white">
            End-to-End Data Pipeline
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-slate-600 dark:text-slate-400">
            Explore how enterprise data flows through ingestion,
            streaming, lakehouse, AI, Responsible AI,
            observability and executive dashboards.
          </p>

        </div>

        <WorkflowPipeline />

      </Container>

    </section>
  );
}