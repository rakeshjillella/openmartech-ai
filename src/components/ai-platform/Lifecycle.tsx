const stages = [
  "Ingestion",
  "Streaming",
  "Processing",
  "Lakehouse",
  "Machine Learning",
  "Responsible AI",
  "Visualization",
];

export default function Lifecycle() {
  return (
    <section>

      <h2 className="mb-10 text-4xl font-black">

        AI Lifecycle

      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stages.map((stage) => (

          <div
            key={stage}
            className="rounded-2xl border bg-white p-8 shadow-sm"
          >

            <h3 className="font-bold">

              {stage}

            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}