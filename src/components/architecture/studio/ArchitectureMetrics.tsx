const metrics = [
  {
    title: "Platform Components",
    value: "15",
    color: "bg-blue-500",
  },
  {
    title: "Streaming Services",
    value: "4",
    color: "bg-green-500",
  },
  {
    title: "AI Services",
    value: "5",
    color: "bg-purple-500",
  },
  {
    title: "Data Stores",
    value: "6",
    color: "bg-orange-500",
  },
];

export default function ArchitectureMetrics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div
            className={`mb-4 h-2 w-20 rounded-full ${item.color}`}
          />

          <p className="text-sm text-slate-500">
            {item.title}
          </p>

          <h3 className="mt-2 text-4xl font-black">
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
}