export default function ResponsibleAIStatus() {
  return (
    <section className="rounded-3xl border bg-white p-10">

      <h2 className="text-3xl font-black">

        Responsible AI Overview

      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <Card
          title="Bias Detection"
          value="Passed"
        />

        <Card
          title="Model Drift"
          value="Stable"
        />

        <Card
          title="Explainability"
          value="SHAP Enabled"
        />

        <Card
          title="Governance"
          value="Compliant"
        />

      </div>

    </section>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-6">

      <p className="text-slate-500">

        {title}

      </p>

      <h3 className="mt-3 text-2xl font-bold">

        {value}

      </h3>

    </div>
  );
}