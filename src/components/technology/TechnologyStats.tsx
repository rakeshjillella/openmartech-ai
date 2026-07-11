const stats = [
  {
    title: "Enterprise Technologies",
    value: "18",
    color: "bg-blue-500",
  },
  {
    title: "Cloud Platforms",
    value: "3",
    color: "bg-indigo-500",
  },
  {
    title: "AI Frameworks",
    value: "6",
    color: "bg-purple-500",
  },
  {
    title: "Open Source",
    value: "100%",
    color: "bg-green-500",
  },
];

export default function TechnologyStats() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border bg-white p-8 shadow-sm"
        >
          <div className={`mb-4 h-2 w-20 rounded-full ${item.color}`} />
          <p className="text-slate-500">{item.title}</p>
          <h2 className="mt-3 text-5xl font-black">{item.value}</h2>
        </div>
      ))}
    </div>
  );
}