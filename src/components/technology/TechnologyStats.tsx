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

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => (

        <div
          key={item.title}
          className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            dark:border-slate-800
            dark:bg-slate-900
          "
        >

          <div className={`mb-5 h-2 w-24 rounded-full ${item.color}`} />

          <p className="text-slate-500 dark:text-slate-400">
            {item.title}
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
            {item.value}
          </h2>

        </div>

      ))}

    </div>

  );
}