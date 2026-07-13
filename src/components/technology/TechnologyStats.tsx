const stats = [
  {
    title: "Enterprise Technologies",
    value: "18",
    color: "bg-blue-500",
    description: "Integrated production-grade technologies",
  },
  {
    title: "Cloud Platforms",
    value: "3",
    color: "bg-indigo-500",
    description: "Cloud-native deployment environments",
  },
  {
    title: "AI Frameworks",
    value: "6",
    color: "bg-purple-500",
    description: "Machine Learning & Generative AI stack",
  },
  {
    title: "Open Source",
    value: "100%",
    color: "bg-green-500",
    description: "Built completely with open-source technologies",
  },
];

export default function TechnologyStats() {
  return (
    <section>
      <div
        className="
          grid
          gap-6

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

              rounded-[30px]

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
            {/* Decorative Gradient */}

            <div
              className="
                absolute
                -right-12
                -top-12

                h-36
                w-36

                rounded-full

                bg-blue-500/5

                blur-3xl

                transition-all
                duration-500

                group-hover:bg-blue-500/10
              "
            />

            {/* Accent */}

            <div
              className={`mb-6 h-2 w-24 rounded-full ${item.color}`}
            />

            {/* Label */}

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wide

                text-slate-500

                dark:text-slate-400
              "
            >
              {item.title}
            </p>

            {/* Value */}

            <h2
              className="
                mt-5

                text-5xl
                font-black
                tracking-tight

                text-slate-900

                dark:text-white
              "
            >
              {item.value}
            </h2>

            {/* Description */}

            <p
              className="
                mt-5

                text-base
                leading-7

                text-slate-600

                dark:text-slate-400
              "
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}