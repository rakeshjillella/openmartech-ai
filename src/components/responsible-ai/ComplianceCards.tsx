const compliance = [
  "EU AI Act",
  "NIST AI RMF",
  "ISO 42001",
  "GDPR",
  "SOC2",
  "Enterprise Audit Trail",
];

export default function ComplianceCards() {
  return (
    <section className="py-24">

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {compliance.map((item) => (

          <div
            key={item}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              text-center
              shadow-sm
              transition
              hover:-translate-y-2
              hover:border-green-500
              hover:shadow-xl
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-white
            "
          >
            ✅

            <h3 className="mt-5 text-2xl font-bold">
              {item}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}