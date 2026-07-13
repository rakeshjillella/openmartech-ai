import ComplianceCards from "./ComplianceCards";
import GovernanceChecklist from "./GovernanceChecklist";

export default function ComplianceSection() {
  return (
    <section className="py-24">

      <div className="mb-20 text-center">

        <span className="font-semibold uppercase tracking-widest text-emerald-600">
          Enterprise Compliance
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          AI Governance & Compliance
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-slate-600 dark:text-slate-400">
          Responsible AI is implemented across the complete lifecycle,
          ensuring explainability, governance, monitoring,
          regulatory compliance and executive transparency.
        </p>

      </div>

      <ComplianceCards />

      <div className="mt-20">
        <GovernanceChecklist />
      </div>

    </section>
  );
}