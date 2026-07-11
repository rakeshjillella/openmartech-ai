const stats = [
  {
    title: "AI Services",
    value: "6",
  },
  {
    title: "ML Models",
    value: "4",
  },
  {
    title: "Responsible AI",
    value: "100%",
  },
  {
    title: "Observability",
    value: "24/7",
  },
];

export default function AIStats() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">

      {stats.map((item) => (

        <div
          key={item.title}
          className="rounded-3xl border bg-white p-8 text-center shadow-sm"
        >

          <h2 className="text-5xl font-black text-blue-600">

            {item.value}

          </h2>

          <p className="mt-4 text-slate-500">

            {item.title}

          </p>

        </div>

      ))}

    </div>
  );
}