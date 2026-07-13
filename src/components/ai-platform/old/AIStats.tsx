const stats = [
  {
    title: "LLMs",
    value: "4",
    color: "bg-blue-500",
  },
  {
    title: "ML Models",
    value: "4",
    color: "bg-purple-500",
  },
  {
    title: "Production APIs",
    value: "8",
    color: "bg-green-500",
  },
  {
    title: "Responsible AI",
    value: "100%",
    color: "bg-orange-500",
  },
];

export default function AIStats() {
  return (
    <section className="py-24">

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (

          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              transition
              hover:-translate-y-1
              hover:shadow-xl
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <div
              className={`mb-5 h-3 w-20 rounded-full ${item.color}`}
            />

            <p className="text-sm uppercase tracking-wide text-slate-500">
              {item.title}
            </p>

            <h2 className="mt-5 text-5xl font-black dark:text-white">
              {item.value}
            </h2>

          </div>

        ))}

      </div>

    </section>
  );
}