const standards = [
  {
    name: "EU AI Act",
    description:
      "Risk-based AI governance aligned with upcoming European regulations.",
  },
  {
    name: "NIST AI RMF",
    description:
      "Govern, Map, Measure and Manage AI risk framework.",
  },
  {
    name: "ISO 42001",
    description:
      "Artificial Intelligence Management System.",
  },
  {
    name: "GDPR",
    description:
      "Privacy and personal data protection.",
  },
];

export default function ComplianceSection() {
  return (
    <section className="mt-24">

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Enterprise Compliance
        </h2>

        <p className="mt-3 text-slate-600">
          Responsible AI aligned with globally recognized governance frameworks.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {standards.map((standard) => (

          <div
            key={standard.name}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <h3 className="text-2xl font-bold text-blue-600">
              {standard.name}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {standard.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}