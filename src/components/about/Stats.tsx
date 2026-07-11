const stats = [
  { value: "20+", label: "Enterprise Technologies" },
  { value: "4", label: "ML Models" },
  { value: "35+", label: "Architecture Components" },
  { value: "100%", label: "Open Source" },
];

export default function Stats() {
  return (
    <section className="grid gap-8 py-20 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => (

        <div
          key={item.label}
          className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-10
            text-center
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

          <div className="text-6xl font-black text-blue-600">
            {item.value}
          </div>

          <div className="mt-5 text-slate-500 dark:text-slate-400">
            {item.label}
          </div>

        </div>

      ))}

    </section>
  );
}