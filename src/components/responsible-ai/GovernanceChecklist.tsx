const checklist = [
  "Model Versioning (MLflow)",
  "Feature Lineage",
  "Explainability (SHAP)",
  "Bias Monitoring",
  "Data Validation",
  "Drift Detection",
  "Human Approval Workflow",
  "Audit Logging",
  "Role-Based Access Control",
  "Continuous Monitoring",
];

export default function GovernanceChecklist() {
  return (
    <section className="mt-24">

      <h2 className="mb-8 text-3xl font-bold">
        Governance Checklist
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {checklist.map((item) => (

          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-xl text-emerald-600">
              ✓
            </div>

            <span className="font-medium text-slate-700">
              {item}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}