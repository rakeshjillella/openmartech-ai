export default function ArchitectureOverview() {
  return (
    <section className="rounded-3xl border bg-slate-900 p-12 text-white">

      <h2 className="text-4xl font-black">

        Enterprise AI Workflow

      </h2>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-center">

        <Step title="PostgreSQL" />
        <Arrow />
        <Step title="Kafka" />
        <Arrow />
        <Step title="Spark" />
        <Arrow />
        <Step title="Iceberg" />
        <Arrow />
        <Step title="MLflow" />
        <Arrow />
        <Step title="Responsible AI" />
        <Arrow />
        <Step title="Power BI" />

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
    <div className="rounded-2xl bg-slate-800 px-6 py-4 font-semibold">
      {title}
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-3xl text-blue-400">
      →
    </div>
  );
}