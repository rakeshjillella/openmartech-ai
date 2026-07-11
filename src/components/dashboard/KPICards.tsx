const metrics = [
  {
    title: "Pipelines",
    value: "24",
    change: "+12%",
  },
  {
    title: "ML Models",
    value: "4",
    change: "Healthy",
  },
  {
    title: "AI Services",
    value: "6",
    change: "Running",
  },
  {
    title: "Responsible AI",
    value: "100%",
    change: "Compliant",
  },
];

export default function KPICards() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">

      {metrics.map((item) => (

        <div
          key={item.title}
          className="rounded-3xl border bg-white p-8 shadow-sm"
        >

          <p className="text-slate-500">
            {item.title}
          </p>

          <h2 className="mt-4 text-5xl font-black">

            {item.value}

          </h2>

          <p className="mt-4 text-green-600">

            {item.change}

          </p>

        </div>

      ))}

    </div>
  );
}