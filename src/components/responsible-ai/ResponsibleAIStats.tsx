const stats = [
  {
    title: "Responsible AI Controls",
    value: "12+",
    color: "bg-emerald-500",
  },
  {
    title: "Explainability Methods",
    value: "5",
    color: "bg-blue-500",
  },
  {
    title: "Governance Layers",
    value: "6",
    color: "bg-purple-500",
  },
  {
    title: "Enterprise Compliance",
    value: "100%",
    color: "bg-orange-500",
  },
];

export default function ResponsibleAIStats() {
  return (
    <section>

      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        {stats.map((item) => (

          <div
            key={item.title}
            className="
              group

              rounded-[30px]

              border
              border-slate-200

              bg-white

              p-8

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-emerald-500
              hover:shadow-2xl

              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div
              className={`mb-5 h-2 w-24 rounded-full ${item.color}`}
            />

            <p
              className="
                text-sm
                font-medium

                text-slate-500
                dark:text-slate-400
              "
            >
              {item.title}
            </p>

            <h2
              className="
                mt-4

                text-5xl
                font-black

                text-slate-900
                dark:text-white
              "
            >
              {item.value}
            </h2>

          </div>

        ))}

      </div>

    </section>
  );
}