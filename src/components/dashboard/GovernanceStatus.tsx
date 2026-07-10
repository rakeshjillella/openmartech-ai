import EnterpriseCard from "@/components/ui/EnterpriseCard";

const governance = [
  {
    title: "Bias Monitoring",
    value: "Passed",
  },
  {
    title: "Explainability",
    value: "SHAP Enabled",
  },
  {
    title: "Model Drift",
    value: "No Drift",
  },
  {
    title: "Compliance",
    value: "ISO 42001",
  },
];

export default function GovernanceStatus() {
  return (
    <section className="mt-24">

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Responsible AI Governance
        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {governance.map((item) => (

          <EnterpriseCard key={item.title}>

            <p className="text-sm uppercase tracking-wide text-slate-500">
              {item.title}
            </p>

            <h3 className="mt-5 text-2xl font-bold text-blue-600">
              {item.value}
            </h3>

          </EnterpriseCard>

        ))}

      </div>

    </section>
  );
}