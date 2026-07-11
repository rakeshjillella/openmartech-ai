export default function RAIWorkflow() {
  return (
    <section className="rounded-3xl bg-slate-900 p-12 text-white">

      <h2 className="text-4xl font-black">

        Responsible AI Lifecycle

      </h2>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

        <Step title="Training" />

        →

        <Step title="Validation" />

        →

        <Step title="Explainability" />

        →

        <Step title="Bias Detection" />

        →

        <Step title="Deployment" />

        →

        <Step title="Monitoring" />

      </div>

    </section>
  );
}

function Step({
  title,
}: {
  title: string;
}) {
  return (
    <div className="rounded-xl bg-slate-800 px-6 py-4">
      {title}
    </div>
  );
}