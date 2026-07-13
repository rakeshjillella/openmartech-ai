const checklist = [
  "Bias Detection",
  "SHAP Explainability",
  "Model Registry",
  "Version Control",
  "Human Review",
  "Policy Enforcement",
  "Monitoring",
  "Audit Logs",
];

export default function GovernanceChecklist() {
  return (
    <section
      className="
        rounded-[36px]
        bg-slate-900
        p-14
        text-white
      "
    >
      <span className="font-semibold uppercase tracking-widest text-green-400">
        Governance
      </span>

      <h2 className="mt-6 text-5xl font-black">
        Enterprise Governance Checklist
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {checklist.map((item) => (

          <div
            key={item}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
            "
          >
            ✅ {item}
          </div>

        ))}

      </div>

    </section>
  );
}