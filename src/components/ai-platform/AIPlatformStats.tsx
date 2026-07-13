const stats = [
  {
    title: "Enterprise Services",
    value: "18+",
    color: "bg-blue-500",
  },
  {
    title: "AI Components",
    value: "8",
    color: "bg-purple-500",
  },
  {
    title: "ML Pipelines",
    value: "12",
    color: "bg-cyan-500",
  },
  {
    title: "Platform Availability",
    value: "99.9%",
    color: "bg-green-500",
  },
];

export default function AIPlatformStats() {
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
              hover:border-blue-500
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