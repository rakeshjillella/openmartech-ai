const items = [
  "Model Cards",
  "Audit Logs",
  "Governance",
  "Risk Assessment",
  "Versioning",
  "Compliance Reports",
];

export default function ComplianceCards() {
  return (
    <section>

      <h2 className="mb-10 text-4xl font-black">

        Governance Framework

      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {items.map((item) => (

          <div
            key={item}
            className="rounded-3xl border bg-white p-8 shadow-sm"
          >

            <h3 className="text-2xl font-bold">

              {item}

            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}