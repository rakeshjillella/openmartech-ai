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
    <section className="py-4">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {metrics.map((item) => (

          <div
            key={item.title}
            className="
              group
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500
              hover:shadow-2xl
              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div
              className={`mb-5 h-2 w-24 rounded-full ${item.color}`}
            />

            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {item.title}
            </p>

            <h3 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
              {item.value}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}